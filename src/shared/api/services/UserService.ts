import { type IUserDto } from '../types';
import { fetchData } from '../utils';

const USERS_PATH_API = '/users';

export class UserService {
  static async getList(): Promise<IUserDto[]> {
    const response = await fetchData<IUserDto[]>({
      method: 'GET',
      path: USERS_PATH_API,
    });

    return response.data;
  }
}
