import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Categories from './pages/Categories';
import Toys from './pages/gifts/Toys';
import DecorativeItems from './pages/Category/DecorativeItems';
import AboutUs from './pages/AboutUs';
import Gifts from './pages/gifts/Gifts';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Layout from './Layout'



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout/>}>
      <Route path="" element={<Home/>}/>

      {/* Drop down of categories */}

      <Route path="categories" element={<Categories/>}>       
        <Route path="decorativeItems" element={<DecorativeItems/>}/>
      </Route>

      {/* Drop down of Gifts */}

      <Route path="gifts" element={<Gifts/>}>
          <Route path="toys" element={<Toys/>}/>  
      </Route>

      <Route path="about" element={<AboutUs/>}/>
      <Route path="contact" element={<Contact/>}/>
    </Route>
  )
)



ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <RouterProvider router={router}/>
  </>,
)
