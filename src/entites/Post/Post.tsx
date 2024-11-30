import { type FC, type ReactNode } from 'react';

import { Observer, observer } from 'mobx-react-lite';

import { type PostModel } from '@app-shared/models';
import { TextField } from '@app-shared/ui';

import Styles from './Post.module.css';

interface IPostProps {
  post: PostModel;
  header?: ReactNode;
  actions?: ReactNode;
}

export const Post: FC<IPostProps> = observer(({ post, header, actions }) => {
  return (
    <div className={Styles.wrapper}>
      {header && <Observer>{() => <div className={Styles.header}>{header}</div>}</Observer>}

      <TextField className={Styles.title} getValue={() => post.title} />
      <TextField className={Styles.content} getValue={() => post.body} />

      {actions && <Observer>{() => <div className={Styles.actions}>{actions}</div>}</Observer>}
    </div>
  );
});
