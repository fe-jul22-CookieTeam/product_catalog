import './App.scss';
import { ItemCard } from './components/ItemCard';
import { BurgerMenu } from './components/BurgerMenuPage/BurgerMenu';
import { CatalogPage } from './pages/CatalogPage';
import { HomePage } from './pages/HomePage';

const App = () => {
  return (
    <div className="App">
      <h1>Hello, world!</h1>
      <p>Page info</p>
      <ItemCard />
      <BurgerMenu />
      <HomePage />
      <CatalogPage />
    </div>
  );
};

export default App;
