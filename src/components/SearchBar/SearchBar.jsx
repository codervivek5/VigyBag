// SearchBar.jsx
import React from "react";
import { FaSearch } from "react-icons/fa";

const SearchBar = ({ searchTerm, handleSearch, textSize }) => (
  <div className="flex items-center rounded-full border-green-800 border-2 bg-gray-200 px-2 py-1 md:px-4 md:py-2 w-48 md:w-72">
    <input
      type="text"
      placeholder="Search"
      className={`bg-transparent outline-none w-full text-green-700 ${textSize}`}
      value={searchTerm}
      onChange={handleSearch}
    />
    <FaSearch className={`text-green-800 ${textSize}`} />
  </div>
);

export default SearchBar;
