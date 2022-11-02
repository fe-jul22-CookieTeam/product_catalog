import { Link } from 'react-router-dom';
import { ROUTES } from '../../../routes';

export const FooterNav = () => (
  <div className="footer__nav">
    <Link to={ROUTES.home} className="footer__nav-link">
      github
    </Link>
    <Link to={ROUTES.home} className="footer__nav-link">
      contacts
    </Link>
    <Link to={ROUTES.home} className="footer__nav-link">
      rights
    </Link>
  </div>
);
