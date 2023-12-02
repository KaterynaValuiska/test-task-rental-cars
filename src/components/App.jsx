import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import Home from './pages/Home';
import Catalog from './pages/Catalog';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/favorites" element={<div>favorite</div>} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </div>
  );
};
