import { Link } from 'react-router-dom';
import { ROUTES } from '../../../routes';
import { HeaderNav } from '../HeaderNav';
import header from '../Header.module.scss';

export const HeaderLeft = () => (
  <div className={header.left}>
    <div className={header.logo}>
      <Link to={ROUTES.home} className={header.logo__link} />
    </div>
    <div className={header.links}>
      <HeaderNav />
    </div>
  </div>
);
