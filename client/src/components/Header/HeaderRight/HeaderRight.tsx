import { useState } from 'react';
import classNames from 'classnames';
import { NavLink } from 'react-router-dom';
import { ROUTES } from '../../../routes';
import header from '../Header.module.scss';
import { HeaderMenu } from '../HeaderMenu';

export const HeaderRight = () => {
  const [open, setOpen] = useState(false);

  return (
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

      <div
        className={classNames(header.menu, header.right__link)}
        onClick={() => setOpen(true)}
      >
      </div>
      <div>
        {
          open ? <HeaderMenu open={open} setOpen={setOpen}/> : null
        }
        
      </div>
       
    </div>
  );
};


//  