import './App.scss';
import { CatalogPage } from './pages/CatalogPage';
import { HomePage } from './pages/HomePage';

const App = () => {
  return (
    <div className="App">
      <h1>Hello, world!</h1>
      <p>Page info</p>
      <HomePage />
      <CatalogPage />
    </div>
  );
};

export default App;
