import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Explore } from './modules/Explore/Explore';
import { Home } from './modules/Home/Home';

const router = createBrowserRouter([
  {
    path: '/dish',
    element: <Home />,
  },
  {
    path: '/dish/explore',
    element: <Explore />,
  },
  {
    path: '*',
    element: <Home />,
  },
]);

export const Routers = () => (
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
