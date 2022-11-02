import { Outlet } from 'react-router-dom';
import { Header } from './components/Header';
import './App.scss';
<<<<<<< HEAD
//import { CatalogPage } from './pages/CatalogPage';
=======
import { ItemCard } from './components/ItemCard';
import { BurgerMenu } from './components/BurgerMenuPage/BurgerMenu';
import { CatalogPage } from './pages/CatalogPage';
>>>>>>> 79f46c86bef952c908a6042f762a861464f81bdd
import { HomePage } from './pages/HomePage';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Outlet />
      <h1>Hello, world!</h1>
      <p>Page info</p>
      <ItemCard />
      <BurgerMenu />
      <HomePage />
    </div>
  );
};

export default App;
