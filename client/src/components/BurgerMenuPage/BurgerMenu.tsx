import './BurgerMenu.scss';

export const BurgerMenu = () => {
  return (
    <div className="burger__menu">
      <div className="burger__menu--top">
        <img src="https://via.placeholder.com/64x20" alt="logo" className="burger__menu--top-logo"/>
        <a href="/" className="burger__menu--top-close">X</a>
      </div>
      <div className="burger__menu--main">
        <div>
          <a href="/" className="burger__menu--link">home</a>
        </div>
        <div>
          <a href="/" className="burger__menu--link">phones</a>
        </div>
        <div>
          <a href="/" className="burger__menu--link">tablets</a>
        </div>
        <div>
          <a href="/" className="burger__menu--link">accessories</a>
        </div>
      </div>
      <div className="burger__menu--bottom">
        <button className="burger__menu--bottom-favourites">♥</button>
        <button className="burger__menu--bottom-basket">basket</button>
      </div>
    </div>
  );
};