// MobileMenu.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaGift, FaInfoCircle, FaShoppingCart, FaUserCircle, FaChevronDown, FaSearch } from 'react-icons/fa';

const MobileMenu = ({ isOpen, searchTerm, handleSearch, handleDropdown, openDropdown, isLoggedIn, handleLogout }) => (
  <div className={`${isOpen ? "block" : "hidden"} md:hidden`}>
    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
      {/* Mobile search input */}
      <div className="flex items-center rounded-full border-black border-2 bg-gray-200 px-4 py-2 w-full">
        <input
          type="text"
          placeholder="Search"
          className="bg-transparent outline-none w-full"
          value={searchTerm}
          onChange={handleSearch}
        />
        <FaSearch className="text-gray-600" />
      </div>
      
      {/* Mobile navigation links */}
      <Link to="/" className="text-black hover:text-gray-600 px-3 py-2 rounded-md text-lg font-medium flex items-center">
        <FaHome className="mr-2" />
        Home
      </Link>

      <div className="relative group">
        <button
          className="text-black hover:text-gray-600 px-3 py-2 rounded-md text-lg font-medium flex items-center w-full focus:outline-none"
          onClick={() => handleDropdown("gifts")}
        >
          <FaGift className="mr-2" />
          Gifts
          <FaChevronDown className="ml-1" />
        </button>
        
        <div className={`${openDropdown === "gifts" ? "block" : "hidden"} mt-2 w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5`} style={{ zIndex: "5" }}>
          <div className="py-1">
            <Link to="/categories/fashion" className="text-black hover:text-gray-600 block px-4 py-2 text-sm">Fashion</Link>
            <Link to="/categories/gifts" className="text-black hover:text-gray-600 block px-4 py-2 text-sm">Gifts</Link>
            <Link to="/categories/furniture" className="text-black hover:text-gray-600 block px-4 py-2 text-sm">Furniture</Link>
            <Link to="/categories/stationary" className="text-black hover:text-gray-600 block px-4 py-2 text-sm">Stationary</Link>
            <Link to="/categories/bodycare" className="text-black hover:text-gray-600 block px-4 py-2 text-sm">Body-Care</Link>
          </div>
        </div>
      </div>

      <Link to="/about" className="text-black hover:text-gray-600 px-3 py-2 rounded-md text-lg font-medium flex items-center">
        <FaInfoCircle className="mr-2" />
        About Us
      </Link>

      <Link to="/cart" className="text-black hover:text-gray-600 px-3 py-2 rounded-md text-lg font-medium flex items-center">
        <FaShoppingCart className="mr-2" />
        Cart
      </Link>

      {isLoggedIn ? (
        <button onClick={handleLogout} className="text-black hover:text-gray-600 px-3 py-2 rounded-md text-lg font-medium flex items-center">
          <FaUserCircle className="mr-2" />
          Logout
        </button>
      ) : (
        <Link to="/login" className="text-black hover:text-gray-600 px-3 py-2 rounded-md text-lg font-medium flex items-center">
          <FaUserCircle className="mr-2" />
          Login
        </Link>
      )}
    </div>
  </div>
);

export default MobileMenu;