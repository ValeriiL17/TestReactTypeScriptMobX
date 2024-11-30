import { useState } from 'react';

import { type IAuthorInfoModalStore, AuthorInfoModalStore } from '@app-features/AuthorInfoModal';
import { type IPostEditModalStore, PostEditModalStore } from '@app-features/PostEditModal';
import { PostService, UserService } from '@app-shared/api';

import { DetailedPostsInfoStore, type IDetailedPostsInfoStore } from '../stores';

interface IStores {
  detailedPostsInfoStore: IDetailedPostsInfoStore;
  authorInfoModalStore: IAuthorInfoModalStore;
  postEditModalStore: IPostEditModalStore;
}

export const useComponentStores = (): IStores => {
  const [detailedPostsInfoStore] = useState(() => {
    return new DetailedPostsInfoStore({
      getPosts: PostService.getList,
      getUsers: UserService.getList,
    });
  });

  const [authorInfoModalStore] = useState(() => new AuthorInfoModalStore());
  const [postEditModalStore] = useState(() => new PostEditModalStore());

  return { detailedPostsInfoStore, authorInfoModalStore, postEditModalStore };
};
