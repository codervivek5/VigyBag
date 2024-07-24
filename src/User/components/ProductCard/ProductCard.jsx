import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { manageCartItem } from "../../redux/cartSlice";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function ProductCard({ product, onClick, onAddToCart, isInCart }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/productDetails/${product.id}`);
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105 hover:cursor-pointer">
      <div className="mt-2 ml-44">
        <lord-icon
          style={{
            height: "30px",
            width: "30px",
          }}
          src="https://cdn.lordicon.com/ulnswmkk.json"
          trigger="morph"
          state="morph-heart"
          colors="primary:#e83a30"></lord-icon>
      </div>
      <img
        onClick={handleClick}
        src={product.image} // Assuming image is a string URL
        alt={product.title}
        className="w-full h-48 object-contain p-4 cursor-pointer"
      />
      <div className="p-4">
        <h3 className="font-bold text-sm h-12 overflow-hidden">
          {product.title}
        </h3>
        <p className="text-gray-600 text-lg font-semibold mt-2">
          ₹{product.price.toFixed(2)}
        </p>
        <div className="flex items-center mt-2">
          {[...Array(Math.round(product.rating.rate))].map((_, i) => (
            <span key={i} className="text-yellow-400">
              ⭐
            </span>
          ))}
          <span className="text-gray-500 ml-1">({product.rating.count})</span>
        </div>
        <button
          className="mt-4 bg-[#166635ff] text-white px-4 py-2 rounded text-sm w-full hover:bg-[#3d9970ff] transition-colors disabled:opacity-45 disabled:pointer-events-none"
          onClick={onAddToCart}
          disabled={isInCart}>
          {isInCart ? "Added to cart" : "Add to Cart"}
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
