import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Main from './routes/Main';
//import Main from './components/Main';
import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import { Print } from './routes/Print';
import { Digital } from './routes/Digital';
import { Arts } from './routes/Arts';
import { Resume } from './routes/Resume';

const router = createBrowserRouter([
  {path: '/', 
   element: <Main /> 
  },{
    path: '/print',
    element: <Print/>
  },{
    path: '/digital',
    element: <Digital/>
  },{
    path: '/arts',
    element: <Arts/>
  },{
    path: '/resume',
    element: <Resume/>
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);


