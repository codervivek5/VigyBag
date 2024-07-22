import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../assets/images/Logo.svg";

const AdminNavbar = () => {
  const navigate = useNavigate();

  const username = localStorage.getItem("username");

  const handleLogout = () => {
    if (window.confirm("Are you sure you want to logout?")) {
      localStorage.removeItem("isLoggedIn");
      localStorage.removeItem("username");
      alert("Logout Successful.");
      navigate("/auth");
    }
  };
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row justify-between items-center">
        <div className="flex items-center space-x-4 mb-4 sm:mb-0">
          <img src={Logo} alt="Logo" className="h-[7vh]" />
          <nav className="hidden sm:block">
            <ul className="flex space-x-10 text-gray-600">
              <Link to="/admin">Home</Link>
              <Link to="#">Contact Us</Link>
              <Link to="#">Help</Link>
              <Link to="#">Analytics</Link>
            </ul>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <span>Hello, {username}</span>
          <button
            onClick={handleLogout}
            className="bg-indigo-600 text-white px-4 py-2 rounded"
          >
            Logout
          </button>
        </div>
      </div>
    </header>
  );
};

export default AdminNavbar;
