import { SortingStore } from '@app-shared/stores';

import { SORTING_FIELDS } from '../constants';
import { type TSortingField } from '../types';

export class PostsSortingStore extends SortingStore<TSortingField> {
  constructor() {
    super({
      currentSortingField: 'author',
      initialSortingStates: SORTING_FIELDS,
    });
  }
}
