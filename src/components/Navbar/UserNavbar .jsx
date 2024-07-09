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
    <nav className="bg-[#ecd5c5] shadow-md w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center space-x-4">
            <NavLogo />
            <div className="hidden md:flex space-x-4 items-center">
              <NavLink
                to="/"
                icon={
                  <lord-icon
                    src="https://cdn.lordicon.com/wmwqvixz.json"
                    trigger="hover"
                    colors="primary:#15803D"
                    style={{ width: "20px", height: "20px" }}
                  ></lord-icon>
                }
              >
                Home
              </NavLink>

              <NavLink
                to="/about"
                icon={
                  <lord-icon
                    src="https://cdn.lordicon.com/jnzhohhs.json"
                    trigger="hover"
                    colors="primary:#15803D"
                    style={{ width: "20px", height: "20px" }}
                  ></lord-icon>
                }
              >
                About Us
              </NavLink>

              <Link
                to="/popularCategories/fashionAccessories"
                className="text-green-800 hover:text-green-500 text-sm"
              >
                Fashion
              </Link>
              <Link
                to="/popularCategories/customizedGifts"
                className="text-green-800 hover:text-green-500 text-sm"
              >
                Gifts
              </Link>
              <Link
                to="/popularCategories/furnitureDecor"
                className="text-green-800 hover:text-green-500 text-sm"
              >
                Furniture
              </Link>
              <Link
                to="/popularCategories/printingStationery"
                className="text-green-800 hover:text-green-500 text-sm"
              >
                Stationary
              </Link>
              <Link
                to="/popularCategories/bodyCare"
                className="text-green-800 hover:text-green-500 text-sm"
              >
                Body-Care
              </Link>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-4">
              <SearchBar searchTerm={searchTerm} handleSearch={handleSearch} />
              <CartIcon />
              {isLoggedIn && (
                <Link
                  to={isAdmin ? "/admin/dashboard" : "/dashboard"}
                  className="text-green-800 hover:text-gray-600 flex items-center"
                >
                  <FaUserCircle className="text-xl" />
                </Link>
              )}
              <AuthButton isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
            </div>

            <div className="md:hidden flex items-center">
              <button
                onClick={toggleNavbar}
                className="text-green-800 hover:text-gray-600 focus:outline-none"
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

      {isOpen && (
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
      )}
    </nav>
  );
};

export default Navbar;
