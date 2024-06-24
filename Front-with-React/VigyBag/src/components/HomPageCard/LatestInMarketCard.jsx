import React from 'react';

function LatestInMarketCard({ product }) {
  const { name, description, discount, img } = product;

  return (
    <div className="border bg-gray-700 rounded-lg overflow-hidden shadow-lg p-4">
      <img src={img} alt={name} className="w-full h-32 sm:h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-xl text-white font-bold mb-2">{name}</h2>
        <p className="text-white mb-4">{description}</p>
        <button className="bg-green-900 text-white font-bold py-2 px-4 rounded">
          {discount}
        </button>
      </div>
    </div>
  );
}

export default LatestInMarketCard;