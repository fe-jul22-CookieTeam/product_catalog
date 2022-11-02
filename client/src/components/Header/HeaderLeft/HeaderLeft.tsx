import { Link } from 'react-router-dom';
import { ROUTES } from '../../../routes';
import { HeaderNav } from '../HeaderNav';

export const HeaderLeft = () => (
  <div className="header__left">
    <div className="header__logo">
      <Link to={ROUTES.home} className="header__logo-link" />
    </div>
    <div className="header__links">
      <HeaderNav />
    </div>
  </div>
);
