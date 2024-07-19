import React, { useState, useRef, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import NavLogo from "./NavLogo";
import SearchBar from "../SearchBar/SearchBar";
import CartIcon from "./CartIcon";
import AuthButton from "./AuthButton";
import MobileMenu from "./MobileMenu";
import { FaUserCircle } from "react-icons/fa";
import Swal from "sweetalert2";

const UserNavbar = ({ isAdmin }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  // const [username, setUsername] = useState("");
  const username = localStorage.getItem("username");
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  const dropdownRef = useRef(null);

  useEffect(() => {
    const fetchUsername = async () => {
      try {
        const username = localStorage.getItem("username");
        console.log(username);
      } catch (error) {
        console.error("Error fetching username:", error);
        setUsername("User");
      }
    };

    if (isLoggedIn) {
      fetchUsername();
    }
  }, [isLoggedIn]);

  const toggleNavbar = () => setIsOpen(!isOpen);
  const handleSearch = (e) => setSearchTerm(e.target.value);

  // const handleLogout = () => {
  //   const confirmed = window.confirm("Are you sure you want to logout?");
  //   if (confirmed) {
  //     localStorage.setItem("isLoggedIn", false);
  //     localStorage.removeItem("username");
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
        navigate("/login");

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

  const handleDropdownToggle = () => {
    setShowDropdown((prev) => !prev);
  };

  const handleClickOutside = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setShowDropdown(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-[#ecd5c5] shadow-lg md:w-full fixed md:z-50 -mt-1 w-[100vw] z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center w-full">
            <NavLogo />
            <div className="hidden md:block lg:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <div className="py-1 flex justify-evenly items-center">
                  <Link
                    to="/popularCategories/fashionAccessories"
                    className="text-green-800 hover:text-green-500 hover:underline block px-4 py-2 font-bold text-base">
                    Fashion
                  </Link>
                  <Link
                    to="/popularCategories/customizedGifts"
                    className="text-green-800 hover:text-green-500 hover:underline block px-4 py-2 text-base font-bold">
                    Gifts
                  </Link>
                  <Link
                    to="/popularCategories/furnitureDecor"
                    className="text-green-800 hover:text-green-500 hover:underline block px-4 py-2 text-base font-bold">
                    Furniture
                  </Link>
                  <Link
                    to="/popularCategories/printingStationery"
                    className="text-green-800 hover:text-green-500 hover:underline block px-4 py-2 text-base font-bold">
                    Stationary
                  </Link>
                  <Link
                    to="/popularCategories/bodyCare"
                    className="text-green-800 hover:text-green-500 hover:underline block px-4 py-2 text-base font-bold">
                    Body-Care
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center">
            <div className="md:block hidden">
              <div className="ml-4 flex items-center md:ml-6 gap-6">
                <SearchBar
                  searchTerm={searchTerm}
                  handleSearch={handleSearch}
                />
                <CartIcon />
                {isLoggedIn ? (
                  <div className="relative flex justify-center items-center gap-3">
                    {/* need styling fix then implement only */}
                    <FaUserCircle
                      onClick={handleDropdownToggle}
                      className="text-3xl cursor-pointer"
                    />
                    <span className="text-green-700 font-bold">{username}</span>
                    {showDropdown && (
                      <div
                        ref={dropdownRef}
                        className="absolute right-0 mt-36 w-48 bg-white rounded-md shadow-lg py-1">
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
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={toggleNavbar}
                className="inline-flex items-center justify-center p-2 rounded-md text-green-800 hover:text-gray-600 focus:outline-none">
                {isOpen ? (
                  <svg
                    className="h-6 w-6"
                    stroke="#15803D"
                    fill="#15803D"
                    viewBox="0 0 24 24">
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
                    viewBox="0 0 24 24">
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
