import { action, makeObservable } from 'mobx';

export interface IModalStore {
  isOpened: boolean;

  open(): void;
  hide(): void;
}

export abstract class ModalStore implements IModalStore {
  isOpened = false;

  constructor() {
    makeObservable(this, { onHide: true, isOpened: true, open: action.bound, hide: action.bound });
  }

  open() {
    this.isOpened = true;
  }

  hide() {
    this.isOpened = false;
    this.onHide();
  }

  abstract onHide(): void;
}
