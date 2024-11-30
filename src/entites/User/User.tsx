import { type FC } from 'react';

import { observer } from 'mobx-react-lite';

import { type UserModel } from '@app-shared/models';

import Styles from './User.module.css';

interface IUserProps {
  user: UserModel;
}

export const User: FC<IUserProps> = observer(({ user }) => {
  return (
    <div className={Styles.wrapper}>
      <b className={Styles.title}>{user.username}</b>
      <div className={Styles.information}>
        <span>Email: {user.email}</span>
        <span>Phone: {user.phone}</span>
        <span>Website: {user.website}</span>
        <span>Company name: {user.companyName}</span>
      </div>
    </div>
  );
});
