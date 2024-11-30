import { type FC, type PropsWithChildren } from 'react';

import { observer } from 'mobx-react-lite';

import Styles from './Button.module.css';

interface IButtonProps extends PropsWithChildren {
  onClick?: () => void;
}

export const Button: FC<IButtonProps> = observer(({ onClick, children }) => {
  return (
    <div className={Styles.wrapper} onClick={onClick}>
      {children}
    </div>
  );
});
