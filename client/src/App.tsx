import './App.scss';
import { CatalogPage } from './components/CatalogPage';
import { HomePage } from './components/HomePage';

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
