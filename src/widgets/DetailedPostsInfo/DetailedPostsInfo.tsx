import { type FC, useEffect } from 'react';

import { observer } from 'mobx-react-lite';

import { AuthorInfoModal } from '@app-features/AuthorInfoModal';
import { PostEditModal } from '@app-features/PostEditModal';
import { PostList } from '@app-features/PostList';
import { PostsFilters } from '@app-features/PostsFilters';
import { PostSorting } from '@app-features/PostSorting';
import { Spiner } from '@app-shared/ui';

import Styles from './DetailedPostsInfo.module.css';
import { useComponentStores } from './hooks';

export const DetailedPostsInfo: FC = observer(() => {
  const { detailedPostsInfoStore, authorInfoModalStore, postEditModalStore } = useComponentStores();

  useEffect(() => {
    detailedPostsInfoStore.init();
  }, []);

  if (!detailedPostsInfoStore.isInited) {
    return <Spiner />;
  }

  return (
    <div className={Styles.wrapper}>
      <div className={Styles.header}>
        <PostsFilters
          store={detailedPostsInfoStore.postsFiltersStore}
          getUserRecords={() => detailedPostsInfoStore.usersRecords}
        />
        <PostSorting store={detailedPostsInfoStore.postsSortingStore} />
      </div>

      <PostList
        getPosts={() => detailedPostsInfoStore.processedPosts}
        getUserInfo={(userId) => detailedPostsInfoStore.usersRecords[userId]}
        onEditPost={(post) => postEditModalStore.openForEditing(post)}
        onSelectAuthor={(user) => authorInfoModalStore.showUserInfo(user)}
      />

      <AuthorInfoModal store={authorInfoModalStore} />
      <PostEditModal store={postEditModalStore} />
    </div>
  );
});
