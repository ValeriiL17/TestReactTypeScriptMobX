import { type FC } from 'react';

import { observer } from 'mobx-react-lite';

import Styles from './Input.module.css';

interface IInputProps {
  title: string;
  getValue: () => string;
  onChange?: (value: string) => void;
}

export const Input: FC<IInputProps> = observer(({ title, getValue, onChange }) => {
  return (
    <div className={Styles.wrapper}>
      <label className={Styles.title}>{title}</label>
      <input
        className={Styles.input}
        onChange={(e) => onChange?.(e.target.value)}
        value={getValue()}
      />
    </div>
  );
});
