import './Header.scss';
import { HeaderLeft } from './HeaderLeft';
import { HeaderRight } from './HeaderRight';

export const Header = () => (
  <header className="header">
    <HeaderLeft />
    <HeaderRight />
  </header>
);
