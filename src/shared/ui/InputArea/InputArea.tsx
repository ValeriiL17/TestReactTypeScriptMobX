import { type FC } from 'react';

import { observer } from 'mobx-react-lite';

import Styles from './InputArea.module.css';

interface IInputAreaProps {
  title: string;
  getValue: () => string;
  onChange?: (value: string) => void;
}

export const InputArea: FC<IInputAreaProps> = observer(({ title, getValue, onChange }) => {
  return (
    <div className={Styles.wrapper}>
      <label className={Styles.title}>{title}</label>
      <textarea
        className={Styles.text_area}
        onChange={(e) => onChange?.(e.target.value)}
        value={getValue()}
      />
    </div>
  );
});
