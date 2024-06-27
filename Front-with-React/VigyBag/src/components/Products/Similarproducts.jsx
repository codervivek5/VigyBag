import React, { useState } from 'react';
import comb from '../../assets/comb.jpg'; // Use the same image for simplicity

const Similarproducts = () => {
  const [visibleProducts, setVisibleProducts] = useState(6); // Initial number of visible products

  // Function to handle "See More" button click
  const handleSeeMore = () => {
    setVisibleProducts((prevCount) => prevCount + 6); // Increase by 6 more products
  };

  // Function to handle "View Less" button click
  const handleViewLess = () => {
    setVisibleProducts(6); // Reset back to initial 6 products
  };

  return (
    <div className="mt-8">
      <h3 className="text-lg font-semibold mb-4">Similar Products</h3>
      <div className="flex flex-wrap -mx-2">
        {/* Render similar product cards based on visibleProducts state */}
        {[...Array(visibleProducts)].map((_, index) => (
          <SimilarProductCard key={index} />
        ))}
      </div>
      {/* Buttons container */}
      <div className="flex justify-center mt-4">
        {visibleProducts < 18 ? ( // Show "See More" button if less than 18 products displayed
          <button
            onClick={handleSeeMore}
            className="px-4 py-2 bg-[#15a349ff] text-white rounded-lg mr-4 hover:bg-zinc-700 focus:outline-none"
          >
            See More
          </button>
        ) : (
          // Show "View Less" button if more than initial 6 products displayed
          <button
            onClick={handleViewLess}
            className="px-4 py-2 bg-[red] text-white rounded-lg mr-4 hover:bg-zinc-700 focus:outline-none"
          >
            View Less
          </button>
        )}
      </div>
    </div>
  );
};

const SimilarProductCard = () => (
  <div className="md:w-1/6 px-2 mb-4">
    <div className="bg-white dark:bg-zinc-900 p-4 rounded-lg shadow-md">
      <img src={comb} alt="Similar Product" className="h-40 object-cover rounded-lg mb-2" />
      <h4 className="text-md font-semibold mb-1">Bamboo Comb</h4>
      <p className="text-zinc-600 dark:text-zinc-300 text-sm mb-1">₹175 <span className="line-through text-zinc-500">₹249</span></p>
      <p className="text-green-600 text-sm">30% OFF</p>
    </div>
  </div>
);

export default Similarproducts;
