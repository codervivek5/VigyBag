import React from 'react';

const CategoryCard = ({ imageUrl, categoryName }) => {
  return (
    <div 
      className="relative w-60 h-64 mx-auto flex items-center justify-center"
      style={{
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: '241px 250px',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="bg-black bg-opacity-75 text-white px-6 py-2 rounded-lg" style={{ width: '300px', height: '66px' }}>
        <h3 className="text-lg  flex justify-center align-middle text-center font-semibold">{categoryName}</h3>
      </div>
    </div>
  );
};

export default CategoryCard;