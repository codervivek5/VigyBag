import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  // if (isLoggedIn) {
  //   return <Outlet />;
  // } else {
  //   return <Navigate to="/login" />;
  // }
};

export default ProtectedRoute;
