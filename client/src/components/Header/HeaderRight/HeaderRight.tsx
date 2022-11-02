import classNames from 'classnames';
import { NavLink } from 'react-router-dom';
import { ROUTES } from '../../../routes';

export const HeaderRight = () => (
  <div className="header__right">
    <NavLink
      to={ROUTES.favourites}
      end={false}
      className={({ isActive }) =>
        classNames('header__right-favourites header__right-link', {
          'header__right-favourites--active': isActive,
        })
      }
    />

    <NavLink
      to={ROUTES.cart}
      end={true}
      className={({ isActive }) =>
        classNames('header__right-cart header__right-link', {
          'header__right-cart--active': isActive,
        })
      }
    />

    <NavLink to={ROUTES.menu} className="header__right-menu header__right-link" />
  </div>
);
