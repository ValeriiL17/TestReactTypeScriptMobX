import { observer } from 'mobx-react-lite';

import { type ISelectableElement } from './types/ISelectableElement';
import Styles from './Select.module.css';

const DEFAULT_VALUE = 'DEFAULT_VALUE';

interface ISelectProps<T extends ISelectableElement> {
  title: string;
  getOptions: () => Record<string, T>;
  getValue: () => ISelectableElement | null;
  onChange?: (value: T | null) => void;
}

export const Select = observer(
  <T extends ISelectableElement>({ title, getValue, getOptions, onChange }: ISelectProps<T>) => {
    const options = getOptions();
    const selectedValue = getValue()?.getId() ?? DEFAULT_VALUE;

    return (
      <div className={Styles.wrapper}>
        <label className={Styles.title}>{title}</label>
        <select
          className={Styles.select}
          value={selectedValue}
          onChange={({ target: { value } }) =>
            onChange?.(value === DEFAULT_VALUE ? null : options[value])
          }
        >
          <option value={DEFAULT_VALUE}>Select option</option>
          {Object.values(options).map((value) => {
            const id = value.getId();
            const title = value.getTitle();

            return (
              <option key={id} value={id}>
                {title}
              </option>
            );
          })}
        </select>
      </div>
    );
  },
);
