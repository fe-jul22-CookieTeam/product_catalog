import { Link } from 'react-router-dom';
import { ROUTES } from '../../../routes';
import footer from '../Footer.module.scss';

export const FooterLogo = () => (
  <div className={footer.logo}>
    <Link to={ROUTES.home} className={footer.logo__link} />
  </div>
);
