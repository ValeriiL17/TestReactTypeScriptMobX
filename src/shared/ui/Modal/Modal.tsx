import type { FC, PropsWithChildren } from 'react';

import { observer } from 'mobx-react-lite';

import { Button } from '../Button';

import Styles from './Modal.module.css';

interface IModalProps extends PropsWithChildren {
  onOk?: () => void;
}

export const Modal: FC<IModalProps> = observer(({ onOk, children }) => {
  return (
    <div className={Styles.wrapper}>
      <div className={Styles.modal}>
        {children}
        <Button onClick={onOk}>Ок</Button>
      </div>
    </div>
  );
});
