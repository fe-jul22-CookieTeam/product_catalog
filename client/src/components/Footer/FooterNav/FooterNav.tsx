import { Link } from 'react-router-dom';
import { ROUTES } from '../../../routes';
import footer from '../Footer.module.scss';

export const FooterNav = () => (
  <div className={footer.nav}>
    <Link to={ROUTES.home} className={footer.nav__link}>
      github
    </Link>
    <Link to={ROUTES.home} className={footer.nav__link}>
      contacts
    </Link>
    <Link to={ROUTES.home} className={footer.nav__link}>
      rights
    </Link>
  </div>
);
