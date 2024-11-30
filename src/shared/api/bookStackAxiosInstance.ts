import axios from 'axios';

import { ENV } from '../constants';

export const bookStackAxiosInstance = axios.create({
  baseURL: ENV.API_URL,
  withCredentials: false,
  timeout: 1000 * 60,
});
