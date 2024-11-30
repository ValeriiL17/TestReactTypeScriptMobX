import { type FC, type ReactNode } from 'react';

import { observer } from 'mobx-react-lite';

import Styles from './Tag.module.css';

interface ITagProps {
  title: ReactNode;
  content: () => ReactNode;
  onClick?: () => void;
}

export const Tag: FC<ITagProps> = observer(({ title, content, onClick }) => {
  return (
    <div className={Styles.wrapper} onClick={onClick}>
      <span className={Styles.title}>{title}</span>
      <span className={Styles.content}>{content()}</span>
    </div>
  );
});
