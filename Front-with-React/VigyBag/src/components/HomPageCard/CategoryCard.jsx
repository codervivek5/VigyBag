import React from 'react';

const CategoryCard = ({ image, name }) => {
  return (
    <div 
      className="relative w-full aspect-square rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
    >
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${image})`,
        }}
      />
      <div className="absolute inset-0 bg-black bg-opacity-40 hover:bg-opacity-30 transition-opacity duration-300" />
      <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-75 text-white p-2 sm:p-3">
        <h3 className="text-sm sm:text-base md:text-lg font-semibold text-center truncate">{name}</h3>
      </div>
    </div>
  );
};

export default CategoryCard;