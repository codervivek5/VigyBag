import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { Outlet } from "react-router-dom";
import GoToTop from "./components/GoToTop/gototop";
import ScrollProgressBar from "./components/progressbar/ScrollProgressBar";

const Layout = () => {
  return (
    <>
      <Navbar />
      <ScrollProgressBar />
      <Outlet />
      <Footer />
      <GoToTop />
      
    </>

  );
};

export default Layout;
