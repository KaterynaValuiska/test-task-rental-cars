import { Route, Routes } from 'react-router-dom';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<div>layauiuut</div>}>
          <Route index element={<div>catalog</div>} />
          <Route path="/catalog" element={<div>catalog</div>} />
          <Route path="/favorites" element={<div>favorite</div>} />
          <Route path="*" element={<div>home</div>} />
        </Route>
      </Routes>
    </div>
  );
};
