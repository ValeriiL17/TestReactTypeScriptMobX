import { makeObservable, override } from 'mobx';

import { type UserModel } from '@app-shared/models';
import { ModalStore, type IModalStore } from '@app-shared/ui';

export interface IAuthorInfoModalStore extends IModalStore {
  readonly currentUser: UserModel | null;

  showUserInfo(user: UserModel): void;
}

export class AuthorInfoModalStore extends ModalStore implements IAuthorInfoModalStore {
  currentUser: UserModel | null = null;

  constructor() {
    super();
    makeObservable(this, { showUserInfo: true, currentUser: true, onHide: override });
  }

  showUserInfo(user: UserModel): void {
    this.currentUser = user;
    this.open();
  }

  onHide() {
    this.currentUser = null;
  }
}
