import React from "react";

function Filters({ availableCategories, setCategoryFilter, setPriceFilter, setRatingFilter, backgroundColor }) {
  return (
    <div className="p-4 rounded-2xl shadow-md" style={{ backgroundColor }}>
      {/* Category Filter */}
      <div className="mb-4">
        <h3 className="font-semibold mb-2">Category</h3>
        <select
          className="w-full p-2 border rounded"
          onChange={(e) => setCategoryFilter(e.target.value)}
        >
          <option value="">All</option>
          {availableCategories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      {/* Price Filter */}
      <div className="mb-4">
        <h3 className="font-semibold mb-2">Price Range</h3>
        <select
          className="w-full p-2 border rounded"
          onChange={(e) => setPriceFilter(e.target.value)}
        >
          <option value="">All</option>
          <option value="0-100">₹0 - ₹100</option>
          <option value="100-300">₹100 - ₹300</option>
          <option value="300-500">₹300 - ₹500</option>
          <option value="500-1000">₹500 - ₹1000</option>
          <option value="1000-99999">Above ₹1000</option>
        </select>
      </div>

      {/* Rating Filter */}
      <div className="mb-4">
        <h3 className="font-semibold mb-2">Rating</h3>
        <select
          className="w-full p-2 border rounded"
          onChange={(e) => setRatingFilter(Number(e.target.value))}
        >
          <option value="0">All</option>
          <option value="3">3 ★ & above</option>
          <option value="4">4 ★ & above</option>
          <option value="5">5 ★ only</option>
        </select>
      </div>
    </div>
  );
}

export default Filters;
