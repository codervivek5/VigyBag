import React, { useState } from "react";

import UserNavbar from "./components/Navbar/UserNavbar ";
import AdminNavbar from "./Admin/components/AdminNavbar";
import Footer from "./components/Footer/Footer";
import { Outlet, useLocation } from "react-router-dom";
import GoToTop from "./components/GoToTop/gototop";
import ScrollProgressBar from "./components/progressbar/ScrollProgressBar";
import FeedbackButton from "./components/FeedbackForm/FeedBtn";
const Layout = () => {
  const location = useLocation();

  // Determine which navbar to show based on the current route
  const isAdminRoute = location.pathname.startsWith("/admin");

  const showFeedbackButton = !isAdminRoute;

  return (
    <>
      {isAdminRoute ? <AdminNavbar /> : <UserNavbar />}
      <ScrollProgressBar />
      <Outlet />
      <Footer />
      <GoToTop />
      {showFeedbackButton && <FeedbackButton />}
    </>
  );
};

export default Layout;
