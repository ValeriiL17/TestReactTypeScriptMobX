import { type FC } from 'react';

import { computed } from 'mobx';
import { observer } from 'mobx-react-lite';

import { SORT_SYMBOL } from '@app-shared/constants';
import { Tag } from '@app-shared/ui';

import Styles from './PostSorting.module.css';
import { type PostsSortingStore } from './store';
import { type TSortingField } from './types';

const TAG_LIST: Array<{ key: TSortingField; title: string }> = [
  {
    key: 'author',
    title: 'Author',
  },
  {
    key: 'title',
    title: 'Title',
  },
  {
    key: 'body',
    title: 'Body',
  },
];

interface IPostsFilterProps {
  store: PostsSortingStore;
}

export const PostSorting: FC<IPostsFilterProps> = observer(({ store }) => {
  const getFieldState = (fieldKey: TSortingField) => {
    return computed(() => SORT_SYMBOL[store.sortingFields[fieldKey]]).get();
  };

  return (
    <div className={Styles.wrapper}>
      <label>Sorting:</label>
      {TAG_LIST.map(({ key, title }) => (
        <Tag
          key={key}
          title={title}
          content={() => getFieldState(key)}
          onClick={() => store.toogleSorting(key)}
        />
      ))}
    </div>
  );
});
