import { makeAutoObservable } from 'mobx';

import { type IPostDto } from '../api';

export class PostModel {
  id: number;
  userId: number;
  title: string;
  body: string;

  constructor(dto: IPostDto) {
    this.id = dto.id;
    this.userId = dto.userId;
    this.title = dto.title;
    this.body = dto.body;

    makeAutoObservable(this);
  }

  setTitle(value: string) {
    this.title = value;
  }

  setBody(value: string) {
    this.body = value;
  }
}
