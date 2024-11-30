import { makeObservable, override } from 'mobx';

import { type PostModel } from '@app-shared/models';
import { type IModalStore, ModalStore } from '@app-shared/ui';

export interface IPostEditModalStore extends IModalStore {
  readonly currentPost: PostModel | null;

  openForEditing(post: PostModel): void;
}

export class PostEditModalStore extends ModalStore implements IPostEditModalStore {
  currentPost: PostModel | null = null;

  constructor() {
    super();
    makeObservable(this, { openForEditing: true, currentPost: true, onHide: override });
  }

  openForEditing(post: PostModel): void {
    this.currentPost = post;
    this.open();
  }

  onHide() {
    this.currentPost = null;
  }
}
