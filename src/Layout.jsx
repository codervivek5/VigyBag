import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { Outlet } from "react-router-dom";
import GoToTop from "./components/GoToTop/gototop";
import ChatBox from "./components/ChatBox/ChatBox"; // Adjust the path if needed

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
      <GoToTop />
      <ChatBox />
    </>
  );
};

export default Layout;
