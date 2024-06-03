import React from 'react';
import { FaSearch, FaShoppingCart, FaBell, FaUserCircle } from 'react-icons/fa';
import { Link , NavLink} from 'react-router-dom';

import logo from '../../assets/images/Logo.svg'


// ...

<Link to="/dashboard">
  <FaUserCircle className="mx-2 text-black cursor-pointer size-10" />
  <span className="mx-2 text-black font-semibold text-2xl">Hi, Vivek</span>
</Link>

const Navbar = () => {
  return (
    <nav className="flex  items-center justify-between bg-[#fdf1e8] p-3">

      {/* Logo and Navigation Links */}
      <div className="flex  gap-5 items-center">

      <NavLink to="/">
        <img src={logo} alt="Logo" className="  h-10" />
      </NavLink>

        <div className="ml-4">
          {/* Home Link */}
          <NavLink to="/" className="mx-2 text-black text-xl   ">Home</NavLink>

          {/* Gifts Dropdown */}
          <div className="inline-block relative">
            <NavLink to="/gifts" className="mx-2 text-xl text-black  ">Gifts</NavLink>
          </div>

          {/* Categories Dropdown */}
          <div className="inline-block relative">
            <NavLink to="/categories" className="mx-2 text-xl text-black  ">Categories</NavLink>
          </div>

          {/* About Us Link */}
          <NavLink to="/about" className="mx-2 text-xl text-black  ">About Us</NavLink>
        </div>
      </div>

      {/* Search Bar */}
      <div className="flex  gap-10 items-center  rounded-full border-black border-2  bg-gray-200 px-4 py-2">
        <input type="text" placeholder="Search" className="bg-transparent outline-none" />
        <FaSearch className="text-gray-600" />
      </div>

      {/* User Actions */}
      <div className="flex gap-2 items-center">
        <FaShoppingCart className="mx-2 text-black cursor-pointer size-6" />
        <FaBell className="mx-2 text-black cursor-pointer size-6" />
        <Link to="/dashboard">
            <div className='flex'>
              <FaUserCircle className="mx-2 text-black cursor-pointer size-6" />
              <span className="mx-2 text-black font-bold text-xl">Hi, Vivek</span>
            </div>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;