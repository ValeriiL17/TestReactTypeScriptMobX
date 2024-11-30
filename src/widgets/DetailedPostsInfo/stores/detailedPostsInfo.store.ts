import { makeAutoObservable, reaction, runInAction } from 'mobx';

import { debounce } from 'lodash';

import { PostsFiltersStore } from '@app-features/PostsFilters';
import { PostsSortingStore } from '@app-features/PostSorting';
import { PostModel, UserModel } from '@app-shared/models';
import { compareNumBySortMode, compareStrBySortMode } from '@app-shared/utils';

import { type IDetailedPostsInfoTransport, type TUserRecords } from '../types';

const PROCESS_DELAY = 300;

export interface IDetailedPostsInfoStore {
  readonly isInited: boolean;

  readonly processedPosts: PostModel[];
  readonly postsFiltersStore: PostsFiltersStore;
  readonly postsSortingStore: PostsSortingStore;

  get usersRecords(): TUserRecords;

  init(): Promise<void>;
}

export class DetailedPostsInfoStore implements IDetailedPostsInfoStore {
  private _users: UserModel[] = [];
  private _posts: PostModel[] = [];

  processedPosts: PostModel[] = [];
  postsFiltersStore = new PostsFiltersStore();
  postsSortingStore = new PostsSortingStore();

  isInited = false;
  isLoading = false;

  constructor(private readonly _transport: IDetailedPostsInfoTransport) {
    makeAutoObservable(this);

    reaction(
      () => [
        this._posts,
        this.postsFiltersStore.title,
        this.postsFiltersStore.body,
        this.postsFiltersStore.author,
        this.postsSortingStore.sortingFields,
      ],
      () => {
        this._processPosts();
      },
    );
  }

  get usersRecords(): TUserRecords {
    return this._users.reduce<TUserRecords>((acc, user) => {
      acc[user.id] = user;
      return acc;
    }, {});
  }

  setPosts(value: PostModel[]) {
    this._posts = value;
  }

  setProcessedPosts(value: PostModel[]) {
    this.processedPosts = value;
  }

  setUsers(value: UserModel[]) {
    this._users = value;
  }

  async init() {
    this.isInited = false;

    await Promise.all([this._loadPosts(), this._loadUsers()]);

    runInAction(() => {
      this.isInited = true;
    });
  }

  private async _loadPosts() {
    try {
      const res = await this._transport.getPosts();
      const postModels = res.map((dto) => new PostModel(dto));

      this.setPosts(postModels);
    } catch (e) {
      console.log('Ошибка при загрузке постов:' + e);
    }
  }

  private async _loadUsers() {
    try {
      const res = await this._transport.getUsers();
      const userModels = res.map((dto) => new UserModel(dto));

      this.setUsers(userModels);
    } catch (e) {
      console.log('Ошибка при загрузке пользователей:' + e);
    }
  }

  private _processPosts = debounce(() => {
    const { title: filterTitle, body: filterBody, author: filterAuthor } = this.postsFiltersStore;
    const { currentSortingField, sortingFields } = this.postsSortingStore;

    const processedPosts = this._posts
      .filter((post) => {
        let isValid = true;

        if (filterTitle) {
          isValid &&= post.title.includes(filterTitle);
        }

        if (filterBody) {
          isValid &&= post.body.includes(filterBody);
        }

        if (filterAuthor) {
          isValid &&= post.userId === filterAuthor.id;
        }

        return isValid;
      })
      .sort((left, right) => {
        switch (currentSortingField) {
          case 'author':
            return compareNumBySortMode(left.userId, right.userId, sortingFields['author']);
          case 'title':
            return compareStrBySortMode(left.title, right.title, sortingFields['title']);
          case 'body':
            return compareStrBySortMode(left.body, right.body, sortingFields['body']);
          default:
            return 0;
        }
      });

    this.setProcessedPosts(processedPosts);
  }, PROCESS_DELAY);
}
