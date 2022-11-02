import style from './Header.module.scss';
import { HeaderLeft } from './HeaderLeft';
//import { HeaderRight } from './HeaderRight';

export const Header = () => (
  <header className={style.header}>
    <HeaderLeft />
  </header>
);
