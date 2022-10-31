import { Link } from 'react-router-dom';
import { HeaderNav } from '../HeaderNav';

export const HeaderLeft = () => (
  <>
    <div className='header__left'>
      <div className="header__logo">
        <Link to="/" className="logo__link" />
      </div>
      <div className='header__links'>
        <HeaderNav />
      </div>
    </div>
  </>
);