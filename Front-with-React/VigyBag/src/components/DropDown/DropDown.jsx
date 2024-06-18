// DropDown.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import { GoTriangleDown } from "react-icons/go";

const DropDown = () => {
  return (
    <div className="inline-block relative group">
      <NavLink to="/categories" className="mx-2 text-xl text-black flex items-center">
        Categories
        <GoTriangleDown />
      </NavLink>
      <div className="absolute hidden group-hover:block bg-white shadow-lg">
        <ul className="py-1">
          {['Fashion', 'Gifts', 'Furniture', 'Stationary', 'Body Care'].map((category) => (
            <li key={category}>
              <NavLink to={`/categories/${category.toLowerCase()}`} className="block font-baloo px-4 py-2 text-black hover:bg-gray-200">
                {category}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DropDown;