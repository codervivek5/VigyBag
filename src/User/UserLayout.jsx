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
  const [progress, setProgress] = useState(0);
   const location = useLocation();

  // Determine which navbar to show based on the current route
  const isAdminRoute = location.pathname.startsWith("/admin");

  // Simulate page loading
  useEffect(() => {
    const simulateLoading = () => {
      setProgress(0);
      const interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            clearInterval(interval);
            return 100;
          }
          return prev + 1;
        });
      }, 30); // Adjust the speed as needed
    };

    simulateLoading();
  }, [location]);

  return (
    <>
      {isAdminRoute ? <AdminNavbar /> : <UserNavbar />}
      <Loader progress={progress} /> {/*set to true to manage state as needed */}
      <ScrollProgressBar />
      <Outlet />
      <Footer />
      <GoToTop />
      {!isAdminRoute && <FeedbackButton />}
    </>
  );
};

export default UserLayout;