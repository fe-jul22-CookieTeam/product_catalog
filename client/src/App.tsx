import { Outlet } from 'react-router-dom';
import { Header } from './components/Header';
import './App.scss';
import './styles/blocks/container.scss';
import { Footer } from './components/Footer';
import { ItemCard } from './components/ItemCard';

const App = () => {
  return (
    <div className="App">
      <Header />

      <div className="main">
        <div className="container">
          <Outlet />
          <ItemCard />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default App;
