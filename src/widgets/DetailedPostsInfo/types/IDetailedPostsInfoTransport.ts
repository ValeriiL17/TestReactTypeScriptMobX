import { type IUserDto, type IPostDto } from '@app-shared/api';

export interface IDetailedPostsInfoTransport {
  getPosts(): Promise<IPostDto[]>;
  getUsers(): Promise<IUserDto[]>;
}
