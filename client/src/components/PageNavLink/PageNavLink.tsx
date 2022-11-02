import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';
import header from '../Header/Header.module.scss';

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
      classNames(header.link, { [header.link__active]: isActive })
    }
  >
    {text}
  </NavLink>
);
