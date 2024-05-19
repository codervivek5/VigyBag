// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './Components/Layout';
import ErrorPage from './pages/ErrorPage';

import Home from './pages/Home';








const router=createBrowserRouter([
  {
    path:"/",
    element: <Layout/>,
    errorElement:<ErrorPage/>,
    children:[
      {index:true,element:<Home/>},
      ,
 
    ]
  }
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  
    <RouterProvider router={router}/>
  </React.StrictMode>
);
