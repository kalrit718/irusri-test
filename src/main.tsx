import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.tsx'
import Home from '@shell/Home.tsx';
import Login from '@shell/Login.tsx';
import Register from '@shell/Register.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/Home",
        element: <Home />
      },
      {
        path: "/About",
        element: <>About</>
      }
    ]
  },
  {
    path: "/Login",
    element: <Login />,
  },
  {
    path: "/Register",
    element: <Register />,
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
