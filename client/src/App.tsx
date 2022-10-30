import './App.scss';
import { CatalogPage } from './components/CatalogPage';
import { HomePage } from './components/HomePage';

const App = () => {
  return (
    <div className="App">
      <HomePage />
      <CatalogPage />
    </div>
  );
};

export default App;
