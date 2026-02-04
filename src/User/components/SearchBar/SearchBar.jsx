import React, { useRef, useEffect, useCallback } from "react";
import { FaSearch } from "react-icons/fa";

const SearchBar = ({ searchTerm, handleSearch, searchResults, onResultClick }) => {
  const searchBarRef = useRef(null);

  const closeSearch = useCallback(() => {
    handleSearch({ target: { value: '' } });
  }, [handleSearch]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchBarRef.current && !searchBarRef.current.contains(event.target)) {
        closeSearch();
      }
    };

    if (searchResults.length > 0) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [searchResults.length, closeSearch]);


  return (
    <>
      <div className="relative" ref={searchBarRef}>
        <div className="flex items-center rounded-full border-green-800 border-2 bg-gray-200 px-4 py-2 w-80 transition focus-within:border-green-600 focus-within:bg-white focus-within:ring-2 focus-within:ring-green-500/30">
          <input
            type="text"
            placeholder="Search for products"
            className="bg-transparent outline-none focus:shadow-none w-full text-green-700"
            value={searchTerm}
            onChange={handleSearch}
          />
          <FaSearch className="text-green-800" />
        </div>
        {searchResults.length > 0 && (
          <ul className="absolute top-12 left-0 bg-white border border-green-800 w-full rounded-md shadow-lg z-10">
            {searchResults.map((result, index) => (
              <li
                key={index}
                className="px-4 py-2 text-green-700 hover:bg-green-200 cursor-pointer list-none"
                onClick={() => onResultClick(result.link)}>
                {result.name}
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default SearchBar;
