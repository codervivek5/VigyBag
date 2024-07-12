// MobileMenu.jsx
import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaUserCircle } from "react-icons/fa";

const MobileMenu = ({ isOpen, isLoggedIn, handleLogout, isClose }) => (
  <div className={`${isOpen ? "block" : "hidden"} md:hidden`}>
    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
      <div className="py-1">
        {isLoggedIn ? (
          <p className="text-green-700 font-bold ml-4 mb-2">Hi, Vivek</p>
        ) : (
          <Link
            to="/login"
            className="text-black hover:text-gray-600 px-3 py-2 rounded-md text-lg font-medium flex items-center">
            <FaUserCircle className="mr-2" />
            Login
          </Link>
        )}
        <Link
          to="Dashboard"
          className="text-black hover:text-gray-600 block px-4 py-2 text-sm">
          Dashboard
        </Link>
        <Link
          to="popularCategories/fashionAccessories"
          className="text-black hover:text-gray-600 block px-4 py-2 text-sm">
          Fashion
        </Link>
        <Link
          to="popularCategories/customizedGifts"
          className="text-black hover:text-gray-600 block px-4 py-2 text-sm">
          Gifts
        </Link>
        <Link
          to="popularCategories/furnitureDecor"
          className="text-black hover:text-gray-600 block px-4 py-2 text-sm">
          Furniture
        </Link>
        <Link
          to="popularCategories/printingStationery"
          className="text-black hover:text-gray-600 block px-4 py-2 text-sm">
          Stationary
        </Link>
        <Link
          to="popularCategories/bodyCare"
          className="text-black hover:text-gray-600 block px-4 py-2 text-sm">
          Body-Care
        </Link>
      </div>
      <Link
        to="/cart"
        className="text-black hover:text-gray-600 px-3 py-2 rounded-md text-lg font-medium flex items-center">
        <FaShoppingCart className="mr-2" />
        Cart
      </Link>
    </div>
  </div>
);

export default MobileMenu;
