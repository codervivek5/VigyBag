// CartIcon.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const CartIcon = () => (
  <Link to="/cart" className="ml-4 text-green-800 hover:text-gray-600">
    <lord-icon
      style={{
        width: "40px",
        height: "40px",
        paddingTop: "2px",
        paddingLeft: "1px",
      }}
      src="https://cdn.lordicon.com/pbrgppbb.json"
      trigger="hover"
      colors="primary:#15803D"
    ></lord-icon>
  </Link>
);

export default CartIcon;