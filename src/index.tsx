import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { redirect } from "react-router-dom";
import { LoginPage } from './pages/login';
import { TestsPage } from './pages/tests';
import { UsersPage } from './pages/users';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const loader = () => {
  const user = localStorage.getItem('isAdminAuth');
  if (!user) return redirect("/login");
};
const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      loader,
      children: [
        {
          path: "/tests",
          element: <TestsPage />,
        },
        {
          path: "/users",
          element: <UsersPage />,
        },
      ]
    },
    {
      path: "/login",
      element: <LoginPage />,
    }
  ]);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
