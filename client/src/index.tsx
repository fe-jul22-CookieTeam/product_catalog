import ReactDOM from 'react-dom/client';
import { HashRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import App from './App';
import { AccessoriesPage } from './pages/AccessoriesPage';
import { CartPage } from './pages/CartPage';
import { FavouritesPage } from './pages/FavouritesPage';
import { HomePage } from './pages/HomePage';
import { PageNotFound } from './pages/PageNotFound';
import { PhonesPage } from './pages/PhonesPage';
import { TabletsPage } from './pages/TabletsPage';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="phones">
          <Route index element={<PhonesPage />} />
          <Route path=":slug" element={<PhonesPage />} />
        </Route>
        <Route index element={<HomePage />} />
        <Route path="tablets" element={<TabletsPage />} />
        <Route path="accessories" element={<AccessoriesPage />} />
        <Route path="favourites" element={<FavouritesPage />} />
        <Route path="cart" element={<CartPage />} />
        <Route path="home" element={<Navigate to="/" replace />} />
        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  </Router>,
);
