import { Outlet } from 'react-router-dom';
import { Header } from './components/Header';
import './App.scss';
import { Footer } from './components/Footer';

const App = () => {
  return (
    <div className='App'>
      <Header />

      <div className="main">
        <Outlet />
      </div>

      <Footer />
    </div>
  );
};

export default App;
