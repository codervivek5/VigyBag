import React, { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import UserNavbar from "./components/Navbar/UserNavbar";
import AdminNavbar from "../Admin/components/AdminNavbar/AdminNavbar";
import Footer from "./components/Footer/Footer";
import GoToTop from "./components/GoToTop/gototop";
import ScrollProgressBar from "./components/progressbar/ScrollProgressBar";
import FeedbackButton from "./components/FeedbackForm/FeedBtn";

const UserLayout = () => {
   const location = useLocation();

  // Determine which navbar to show based on the current route
  const isAdminRoute = location.pathname.startsWith("/admin");

  return (
    <>
      {isAdminRoute ? <AdminNavbar /> : <UserNavbar />}
      
      <ScrollProgressBar />
      <Outlet />
      <Footer />
      <GoToTop />
      {!isAdminRoute && <FeedbackButton />}
    </>
  );
};

export default UserLayout;