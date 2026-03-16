import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaSearch, FaTimes, FaHistory, FaTrendingUp, FaLeaf } from 'react-icons/fa';

const SmartSearchBar = ({ onSearch, placeholder = "Search eco-friendly products..." }) => {
  const [query, setQuery] = useState('');
  const [isActive, setIsActive] = useState(false);
  const [suggestions, setSuggestions] = useState([]);
  const [recentSearches, setRecentSearches] = useState([]);
  const [trendingSearches] = useState([
    'Bamboo Products', 'Organic Soaps', 'Eco-friendly Bags', 'Natural Cosmetics'
  ]);
  const inputRef = useRef(null);
  const containerRef = useRef(null);

  // Mock suggestions - replace with actual API call
  const mockSuggestions = [
    { id: 1, name: 'Bamboo Toothbrush', category: 'Personal Care', eco: true },
    { id: 2, name: 'Organic Cotton Bags', category: 'Accessories', eco: true },
    { id: 3, name: 'Natural Soap Set', category: 'Beauty', eco: true },
    { id: 4, name: 'Eco-friendly Water Bottle', category: 'Lifestyle', eco: true },
    { id: 5, name: 'Sustainable Notebooks', category: 'Stationery', eco: true }
  ];

  useEffect(() => {
    if (query.length > 0) {
      const filtered = mockSuggestions.filter(item =>
        item.name.toLowerCase().includes(query.toLowerCase()) ||
        item.category.toLowerCase().includes(query.toLowerCase())
      );
      setSuggestions(filtered);
    } else {
      setSuggestions([]);
    }
  }, [query]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setIsActive(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearch = (searchQuery) => {
    if (searchQuery.trim()) {
      // Add to recent searches
      const newRecentSearches = [searchQuery, ...recentSearches.filter(s => s !== searchQuery)].slice(0, 5);
      setRecentSearches(newRecentSearches);
      localStorage.setItem('recentSearches', JSON.stringify(newRecentSearches));
      
      if (onSearch) onSearch(searchQuery);
      setQuery(searchQuery);
      setIsActive(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch(query);
    }
  };

  const clearSearch = () => {
    setQuery('');
    setIsActive(false);
    inputRef.current?.focus();
  };

  const containerVariants = {
    inactive: {
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
      transition: { duration: 0.2 }
    },
    active: {
      boxShadow: '0 8px 32px rgba(0,0,0,0.15)',
      transition: { duration: 0.2 }
    }
  };

  const dropdownVariants = {
    hidden: {
      opacity: 0,
      y: -10,
      scale: 0.95,
      transition: { duration: 0.2 }
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.2, ease: 'easeOut' }
    }
  };

  return (
    <div ref={containerRef} className="relative w-full max-w-2xl mx-auto">
      <motion.div
        className="relative bg-white rounded-full border-2 border-gray-200 overflow-hidden"
        variants={containerVariants}
        animate={isActive ? 'active' : 'inactive'}
      >
        {/* Search Icon */}
        <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
          <FaSearch size={18} />
        </div>

        {/* Input Field */}
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsActive(true)}
          onKeyPress={handleKeyPress}
          placeholder={placeholder}
          className="w-full pl-12 pr-12 py-4 text-gray-800 placeholder-gray-500 focus:outline-none bg-transparent"
        />

        {/* Clear Button */}
        <AnimatePresence>
          {query && (
            <motion.button
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              onClick={clearSearch}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 p-1"
            >
              <FaTimes size={16} />
            </motion.button>
          )}
        </AnimatePresence>

        {/* Loading Indicator */}
        <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
          <motion.div
            className="w-5 h-5 border-2 border-green-500 border-t-transparent rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
            style={{ display: 'none' }} // Show when loading
          />
        </div>
      </motion.div>

      {/* Search Dropdown */}
      <AnimatePresence>
        {isActive && (
          <motion.div
            variants={dropdownVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden z-50"
          >
            {/* Suggestions */}
            {suggestions.length > 0 && (
              <div className="p-4">
                <h4 className="text-sm font-semibold text-gray-600 mb-3 flex items-center gap-2">
                  <FaSearch size={12} />
                  Suggestions
                </h4>
                <div className="space-y-2">
                  {suggestions.map((item) => (
                    <motion.div
                      key={item.id}
                      className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 cursor-pointer group"
                      whileHover={{ x: 4 }}
                      onClick={() => handleSearch(item.name)}
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                          <FaLeaf className="text-green-600" size={12} />
                        </div>
                        <div>
                          <div className="font-medium text-gray-800 group-hover:text-green-600">
                            {item.name}
                          </div>
                          <div className="text-xs text-gray-500">{item.category}</div>
                        </div>
                      </div>
                      {item.eco && (
                        <span className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded-full">
                          Eco
                        </span>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {/* Recent Searches */}
            {recentSearches.length > 0 && suggestions.length === 0 && (
              <div className="p-4 border-t border-gray-100">
                <h4 className="text-sm font-semibold text-gray-600 mb-3 flex items-center gap-2">
                  <FaHistory size={12} />
                  Recent Searches
                </h4>
                <div className="space-y-1">
                  {recentSearches.map((search, index) => (
                    <motion.div
                      key={index}
                      className="p-2 rounded-lg hover:bg-gray-50 cursor-pointer text-gray-700 hover:text-green-600"
                      whileHover={{ x: 4 }}
                      onClick={() => handleSearch(search)}
                    >
                      {search}
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {/* Trending Searches */}
            {query === '' && (
              <div className="p-4 border-t border-gray-100">
                <h4 className="text-sm font-semibold text-gray-600 mb-3 flex items-center gap-2">
                  <FaTrendingUp size={12} />
                  Trending
                </h4>
                <div className="flex flex-wrap gap-2">
                  {trendingSearches.map((trend, index) => (
                    <motion.button
                      key={index}
                      className="px-3 py-1 bg-green-50 text-green-600 rounded-full text-sm hover:bg-green-100 transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleSearch(trend)}
                    >
                      {trend}
                    </motion.button>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SmartSearchBar;