import { type FC } from 'react';

import { observer } from 'mobx-react-lite';

import { User } from '@app-entites/User';
import { Modal } from '@app-shared/ui';

import { type IAuthorInfoModalStore } from '.';

interface IAuthorInfoModalProps {
  store: IAuthorInfoModalStore;
}

export const AuthorInfoModal: FC<IAuthorInfoModalProps> = observer(({ store }) => {
  const { currentUser } = store;

  if (!store.isOpened || !currentUser) {
    return null;
  }

  return (
    <Modal onOk={store.hide}>
      <User user={currentUser} />
    </Modal>
  );
});
