import React, { useEffect, useRef, useState } from "react";
import { FaSearch } from "react-icons/fa";

const SearchBar = ({ searchTerm, handleSearch, suggestions, handleSuggestionClick }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const onOutsideClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", onOutsideClick);
    return () => document.removeEventListener("mousedown", onOutsideClick);
  }, []);

  const onInputChange = (e) => {
    handleSearch(e);
    setOpen(true);
  };

  const onSuggestionClick = (suggestion) => {
    setOpen(false);
    handleSuggestionClick(suggestion);
  };

  const showDropdown = open && searchTerm.trim().length > 0 && suggestions.length > 0;

  return (
    <div ref={ref} className="relative flex items-center rounded-full border-green-800 border-2 bg-gray-200 px-4 py-2 w-[90%] ml-6 mt-20">
      <input
        type="text"
        placeholder="Search for products"
        className="bg-transparent outline-none w-full text-green-700"
        value={searchTerm}
        onChange={onInputChange}
        onFocus={() => searchTerm.trim().length > 0 && setOpen(true)}
      />
      <FaSearch className="text-green-800" />
      {showDropdown && (
        <div className="absolute top-full left-0 w-full bg-white border border-gray-300 mt-2 rounded-md shadow-lg z-20">
          {suggestions.map((suggestion, index) => (
            <div
              key={index}
              onClick={() => onSuggestionClick(suggestion)}
              className="px-4 py-2 cursor-pointer hover:bg-gray-100"
            >
              {suggestion.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
