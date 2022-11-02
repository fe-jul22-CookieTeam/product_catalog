import { Outlet } from 'react-router-dom';
import { Header } from './components/Header';
import { ItemCard } from './components/ItemCard';
import { BurgerMenu } from './components/BurgerMenuPage/BurgerMenu';
import './App.scss';
//import { CatalogPage } from './pages/CatalogPage';
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
