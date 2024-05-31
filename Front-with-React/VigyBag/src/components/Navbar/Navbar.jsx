import React from 'react';
import { FaSearch, FaShoppingCart, FaBell, FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';



// ...

<Link to="/dashboard">
  <FaUserCircle className="mx-2 text-black cursor-pointer size-10" />
  <span className="mx-2 text-black font-semibold text-2xl">Hi, Vivek</span>
</Link>

const Navbar = () => {
  return (
    <nav className="flex  items-center justify-between bg-[#fdf1e8] p-4">

      {/* Logo and Navigation Links */}
      <div className="flex  gap-10 items-center">
        <img src="" alt="Logo" className="h-10" />
        <div className="ml-4">
          {/* Home Link */}
          <a href="/" className="mx-2 text-black text-2xl font-bold">Home</a>

          {/* Gifts Dropdown */}
          <div className="inline-block relative">
            <a href="/gifts" className="mx-2 text-2xl text-black font-bold">Gifts</a>
          </div>

          {/* Categories Dropdown */}
          <div className="inline-block relative">
            <a href="/categories" className="mx-2 text-2xl text-black font-bold">Categories</a>
          </div>

          {/* About Us Link */}
          <a href="/about" className="mx-2 text-2xl text-black font-bold">About Us</a>
        </div>
      </div>
      {/* Search Bar */}
      <div className="flex  gap-10 items-center  rounded-full border-black border-2  bg-gray-200 px-4 py-1">
        <input type="text" placeholder="Search" className="bg-transparent outline-none" />
        <FaSearch className="text-gray-600" />
      </div>

      {/* User Actions */}
      <div className="flex gap-2 items-center">
        <FaShoppingCart className="mx-2 text-black cursor-pointer size-10" />
        <FaBell className="mx-2 text-black cursor-pointer size-10" />
        <Link to="/dashboard">
            <div className='flex'>
              <FaUserCircle className="mx-2 text-black cursor-pointer size-10" />
              <span className="mx-2 text-black font-semibold text-2xl">Hi, Vivek</span>
            </div>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;