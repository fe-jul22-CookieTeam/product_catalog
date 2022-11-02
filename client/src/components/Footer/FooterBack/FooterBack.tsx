import { Link } from 'react-router-dom';
import { ROUTES } from '../../../routes';
import footer from '../Footer.module.scss';

export const FooterBack = () => (
  <div className={footer.back}>
    <div className={footer.back__title}>Back to top</div>
    <div className={footer.back__button}>
      <Link to={ROUTES.home} className={footer.back__link} />
    </div>
  </div>
);
