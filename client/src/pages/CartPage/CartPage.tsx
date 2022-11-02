import { Link } from 'react-router-dom';
import './CartPage.scss';

export const CartPage = () => (
  <div className="cart">

    <div className="cart__nav">
      <div className="cart__nav-arrow"></div>
      <Link to="/" className="cart__nav-link">
          Back
      </Link>
    </div>

    <div className="cart__title">Cart</div>

    <div className="cart__content grid">
      <div className="cart__products grid__item--desktop-1-16">
        <div className="cart__product">product</div>
        <div className="cart__product">product</div>
        <div className="cart__product">product</div>
      </div>

      <div className="cart__order grid__item--desktop-17-24">order</div>
    </div>
  </div>

);
