// MobileMenu.jsx
import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaUserCircle } from "react-icons/fa";

const MobileMenu = ({ isOpen, isLoggedIn, handleLogout, isClose }) => (
  <div className={`${isOpen ? "block" : "hidden"} md:hidden`}>
    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
      <div className="py-1">
        <Link
          to="popularCategories/fashionAccessories"
          className="text-black hover:text-gray-600 block px-4 py-2 text-sm"
          onClick={isClose}>
          Fashion
        </Link>
        <Link
          to="popularCategories/customizedGifts"
          className="text-black hover:text-gray-600 block px-4 py-2 text-sm"
          onClick={isClose}>
          Gifts
        </Link>
        <Link
          to="popularCategories/furnitureDecor"
          className="text-black hover:text-gray-600 block px-4 py-2 text-sm"
          onClick={isClose}>
          Furniture
        </Link>
        <Link
          to="popularCategories/printingStationery"
          className="text-black hover:text-gray-600 block px-4 py-2 text-sm"
          onClick={isClose}>
          Stationary
        </Link>
        <Link
          to="popularCategories/bodyCare"
          className="text-black hover:text-gray-600 block px-4 py-2 text-sm"
          onClick={isClose}>
          Body-Care
        </Link>
      </div>
      <Link
        to="/cart"
        className="text-black hover:text-gray-600 px-3 py-2 rounded-md text-lg font-medium flex items-center"
        onClick={isClose}>
        <FaShoppingCart className="mr-2" />
        Cart
      </Link>

      {isLoggedIn ? (
        <button
          onClick={() => {
            handleLogout();
            isClose();
          }}
          className="text-black hover:text-gray-600 px-3 py-2 rounded-md text-lg font-medium flex items-center">
          <FaUserCircle className="mr-2" />
          Logout
        </button>
      ) : (
        <Link
          to="/login"
          className="text-black hover:text-gray-600 px-3 py-2 rounded-md text-lg font-medium flex items-center"
          onClick={isClose}>
          <FaUserCircle className="mr-2" />
          Login
        </Link>
      )}
    </div>
  </div>
);

export default MobileMenu;
