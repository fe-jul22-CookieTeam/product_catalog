import { Outlet } from 'react-router-dom';
import { Header } from './components/Header';
import './styles/App.scss';

const App = () => {
  return (
    <>
      <Header />

      <div className="main">
        <Outlet />
      </div>
    </>
  );
};

export default App;
