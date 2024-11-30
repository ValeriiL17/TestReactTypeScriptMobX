import { type FC } from 'react';

import { observer } from 'mobx-react-lite';

import SpinerSVG from '@app-shared/assets/spiner.svg';

import Styles from './Spiner.module.css';

export const Spiner: FC = observer(() => {
  return <img className={Styles.wrapper} src={SpinerSVG} />;
});
