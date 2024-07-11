import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import NavLogo from "./NavLogo";
import NavLink from "./NavLink";
import ProductsDropdown from "./ProductsDropdown";
import SearchBar from "../SearchBar/SearchBar";
import CartIcon from "./CartIcon";
import AuthButton from "./AuthButton";
import MobileMenu from "./MobileMenu";
import { FaUserCircle, FaSearch } from "react-icons/fa";


const Navbar = ({ isAdmin }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  const toggleNavbar = () => setIsOpen(!isOpen);
  const toggleSearch = () => setShowSearch(!showSearch);
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
    <>
      <div class="w-full border-b">
        <div class="flex flex-col items-center justify-between px-4 py-2 space-y-4 md:flex-row md:space-y-0">
          <div class="flex items-center space-x-4">
            <NavLogo></NavLogo>
            <span class="text-2xl font-bold text-purple-600">VigyBag</span>
          </div>
          <div class="flex items-center space-x-4">
            <a href="#" class="text-sm text-gray-600">
              About Us
            </a>
            <a href="#" class="text-sm text-gray-600">
              Order Tracking
            </a>
            <a href="#" class="text-sm text-gray-600">
              Contact Us
            </a>
            <a href="#" class="text-sm text-gray-600">
              FAQs
            </a>
            <div class="flex items-center space-x-2">
              <span class="text-sm text-gray-600">English</span>
              <span class="text-sm text-gray-600">USD</span>
            </div>
          </div>
        </div>
        <div class="flex flex-col items-center justify-between px-4 py-2 space-y-4 md:flex-row md:space-y-0">
          <div class="flex items-center space-x-4">
            <button
              type="button"
              role="combobox"
              aria-controls="radix-:r0:"
              aria-expanded="false"
              aria-autocomplete="none"
              dir="ltr"
              data-state="closed"
              data-placeholder=""
              class="h-10 w-full justify-between rounded-md border border-input bg-background px-3 py-2 ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 flex items-center space-x-2 text-sm text-gray-600"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="h-5 w-5"
              >
                <line x1="4" x2="20" y1="12" y2="12"></line>
                <line x1="4" x2="20" y1="6" y2="6"></line>
                <line x1="4" x2="20" y1="18" y2="18"></line>
              </svg>
              <span className="pointer-events: none;">All categories</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-chevron-down h-4 w-4 opacity-50"
                aria-hidden="true"
              >
                <path d="m6 9 6 6 6-6"></path>
              </svg>
            </button>
            <input
              class="flex h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-full max-w-xs"
              placeholder="I'm shopping for..."
              type="text"
            />
            <button class="whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 flex items-center justify-center w-10 h-10 p-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="h-5 w-5"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </svg>
            </button>
          </div>
          <div class="flex items-center space-x-4">
            <div class="flex items-center space-x-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="h-5 w-5 text-gray-600"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                <path d="M12 17h.01"></path>
              </svg>
              <span class="text-sm text-gray-600">Need Help?</span>
              <span class="text-sm font-bold text-gray-600">
                +001 123 456 789
              </span>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="h-5 w-5 text-gray-600"
            >
              <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="h-5 w-5 text-gray-600"
            >
              <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="h-5 w-5 text-gray-600"
            >
              <circle cx="8" cy="21" r="1"></circle>
              <circle cx="19" cy="21" r="1"></circle>
              <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path>
            </svg>
          </div>
        </div>
        <div class="flex items-center justify-center px-4 py-2 space-x-4 bg-gray-100">
          <a href="#" class="text-sm text-gray-600">
            Mens
          </a>
          <a href="#" class="text-sm text-gray-600">
            Womans
          </a>
          <a href="#" class="text-sm text-gray-600">
            Kids
          </a>
          <a href="#" class="text-sm text-gray-600">
            Electronic Items
          </a>
          <a href="#" class="text-sm text-gray-600">
            Kitchen Accessories
          </a>
          <a href="#" class="text-sm text-gray-600">
            News &amp; Blogs
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
