import { Link } from 'react-router-dom';

export const FooterBack = () => (
  <div className="footer__back">
    <div className="footer__back-title">Back to top</div>
    <div className="footer__back-button">
      <Link to='/' className="footer__back-link" />
    </div>
  </div>
);