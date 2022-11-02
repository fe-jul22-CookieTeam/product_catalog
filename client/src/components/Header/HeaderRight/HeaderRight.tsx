import classNames from 'classnames';
import { NavLink } from 'react-router-dom';
import { ROUTES } from '../../../routes';
import header from '../Header.module.scss';

export const HeaderRight = () => (
  <div className={header.right}>
    <NavLink
      to={ROUTES.favourites}
      end={false}
      className={({ isActive }) =>
        classNames(header.favourites, header.right__link, {
          [header.favourites__active]: isActive,
        })
      }
    />

    <NavLink
      to={ROUTES.cart}
      end={true}
      className={({ isActive }) =>
        classNames(header.cart, header.right__link, {
          [header.cart__active]: isActive,
        })
      }
    />

    <NavLink
      to={ROUTES.menu}
      className={classNames(header.menu, header.right__link)}
    />
  </div>
);
