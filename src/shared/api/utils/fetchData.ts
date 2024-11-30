import { type Method, type AxiosResponse } from 'axios';

import { bookStackAxiosInstance } from '../bookStackAxiosInstance';

export const fetchData = async <R = unknown, D = unknown>(req: {
  method: Method;
  path: string;
  data?: D;
  params?: D;
}): Promise<AxiosResponse<R>> => {
  return await bookStackAxiosInstance<D, AxiosResponse<R>>({
    method: req.method,
    url: req.path,
    data: req.data,
    params: req.params,
  });
};
