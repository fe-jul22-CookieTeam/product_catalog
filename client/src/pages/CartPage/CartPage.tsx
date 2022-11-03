import { Link } from 'react-router-dom';
import { ROUTES } from '../../routes/routes';
import cart from './CartPage.module.scss';
import '../../styles/blocks/grid.scss';
import classNames from 'classnames';

export const CartPage = () => (
  <div>
    <div className={cart.nav}>
      <div className={cart.nav__content}>
        <div className={cart.nav__arrow}></div>
        <Link to={ROUTES.home} className={cart.nav__link}>
          Back
        </Link>
      </div>
    </div>

    <div className={cart.title}>Cart</div>

    <div className={classNames(cart.content, 'grid')}>
      <div
        className={classNames(
          cart.products,
          'grid__item--desktop-1-16',
          'grid__item--tablet-1-12',
        )}
      >
        <div className={cart.product}>product</div>
        <div className={cart.product}>product</div>
        <div className={cart.product}>product</div>
      </div>

      <div
        className={classNames(
          cart.order,
          'grid__item--desktop-17-24',
          'grid__item--tablet-1-12',
        )}
      >
        order
      </div>
    </div>
  </div>
);
