import { Route, Routes } from 'react-router-dom';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<div>layaut</div>}>
          {/* <Route index element={<Home />} /> */}
          <Route path="/catalog" element={<div>catalog</div>} />
          <Route path="/favorites" element={<div>favorite</div>} />
          <Route path="*" element={<div>home</div>} />
        </Route>
      </Routes>
    </div>
  );
};
