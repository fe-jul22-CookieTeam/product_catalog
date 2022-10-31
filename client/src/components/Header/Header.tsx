import './Header.scss';
import { HeaderLeft } from './HeaderLeft/HeaderLeft';
import { HeaderRight } from './HeaderRight/HeaderRight';

export const Header = () => (
  <header className="header">
    <HeaderLeft />
    <HeaderRight />
  </header>
);
