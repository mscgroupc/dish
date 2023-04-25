import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Explore } from './modules/Explore/Explore'
import { Home } from './modules/Home/Home'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/explore',
    element: <Explore />,
  },
])

export const Routers = () => (
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
