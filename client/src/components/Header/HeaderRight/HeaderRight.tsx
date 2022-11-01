import { NavLink } from 'react-router-dom';

export const HeaderRight = () => (
  <div className="header__right">
    <NavLink
      to="favourites"
      className="header__right-favourites header__right-link"
    />

    <NavLink to="cart" className="header__right-cart header__right-link" />
  </div>
);
