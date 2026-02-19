import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx'
import './index.css'
import Home from './assets/Home/Home.jsx'
import Commanders from './assets/Commanders/Commanders.jsx'
import GameRender from './assets/Game/GameRender.jsx'
import News from './assets/RenderArticle/ArticleMain.jsx'
import PatchNotes from './assets/PatchNotes/PatchNotePage.jsx'
import CommanderRender from './assets/Commanders/CommanderRender.jsx'
import Items from './assets/Items/ItemsMain.jsx'
import LearnToPlay from './assets/LearnToPlay/LearnToPlay.jsx'

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
      element: <GameRender />,
    },
      {
      path: 'Items',
      element: <Items />,
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
    {
      path: 'learntoplay',
      element: <LearnToPlay />
    },

  ],
}]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
  );
