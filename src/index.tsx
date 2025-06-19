import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Main from './main/Main';
import List from './list/List';
import Chart from "./chart/Chart";
import Person from "./person/Person";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />
    },
    {
        path: "/list",
        element: <List />
    },
    {
        path: "/person/:id",
        element: <Person />
    },
    {
        path: "/chart",
        element: <Chart />
    },
])

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
