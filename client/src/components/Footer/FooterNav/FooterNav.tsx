import { Link } from 'react-router-dom';

export const FooterNav = () => (
  <div className="footer__nav">
    <Link to='/' className='footer__nav-link'>github</Link>
    <Link to='/' className='footer__nav-link'>contacts</Link>
    <Link to='/' className='footer__nav-link'>rights</Link>
  </div>
);