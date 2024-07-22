import React from "react";

function Filters({
  setCategoryFilter,
  setPriceFilter,
  setRatingFilter,
  backgroundColor,
}) {
  const filterClasses = backgroundColor.startsWith("#")
    ? ""
    : `bg-${backgroundColor}`;
  const filterStyles = backgroundColor.startsWith("#")
    ? { backgroundColor }
    : {};

  return (
    <aside
      className={`lg:w-[20vw] p-6 shadow-md  lg:z-50 lg:h-[65vh] w-[100vw] mt-16 fixed ${filterClasses}`}
      style={{ filterStyles }}>
      <h2 className="text-xl font-bold mb-4">Filters</h2>
      <div className="space-y-4">
        <FilterSection
          title="Category"
          options={[
            "electronics",
            "jewelery",
            "men's clothing",
            "women's clothing",
          ]}
          onChange={(e) => setCategoryFilter(e.target.value)}
        />
        <FilterSection
          title="Price"
          options={["50", "100", "200", "500"]}
          onChange={(e) => setPriceFilter(e.target.value)}
        />
        <FilterSection
          title="Rating"
          options={["1", "2", "3", "4"]}
          onChange={(e) => setRatingFilter(parseInt(e.target.value))}
        />
      </div>
    </aside>
  );
}

function FilterSection({ title, options, onChange }) {
  return (
    <div>
      <h3 className="font-semibold mb-2">{title}</h3>
      <select onChange={onChange} className="w-full p-2 border rounded">
        <option value="">All</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {title === "Price" ? `Under $${option}` : option}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Filters;
