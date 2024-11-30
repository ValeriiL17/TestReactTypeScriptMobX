import { type FC } from 'react';

import { observer } from 'mobx-react-lite';

import { DetailedPostsInfo } from '@app-widgets/DetailedPostsInfo';

import Styles from './MainPage.module.css';

export const MainPage: FC = observer(() => {
  return (
    <main className={Styles.wrapper}>
      <DetailedPostsInfo />
    </main>
  );
});
