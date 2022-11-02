import { Link } from 'react-router-dom';
import { ROUTES } from '../../../routes';

export const FooterBack = () => (
  <div className="footer__back">
    <div className="footer__back-title">Back to top</div>
    <div className="footer__back-button">
      <Link to={ROUTES.home} className="footer__back-link" />
    </div>
  </div>
);
