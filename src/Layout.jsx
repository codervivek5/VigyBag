import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer';
import { Outlet } from "react-router-dom";
import GoToTop from './components/GoToTop/gototop';

function Layout() {
  return (
    <>
    <Navbar/>
    <Outlet/>
    <Footer/>
    <GoToTop />
    </>
  )
}

export default Layout