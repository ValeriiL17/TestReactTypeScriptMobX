import { type FC } from 'react';

import { observer } from 'mobx-react-lite';

interface ITextFieldProps {
  getValue: () => string;
  className?: string;
}

export const TextField: FC<ITextFieldProps> = observer(({ getValue, className }) => {
  return <span className={className}>{getValue()}</span>;
});
