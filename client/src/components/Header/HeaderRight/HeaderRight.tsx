import classNames from 'classnames';
import { NavLink } from 'react-router-dom';

export const HeaderRight = () => (
  <div className="header__right">
    <NavLink
      to="favourites"
      end={false}
      className={({ isActive }) =>
        classNames('header__right-favourites header__right-link', 
          { 'header__right-favourites-active': isActive },
        )
      }
    />

    <NavLink 
      to="cart" 
      end={true}
      className={({ isActive }) =>
        classNames('header__right-cart header__right-link', 
          { 'header__right-cart-active': isActive },
        )
      }
    />

    <NavLink 
      to="/" 
      className="header__right-menu header__right-link" 
    />
  </div>
);
