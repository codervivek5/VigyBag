import React, { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import UserNavbar from "./components/Navbar/UserNavbar";
import AdminNavbar from "../Admin/components/AdminNavbar/AdminNavbar";
import Footer from "./components/Footer/Footer";
import GoToTop from "./components/GoToTop/gototop";
import ScrollProgressBar from "./components/progressbar/ScrollProgressBar";
import FeedbackButton from "./components/FeedbackForm/FeedBtn";
import Loader from "./components/progressbar/Loader";
const UserLayout = () => {
   const [loading, setLoading] = useState(true);
   const location = useLocation();

  // Determine which navbar to show based on the current route
  const isAdminRoute = location.pathname.startsWith("/admin");

  // Simulate page loading
  useEffect(() => {
    const loadPage = async () => {
      // Simulate page load delay
      await new Promise(resolve => setTimeout(resolve, 3000)); // 3-second delay
      setLoading(false); // Hide loader after page is loaded
    };

    loadPage();
  }, []);

  return (
    <>
      {isAdminRoute ? <AdminNavbar /> : <UserNavbar />}
      <Loader visible={loading} /> {/*set to true to manage state as needed */}
      <ScrollProgressBar />
      <Outlet />
      <Footer />
      <GoToTop />
      {!isAdminRoute && <FeedbackButton />}
    </>
  );
};

export default UserLayout;