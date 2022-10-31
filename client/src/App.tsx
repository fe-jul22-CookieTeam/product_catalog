import { Outlet } from 'react-router-dom';
import { NavBar } from './components/NavBar';
import './App.scss';

const App = () => {
  return (
    <>
      <NavBar />

      <div className="main">
        <Outlet />
      </div>
    </>
  );
};

export default App;
