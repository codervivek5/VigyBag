import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavLogo from "./NavLogo";
import NavLink from "./NavLink";
import ProductsDropdown from "./ProductsDropdown";
import SearchBar from "../SearchBar/SearchBar";
import CartIcon from "./CartIcon";
import AuthButton from "./AuthButton";
import MobileMenu from "./MobileMenu";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = ({ isAdmin }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  const toggleNavbar = () => setIsOpen(!isOpen);
  const handleSearch = (e) => setSearchTerm(e.target.value);

  const handleLogout = () => {
    const confirmed = window.confirm("Are you sure you want to logout?");
    if (confirmed) {
      localStorage.setItem("isLoggedIn", false);
      alert("Logout Successful.");
      navigate("/login");
    }
  };

  return (
    <nav className="bg-[#ecd5c5] shadow-md md:w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center w-full">
            <NavLogo />
            <div className="hidden md:block lg:block">
              <div className="ml-10 flex items-baseline space-x-4">

                <NavLink
                  to="/"
                  icon={
                    <lord-icon
                      src="https://cdn.lordicon.com/wmwqvixz.json"
                      trigger="hover"
                      colors="primary:#15803D"
                      style={{ width: "25px", height: "25px" }}
                    ></lord-icon>
                  }
                >
                  Home
                </NavLink>
                <ProductsDropdown />
                <NavLink
                  to="/about"
                  icon={
                    <lord-icon
                      src="https://cdn.lordicon.com/jnzhohhs.json"
                      trigger="hover"
                      colors="primary:#15803D"
                      style={{ width: "25px", height: "25px" }}
                    ></lord-icon>
                  }
                >
                  About Us
                </NavLink>

                <div className="py-1 flex justify-evenly items-center">
                  <Link
                    to="/popularCategories/fashionAccessories"
                    className="text-green-800 hover:text-green-500 hover:underline block px-4 py-2 text-lg font-bold">
                    Fashion
                  </Link>
                  <Link
                    to="/popularCategories/customizedGifts"
                    className="text-green-800 hover:text-green-500 hover:underline block px-4 py-2 text-lg font-bold">
                    Gifts
                  </Link>
                  <Link
                    to="/popularCategories/furnitureDecor"
                    className="text-green-800 hover:text-green-500 hover:underline block px-4 py-2 text-lg font-bold">
                    Furniture
                  </Link>
                  <Link
                    to="/popularCategories/printingStationery"
                    className="text-green-800 hover:text-green-500 hover:underline block px-4 py-2 text-lg font-bold">
                    Stationary
                  </Link>
                  <Link
                    to="/popularCategories/bodyCare"
                    className="text-green-800 hover:text-green-500 hover:underline block px-4 py-2 text-lg font-bold">
                    Body-Care
                  </Link>
                </div>

              </div>
            </div>
          </div>

          <div className="flex items-center">
            <div className="md:block hidden">
              <div className="ml-4 flex items-center md:ml-6">
                <SearchBar
                  searchTerm={searchTerm}
                  handleSearch={handleSearch}
                />
                <CartIcon />
                {isLoggedIn && (
                  <>
                    {isAdmin ? (
                      <Link
                        to="/admin/dashboard"
                        className="ml-4 text-green-800 hover:text-gray-600 flex items-center"
                      >
                        <FaUserCircle className="mr-2 text-3xl" />
                      </Link>
                    ) : (
                      <Link
                        to="/dashboard"
                        className="ml-4 text-green-800 hover:text-gray-600 flex items-center"
                      >
                        <FaUserCircle className="mr-2 text-3xl" />
                      </Link>
                    )}
                  </>
                )}
                <AuthButton
                  isLoggedIn={isLoggedIn}
                  handleLogout={handleLogout}
                />
              </div>
            </div>

            <div className="-mr-2 flex md:hidden">
              <button
                onClick={toggleNavbar}
                className="inline-flex items-center justify-center p-2 rounded-md text-green-800 hover:text-gray-600 focus:outline-none"
              >
                {isOpen ? (
                  <svg
                    className="h-6 w-6"
                    stroke="#15803D"
                    fill="#15803D"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    className="h-6 w-6"
                    stroke="#15803D"
                    fill="#15803D"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      <MobileMenu
        isOpen={isOpen}
        searchTerm={searchTerm}
        handleSearch={handleSearch}
        handleDropdown={() => {}}
        openDropdown={null}
        isLoggedIn={isLoggedIn}
        handleLogout={handleLogout}
        handleDropdownLeave={() => {}}
      />
    </nav>
  );
};

export default Navbar;
