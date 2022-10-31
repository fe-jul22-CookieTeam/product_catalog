import { FC } from 'react';
import { NavLink } from 'react-router-dom';

type Props = {
  to: string;
  text: string;
};

export const PageNavLink: FC<Props> = ({ to, text }) => (
  <NavLink
    to={to}
    className="header__link"
  >
    {text}
  </NavLink>
);