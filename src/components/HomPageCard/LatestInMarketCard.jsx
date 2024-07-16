import React from 'react';
import { Link } from 'react-router-dom';

function LatestInMarketCard({ product }) {
  const { name, description, discount, img, path } = product;

  return (
    <Link to={path} className="block">
      <div className="bg-gray-700 rounded-lg overflow-hidden shadow-lg flex flex-col h-full transition-transform hover:scale-105 cursor-pointer">
        <div className="relative pb-[60%]">
          <img src={img} alt={name} className="absolute inset-0 w-full h-full object-cover" />
        </div>
        <div className="p-2 sm:p-3 flex flex-col flex-grow">
          <h2 className="text-sm sm:text-base text-white font-bold mb-1 line-clamp-1">{name}</h2>
          <p className="text-xs sm:text-sm text-gray-300 mb-2 flex-grow line-clamp-2">{description}</p>
          <button type="button" className="bg-green-900 text-white text-xs sm:text-sm font-bold py-1 px-2 rounded self-start">
            {discount}
          </button>
        </div>
      </div>
    </Link>
  );
}

export default LatestInMarketCard;