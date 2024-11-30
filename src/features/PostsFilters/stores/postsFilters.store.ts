import { action, makeAutoObservable } from 'mobx';

import { type UserModel } from '@app-shared/models';

export class PostsFiltersStore {
  title: string | null = null;
  body: string | null = null;
  author: UserModel | null = null;

  constructor() {
    makeAutoObservable(this, {
      setTitle: action.bound,
      setBody: action.bound,
      setAuthor: action.bound,
      reset: action.bound,
    });
  }

  setTitle(value: string | null) {
    this.title = value;
  }

  setBody(value: string | null) {
    this.body = value;
  }

  setAuthor(value: UserModel | null) {
    this.author = value;
  }

  reset() {
    this.setTitle(null);
    this.setBody(null);
    this.setAuthor(null);
  }
}
