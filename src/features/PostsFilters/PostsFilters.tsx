import { type FC } from 'react';

import { observer } from 'mobx-react-lite';

import { type UserModel } from '@app-shared/models';
import { Button, Input, Select } from '@app-shared/ui';

import Styles from './PostsFilters.module.css';

import { type PostsFiltersStore } from '.';

interface IPostsFiltersProps {
  store: PostsFiltersStore;
  getUserRecords: () => Record<string, UserModel>;
}

export const PostsFilters: FC<IPostsFiltersProps> = observer(({ store, getUserRecords }) => {
  return (
    <div className={Styles.wrapper}>
      <div className={Styles.wrapper__inputs}>
        <Input title='Title' getValue={() => store.title ?? ''} onChange={store.setTitle} />
        <Input title='Body' getValue={() => store.body ?? ''} onChange={store.setBody} />
        <Select<UserModel>
          title='Author'
          getValue={() => store.author}
          getOptions={getUserRecords}
          onChange={store.setAuthor}
        />
      </div>
      <Button onClick={store.reset}>Reset filters</Button>
    </div>
  );
});
