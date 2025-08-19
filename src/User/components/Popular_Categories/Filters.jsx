import React from "react";

// Filters component to handle filtering of products
function Filters({
  setCategoryFilter,
  setPriceFilter,
  setRatingFilter,
  backgroundColor,
  availableCategories, // Accept the dynamically generated categories as a prop
}) {
  // Determine CSS classes based on background color input
  const filterClasses = backgroundColor.startsWith("#")
    ? ""
    : `bg-${backgroundColor}`;

  // Determine inline styles based on background color input
  const filterStyles = backgroundColor.startsWith("#")
    ? { backgroundColor }
    : {};

  // Define price ranges
  const priceRanges = [
    "0-100",
    "100-200",
    "200-300",
    "300-400",
    "400-500",
    "500-1000",
  ];

  return (
    <aside
      className={`lg:w-[20vw] p-6 shadow-md lg:h-auto w-[100vw] mt-[13vh] ${filterClasses}`}
      style={filterStyles} // Apply the determined inline styles
    >
      <h2 className="text-xl font-bold mb-4">Filters</h2>
      <div className="space-y-4">
        {/* Filter section for Category */}
        <FilterSection
          title="Category"
          options={availableCategories}
          onChange={(e) => setCategoryFilter(e.target.value)}
        />

        {/* Filter section for Price */}
        <FilterSection
          title="Price"
          options={priceRanges}
          onChange={(e) => setPriceFilter(e.target.value)}
        />

        {/* Filter section for Rating */}
        <FilterSection
          title="Rating"
          options={["1", "2", "3", "4", "5"]}
          onChange={(e) => {
            const value = parseInt(e.target.value, 10);
            setRatingFilter(Number.isNaN(value) ? 0.0 : value);
          }}
        />
      </div>
    </aside>
  );
}

// FilterSection component to render individual filter sections
function FilterSection({ title, options, onChange }) {
  return (
    <div>
      <h3 className="font-semibold mb-2">{title}</h3>
      <select onChange={onChange} className="w-full p-2 border rounded">
        <option value="">All</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {title === "Price" && option.includes("-")
              ? `₹${option.split("-")[0]} - ₹${option.split("-")[1]}`
              : option}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Filters;
