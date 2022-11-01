import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';

type Props = {
  to: string;
  text: string;
  end: boolean;
};

export const PageNavLink: FC<Props> = ({ to, text, end }) => (
  <NavLink
    to={to}
    end={end}
    className={({ isActive }) =>
      classNames('header__link', { 'header__link-active': isActive })
    }
  >
    {text}
  </NavLink>
);
