import React, { useState, useRef, useEffect, useMemo } from "react";
import { FaSearch } from "react-icons/fa";

const SearchBar = ({
  searchTerm,
  handleSearch,
  searchResults,
  onResultClick,
  categories: categoriesProp,
}) => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const searchRef = useRef(null);

  // Use prop categories (e.g. All, Fashion, Gifts) or derive from results
  const categories = useMemo(() => {
    if (categoriesProp && categoriesProp.length > 0) return categoriesProp;
    const unique = new Set(searchResults.map((item) => item.category).filter(Boolean));
    return ["All", ...unique];
  }, [categoriesProp, searchResults]);

  // Filter by category + search (ranking already done in parent)
  const processedResults = useMemo(() => {
    const query = searchTerm.trim().toLowerCase();
    if (!query) return [];

    return searchResults.filter((item) => {
      const matchesSearch = item.name.toLowerCase().includes(query);
      const matchesCategory =
        selectedCategory === "All" || item.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, searchResults, selectedCategory]);

  // Open dropdown when user types
  const onInputChange = (e) => {
    handleSearch(e);
    setIsDropdownOpen(true);
  };

  const onInputFocus = () => {
    if (searchTerm.trim().length > 0) setIsDropdownOpen(true);
  };

  // Close dropdown on outside click (do not clear input)
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleResultClick = (link) => {
    setIsDropdownOpen(false);
    onResultClick(link);
  };

  const showDropdown = searchTerm.trim().length > 0 && isDropdownOpen;

  return (
    <div className="relative" ref={searchRef}>
      <div className="flex items-center rounded-full border-green-800 border-2 bg-gray-200 px-2 py-2 w-[420px]">
        {/* Category selector */}
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="bg-transparent outline-none focus:outline-none focus:ring-0 text-green-700 mr-2 cursor-pointer min-w-0 max-w-[140px]"
          aria-label="Filter by category"
        >
          {categories.map((cat, index) => (
            <option key={index} value={cat}>
              {cat}
            </option>
          ))}
        </select>

        <input
          type="text"
          placeholder="Search for products"
          className="bg-transparent outline-none focus:outline-none focus:ring-0 focus:shadow-none border-0 w-full text-green-700"
          value={searchTerm}
          onChange={onInputChange}
          onFocus={onInputFocus}
          aria-expanded={showDropdown}
          aria-haspopup="listbox"
        />

        <FaSearch className="text-green-800 flex-shrink-0" />
      </div>

      {/* Suggestions dropdown: Categories section + direct navigation */}
      {showDropdown && (
        <div
          className="absolute top-14 left-0 bg-white border border-green-800 w-full rounded-md shadow-lg z-20 max-h-72 overflow-y-auto"
          role="listbox"
        >
          {processedResults.length > 0 ? (
            <>
              <div className="px-3 py-2 bg-green-50 border-b border-green-100 text-xs font-semibold text-green-800 uppercase tracking-wide">
                Categories
              </div>
              <ul className="py-1">
                {processedResults.map((result, index) => (
                  <li
                    key={`${result.link}-${index}`}
                    role="option"
                    className="px-4 py-2.5 text-green-700 hover:bg-green-100 cursor-pointer list-none transition-colors"
                    onClick={() => handleResultClick(result.link)}
                  >
                    {result.name}
                  </li>
                ))}
              </ul>
            </>
          ) : (
            <div className="px-4 py-3 text-gray-500 text-sm">No results found</div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
