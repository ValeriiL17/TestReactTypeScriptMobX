import { type IPostDto } from '../types';
import { fetchData } from '../utils';

const POST_PATH_API = '/posts';

export class PostService {
  static async getList(): Promise<IPostDto[]> {
    const response = await fetchData<IPostDto[]>({
      method: 'GET',
      path: POST_PATH_API,
    });

    return response.data;
  }
}
