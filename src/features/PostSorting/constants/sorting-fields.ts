import { type TSortingMode } from '@app-shared/types';

import { type TSortingField } from '../types';

export const SORTING_FIELDS: Record<TSortingField, TSortingMode> = {
  author: 'none',
  title: 'none',
  body: 'none',
};
