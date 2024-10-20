import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import UserList from './components/UserList';
import './index.scss';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import CounterDown from './components/CountDown';
import Menu from './components/Menu';
import SWAPI from './components/SWAPI';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Menu />,
    children: [
      {
        path: '/',
        element: <UserList />,
      },
      {
        path: '/counter',
        element: <CounterDown />,
      },
      {
        path: '/swapi',
        element: <SWAPI />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
