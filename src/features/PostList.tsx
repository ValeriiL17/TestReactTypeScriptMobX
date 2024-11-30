import { type FC } from 'react';

import { observer } from 'mobx-react-lite';

import { Post } from '@app-entites/Post';
import { type PostModel, type UserModel } from '@app-shared/models';
import { Tag, Button } from '@app-shared/ui';

interface IPostListProps {
  getPosts: () => PostModel[];
  getUserInfo: (userId: number) => UserModel;
  onEditPost?: (post: PostModel) => void;
  onSelectAuthor?: (user: UserModel) => void;
}

export const PostList: FC<IPostListProps> = observer(
  ({ getPosts, getUserInfo, onEditPost, onSelectAuthor }) => {
    return (
      <>
        {getPosts().map((value) => {
          const user = getUserInfo(value.userId);

          return (
            <Post
              key={value.id}
              post={value}
              header={
                <Tag
                  title='Author:'
                  content={() => user.username}
                  onClick={() => onSelectAuthor?.(user)}
                />
              }
              actions={<Button onClick={() => onEditPost?.(value)}>Edit</Button>}
            />
          );
        })}
      </>
    );
  },
);
