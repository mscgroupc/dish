import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Explore } from './modules/Explore/Explore';
import { Home } from './modules/Home/Home';

export const Routers = () => (
  <BrowserRouter>
    <Routes>
      <Route path='/dish' element={<Home />} />
      <Route path='/dish/explore' element={<Explore />} />
      <Route path='*' element={<>Not Found</>} />
    </Routes>
  </BrowserRouter>
);
