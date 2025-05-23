import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx'
import './index.css'
import Home from './assets/Home.jsx'
import Commanders from './assets/Commanders/Commanders.jsx'
import Game from './assets/Game/Game.jsx'
import { Characters } from './assets/Info/Characters.js';
import CommanderRender from './assets/Commanders/CommanderRender';

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
      element: <Commanders />,},
    {
      path: 'Game',
      element: <Game />,
    },
    {
      path: 'Commanders/:name', // like /Commanders/Abyssal%20King
      element: <CommanderRender />
    },

  ],
}]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
  );
