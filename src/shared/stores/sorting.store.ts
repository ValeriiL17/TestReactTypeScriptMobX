import { makeObservable } from 'mobx';

import { type TSortingMode } from '@app-shared/types';
import { getToogledSortingMode } from '@app-shared/utils';

export class SortingStore<TSortingFields extends string> {
  private readonly _initialSortingStates: Record<TSortingFields, TSortingMode>;

  currentSortingField: TSortingFields;
  sortingFields: Record<TSortingFields, TSortingMode>;

  constructor(params: {
    currentSortingField: TSortingFields;
    initialSortingStates: Record<TSortingFields, TSortingMode>;
  }) {
    this.currentSortingField = params.currentSortingField;
    this.sortingFields = { ...params.initialSortingStates };
    this._initialSortingStates = params.initialSortingStates;

    makeObservable<this, '_initialSortingStates'>(this, {
      _initialSortingStates: true,
      currentSortingField: true,
      sortingFields: true,
      toogleSorting: true,
    });
  }

  toogleSorting(key: TSortingFields) {
    this.currentSortingField = key;
    this.sortingFields = {
      ...this._initialSortingStates,
      [key]: getToogledSortingMode(this.sortingFields[key]),
    };
  }
}
