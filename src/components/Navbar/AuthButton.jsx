// AuthButton.jsx
import React from "react";
import { Link } from "react-router-dom";

const AuthButton = ({ isLoggedIn, handleLogout }) =>
  isLoggedIn ? (
    <button
      onClick={handleLogout}
      className="ml-4 text-sm text-white bg-[#3d784aff] px-5 py-1 rounded-2xl"
      style={{ fontSize: "19px" }}
    >
      Logout
    </button>
  ) : (
    <Link
      to="/login"

      className="ml-4 text-green-800 hover:text-gray-600 flex items-center"
    >

      className="ml-4 text-green-800 hover:text-gray-600 flex items-center">

      <button
        type="button"
        className="text-lg text-white bg-[#3d784aff] px-5 py-1 rounded-2xl"
        style={{ fontSize: "19px" }}
      >
        Login
      </button>
    </Link>
  );

export default AuthButton;
