import app from './App.module.scss';
import { Outlet } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { CartItem } from './components/CartItem';

const App = () => {
  return (
    <div className={app.app}>
      <Header />

      <div className={app.main}>
        <div className={app.container}>
          <Outlet />
        </div>
      </div>

      <CartItem />

      <Footer />
    </div>
  );
};

export default App;
