import { Link } from 'react-router-dom';
import { ROUTES } from '../../../routes';

export const FooterLogo = () => (
  <div className="footer__logo">
    <Link to={ROUTES.home} className="footer__logo-link" />
  </div>
);
