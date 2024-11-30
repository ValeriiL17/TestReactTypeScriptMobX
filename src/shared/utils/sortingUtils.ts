import { type TSortingMode } from '../types';

export const getToogledSortingMode = (currentMode: TSortingMode): TSortingMode => {
  if (currentMode === 'asc') {
    return 'desc';
  }

  if (currentMode === 'desc') {
    return 'none';
  }

  return 'asc';
};

export const compareStrBySortMode = (
  left: string,
  right: string,
  sortMode: TSortingMode,
): number => {
  if (sortMode === 'asc') {
    return left.localeCompare(right);
  }

  if (sortMode === 'desc') {
    return right.localeCompare(left);
  }

  return 0;
};

export const compareNumBySortMode = (
  left: number,
  right: number,
  sortMode: TSortingMode,
): number => {
  if (sortMode === 'asc') {
    return left - right;
  }

  if (sortMode === 'desc') {
    return right - left;
  }

  return 0;
};
