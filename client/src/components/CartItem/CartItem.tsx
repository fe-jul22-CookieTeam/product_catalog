import { useState } from 'react';
import './CartItem.scss';

export const CartItem = () => {
  const [count, setCount] = useState(1);

  const item = {
    image: '',
    title: 'Apple iPhone 14 Pro 128GB Silver (MQ023)',
    price: '999',
  };

  return (
    <div className='item'>
      <div className='item__container'>
        <div className='closeButton'>x</div>
        <img src="https://www.sundance.com.br/static/site/img/placeholders/66x66/11.jpg" alt={item.title} className={'item__image'} />
        <p className="item__title">{item.title}</p>
      </div>

      <div className='item__container'>
        <div className="item__amount">
          <button className='item__button item__button--add'
            onClick={() => setCount(count - 1)}>
            -
          </button>
          <div className='item__count'>{count}</div>
          <button className='item__button item__button--subtract'
            onClick={() => setCount(count + 1)}>
            +
          </button>
        </div>
 
        <div className="item__price">{`$${item.price}`}</div>
      </div>
    </div>
  );
};