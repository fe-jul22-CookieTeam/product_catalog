// import { ItemCard } from '../../components/ItemCard';
import './PhonesPage.module.scss';
import '../../styles/blocs/grid.scss';
// import { Link } from 'react-router-dom';

const Card = () => (
  <div className="card">
    Card
  </div>
);


const MenuRout = () => (
  // <div className="menuRout">
  //   <Link to="/" className="logo__home" />
  //   <img src="../images/chevron-R.svg" alt="" />
  // </div>

  <div className="menuRout">
    <a href="#" className="menuRout__home">
      <img src="./images/Home" alt="Home" />
    </a>
    <img src="../../images/chevron-R.svg" alt="Arrow" className="menuRout__arrow" />
    <p className="menuRout__title">
      Phones
    </p>
  </div>
);

export const PhonesPage = () => (
  <>
    
    <MenuRout />
    <div className="container">
      <div className="pagePhone">
        <h1 className="pagePhone__title">
          Mobile phones
        </h1>
        
        <p className="pagePhone__count"> 
          95 models
        </p>
        

        <div className="grid__container">
          <div className="container__row">
            <div className="container__col-sm container__col-md"><Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
            </div>
          </div>
        </div>
          

      </div>

    </div>
    
    {/* <ItemCard /> */}
  </>
);
