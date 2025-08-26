// src/AdminRoute.jsx
import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "./context/AuthContext";

const AdminRoute = () => {
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  const { isAdmin } = useContext(AuthContext);

  if (!isLoggedIn) return <Navigate to="/auth" replace />;
  if (!isAdmin) return <Navigate to="/admin/login" replace />;
  return <Outlet />;
};

export default AdminRoute;
