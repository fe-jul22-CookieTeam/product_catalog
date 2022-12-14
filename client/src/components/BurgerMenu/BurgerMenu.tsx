import { Link } from 'react-router-dom';
import { ROUTES } from '../../routes';
import './BurgerMenu.scss';

export const BurgerMenu = () => {
  return (
    <div className="burger__menu">
      <div className="burger__menu--top">
        <Link to={ROUTES.home} className="burger__menu--top-logo" />
        <Link to={ROUTES.home} className="burger__menu--top-close" />
      </div>
      <div className="burger__menu--main">
        <div>
          <Link to={ROUTES.home} className="burger__menu--link">
            home
          </Link>
        </div>
        <div>
          <Link to={ROUTES.phones} className="burger__menu--link">
            phones
          </Link>
        </div>
        <div>
          <Link to={ROUTES.tablets} className="burger__menu--link">
            tablets
          </Link>
        </div>
        <div>
          <Link to={ROUTES.accessories} className="burger__menu--link">
            accessories
          </Link>
        </div>
      </div>
      <div className="burger__menu--bottom">
        <button className="burger__menu--bottom-favourites"></button>
        <button className="burger__menu--bottom-basket"></button>
      </div>
    </div>
  );
};
