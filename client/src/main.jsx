import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx'
import './index.css'
import Home from './assets/Home/Home.jsx'
import Commanders from './assets/Commanders/Commanders.jsx'
import Game from './assets/Game/Game.jsx'
import News from './assets/Home/ArticleMain.jsx'
import PatchNotes from ''
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
      path: 'game',
      element: <Game />,
    },
    {
      path: 'news',
      element: <News />,
    },
    {
      path: 'patchnotes',
      element: <PatchNotes />,
    },
    {
      path: 'Commanders/:name',
      element: <CommanderRender />
    },
    {
      path: 'News/:slug',
      element: <News />
    },
    {
      path: 'Patchnotes/:slug',
      element: <PatchNotes />
    },

  ],
}]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
  );
