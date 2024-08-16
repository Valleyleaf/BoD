import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx'
import './index.css'
import Home from './assets/Home.jsx'
import Commanders from './assets/Commanders/Commanders.jsx'

const router = createBrowserRouter([{
  path: '/',
  element: <App />,
  children: [
    {
      index: true,
      element: <Home/>,
    },
    {
      path: 'commanders',
      element: <Commanders />,
    },
  ],
}])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
  );
