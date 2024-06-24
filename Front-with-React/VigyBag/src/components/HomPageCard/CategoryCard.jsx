import React from 'react';

const CategoryCard = ({ image, name }) => {
  return (
    <div 
      className="relative w-60 h-64 mx-auto flex items-center justify-center"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-75 text-white px-4 py-2 rounded-b-lg">
        <h3 className="text-lg font-semibold text-center">{name}</h3>
      </div>
    </div>
  );
};

export default CategoryCard;
