import './ItemCard.scss';

export const ItemCard = () => {
  const  item = {
    image: '',
    title: 'Apple iPhone 14 Pro 128GB Silver (MQ023)',
    price: '999',
    screenV: '6.1” OLED',
    capacity: '128 GB',
    ram: '6 GB',
  };

  return (
    <div className='item'>
      <img 
        src={item.image} 
        alt={item.title} 
        className={'item__image'}
      />
      <p className='item__title'>
        {item.title}
      </p>

      <div className='item__price'>
        {`$${item.price}`}
      </div>

      <div className="description">
        <div className="description__wrapper">
          <div className="description__title">Screen</div>
          <div className="description__value">{item.screenV}</div>
        </div>
        
        <div className="description__wrapper">
          <div className="description__title">Capacity</div>
          <div className="description__value">{item.capacity}</div>
        </div>
        
        <div className="description__wrapper">
          <div className="description__title">RAM</div>
          <div className="description__value">{item.ram}</div>
        </div>
      </div>

      <div className="buttons">
        <div className="buttons__addToCart">Add to cart</div>
        <div className="buttons__addToFavourites"> 
        ♥
        </div>
      </div>

    </div>
  );
};
