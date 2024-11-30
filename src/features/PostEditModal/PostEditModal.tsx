import { type FC } from 'react';

import { observer } from 'mobx-react-lite';

import { Modal, InputArea } from '@app-shared/ui';

import { type IPostEditModalStore } from '.';

interface IPostEditModalProps {
  store: IPostEditModalStore;
}

export const PostEditModal: FC<IPostEditModalProps> = observer(({ store }) => {
  const { currentPost } = store;

  if (!store.isOpened || !currentPost) {
    return null;
  }

  return (
    <Modal onOk={store.hide}>
      <InputArea
        title='Title'
        getValue={() => currentPost.title}
        onChange={(value) => currentPost.setTitle(value)}
      />
      <InputArea
        title='Body'
        getValue={() => currentPost.body}
        onChange={(value) => currentPost.setBody(value)}
      />
    </Modal>
  );
});
