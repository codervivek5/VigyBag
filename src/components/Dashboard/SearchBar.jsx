import React from 'react';
import { FaSearch } from "react-icons/fa";

function SearchBar() {
  return (
    <>
      <div className="relative mb-6">
          <input
            type="text"
            placeholder="Search"
            className="w-full pl-10 pr-4 py-2 rounded-md bg-[#d1cdcdff] focus:outline-none focus:ring-2 focus:ring-[#6AB04C] text-[#616161ff]"
          />
          <FaSearch className="absolute right-10 top-2.5 text-[#616161ff]" />
        </div>
    </>
  )
}

export default SearchBar
