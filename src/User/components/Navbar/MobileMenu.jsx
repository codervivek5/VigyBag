// MobileMenu.jsx
import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaUserCircle } from "react-icons/fa";

const MobileMenu = ({ isOpen, isLoggedIn, username }) => (
  <div className={`${isOpen ? "block" : "hidden"} md:hidden`}>
    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
      <div className="py-1">
        {isLoggedIn ? (
          <div className="relative flex gap-3 items-center ml-4">
            {/* need styling fix then implement only */}
            {/* <p className="mr-2 overflow-hidden flex text-gray-800">{`Hi, ${username}`}</p> */}
            <span className="text-green-700 font-bold">{username}</span>
          </div>
        ) : (
          <Link
            to="/auth"
            className="text-black hover:text-gray-600 px-3 py-2 rounded-md text-lg font-medium flex items-center">
            <lord-icon
              style={{
                height: "30px",
                width: "30px",
              }}
              src="https://cdn.lordicon.com/hrjifpbq.json"
              trigger="hover"
              colors="primary:#15803D"></lord-icon>
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
        <lord-icon
          style={{
            width: "30px",
            height: "30px",
            paddingTop: "2px",
            paddingLeft: "1px",
          }}
          src="https://cdn.lordicon.com/pbrgppbb.json"
          trigger="hover"
          colors="primary:#15803D"></lord-icon>
        Cart
      </Link>
      <Link
        to="/wishlist"
        className="text-black hover:text-gray-600 px-3 py-2 rounded-md text-lg font-medium flex items-center">
        <lord-icon
          style={{
            width: "30px",
            height: "30px",
            paddingTop: "2px",
            paddingLeft: "1px",
          }}
          src="https://cdn.lordicon.com/ulnswmkk.json"
          trigger="hover"
          colors="primary:#15803D"></lord-icon>
        {""}
        Wishlist
      </Link>
    </div>
  </div>
);

export default MobileMenu;
