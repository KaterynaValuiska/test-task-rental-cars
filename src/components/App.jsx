import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<div>catalog</div>} />
          <Route path="/catalog" element={<div>catalog</div>} />
          <Route path="/favorites" element={<div>favorite</div>} />
          <Route path="*" element={<div>home</div>} />
        </Route>
      </Routes>
    </div>
  );
};
