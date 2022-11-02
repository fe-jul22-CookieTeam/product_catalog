import { Outlet } from 'react-router-dom';
import { Header } from './components/Header';
import './App.scss';
import './styles/blocks/container.scss';
import { Footer } from './components/Footer';

const App = () => {
  return (
    <div className="App">
      <Header />

      <div className="main">
        <div className="container">
          <Outlet />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default App;
