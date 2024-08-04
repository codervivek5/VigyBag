import React, { useState, useRef, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import NavLogo from "./NavLogo";
import SearchBar from "../SearchBar/SearchBar";
import CartIcon from "./CartIcon";
import AuthButton from "./AuthButton";
import MobileMenu from "./MobileMenu";
import { FaUserCircle } from "react-icons/fa";
import Swal from "sweetalert2";
import WishlistIcon from "./WishlistIcon";

const UserNavbar = ({ isAdmin }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();
  const dropdownRef = useRef(null);

  const username = localStorage.getItem("username");
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  const isAdminT = localStorage.getItem("isAdmin") === "true";

  const toggleNavbar = () => setIsOpen(!isOpen);
  const handleSearch = (e) => setSearchTerm(e.target.value);

  // const handleLogout = () => {
  //   if (window.confirm("Are you sure you want to logout?")) {
  //     localStorage.removeItem("isLoggedIn");
  //     localStorage.removeItem("username");
  //     alert("Logout Successful.");
  //     navigate("/login");
  //   }
  // };

  const handleLogout = () => {
    Swal.fire({
      title: "Are you sure you want to logout?",
      showCancelButton: true,
      confirmButtonText: "Yes",
      cancelButtonText: "No",
      customClass: {
        popup: "custom-popup",
        title: "custom-title",
        content: "custom-content",
        confirmButton: "custom-confirm-button",
        cancelButton: "custom-cancel-button",
      },
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.setItem("isLoggedIn", false);
        localStorage.removeItem("username");
        navigate("/auth");

        Swal.fire({
          title: "Logout successfully!",
          text: "Visit Again to VigyBag!",
          icon: "success",
          confirmButtonText: "OK",
          customClass: {
            popup: "custom-popup",
            title: "custom-title",
            content: "custom-content",
            confirmButton: "custom-confirm-button",
          },
        });
      }
    });
  };

  const handleDropdownToggle = () => setShowDropdown((prev) => !prev);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navLinks = [
    { to: "/popularCategories/fashionAccessories", text: "Fashion" },
    { to: "/popularCategories/customizedGifts", text: "Gifts" },
    { to: "/popularCategories/furnitureDecor", text: "Furniture" },
    { to: "/popularCategories/printingStationery", text: "Stationary" },
    { to: "/popularCategories/bodyCare", text: "Body-Care" },
  ];

  return (
    <nav className="bg-[#ecd5c5] shadow-lg fixed w-full z-50 -mt-1">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center w-full">
            <NavLogo />
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <div className="py-1 flex justify-evenly items-center">
                  {navLinks.map((link) => (
                    <Link
                      key={link.text}
                      to={link.to}
                      className="text-green-800 hover:text-green-500 hover:underline block px-4 py-2 font-bold text-base">
                      {link.text}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center">
            <div className="md:block">
              <div className="ml-4 flex items-center md:ml-6 gap-6">
                <div className="hidden md:block">
                  <SearchBar
                    searchTerm={searchTerm}
                    handleSearch={handleSearch}
                  />
                </div>
                <div className="flex md:gap-6 gap-7 mr-4 md:mr-0">
                  <WishlistIcon />
                  <CartIcon />
                </div>
                <div className="md:block hidden">
                  {isLoggedIn ? (
                    <div className="relative flex gap-3 items-center">
                      {/* <FaUserCircle
                      onClick={handleDropdownToggle}
                      className="text-3xl cursor-pointer"
                    /> */}
                      <lord-icon
                        onClick={handleDropdownToggle}
                        className="text-3xl cursor-pointer"
                        style={{
                          height: "40px",
                          width: "40px",
                        }}
                        src="https://cdn.lordicon.com/hrjifpbq.json"
                        trigger="hover"
                        colors="primary:#15803D"></lord-icon>
                      <span className="text-green-700 font-bold">
                        {username}
                      </span>
                      {showDropdown && (
                        <div
                          ref={dropdownRef}
                          className="absolute right-0 mt-32 w-48 bg-white rounded-md shadow-lg py-1">
                          {isAdminT && (
                            <Link
                              to="/admin"
                              className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                              Admin Dashboard
                            </Link>
                          )}
                          <Link
                            to="/dashboard"
                            className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                            Dashboard
                          </Link>
                          <button
                            onClick={handleLogout}
                            className="block px-4 py-2 text-gray-800 hover:bg-gray-200 w-full text-left">
                            Logout
                          </button>
                        </div>
                      )}
                    </div>
                  ) : (
                    <AuthButton isLoggedIn={isLoggedIn} />
                  )}
                </div>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={toggleNavbar}
                className="inline-flex items-center justify-center p-2 rounded-md text-green-800 hover:text-gray-600 focus:outline-none">
                <svg
                  className="h-6 w-6"
                  stroke="#15803D"
                  fill="#15803D"
                  viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d={
                      isOpen
                        ? "M6 18L18 6M6 6l12 12"
                        : "M4 6h16M4 12h16M4 18h16"
                    }
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <MobileMenu
        isOpen={isOpen}
        searchTerm={searchTerm}
        handleSearch={handleSearch}
        handleDropdown={handleDropdownToggle}
        openDropdown={showDropdown}
        isLoggedIn={isLoggedIn}
        handleLogout={handleLogout}
        username={username}
      />
    </nav>
  );
};

export default UserNavbar;
