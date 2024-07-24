import React, { useState } from "react";
import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { manageCartItem } from "../../redux/cartSlice";
import { manageWishlistItem } from "../../redux/wishlist";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import ProductCard from "./../ProductCard/ProductCard";

function ProductGrid({ products, headingText }) {

  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const navigate = useNavigate();

  return (
    <div className="w-full lg:w-3/4 lg:ml-auto -ml-4 md:mt-28 mt-8 mb-9">
      <h1 className="mb-10 font-bold ml-10" style={{ fontSize: "23px" }}>
        {headingText}
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 ml-10">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

function ProductCard({ product }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const wishlistItems = useSelector((state) => state.wishlist.items);
  const [isHeartFilled, setIsHeartFilled] = useState(true);
  const [lastClickTime, setLastClickTime] = useState(0);

  const handleClick = (productId) => {
    navigate(`/productDetails/${productId}`);
  };

  const onAddToCart = (product) => {
    const quantity = 1;
    dispatch(manageCartItem({ product, quantity }));
    toast.success(`successfully added to cart!`);
  };

  const onAddToWhishlist = (product) => {
    const quantity = 1;
    dispatch(manageWishlistItem({ product, quantity }));
    toast.success(`added to wishlist!`);
  };

  const handleHeartClick = () => {
    const currentTime = new Date().getTime();
    if (currentTime - lastClickTime < 300) {
      // Double click
      setIsHeartFilled(false); // Unfill on double click
    } else {
      // Single click
      setIsHeartFilled(!isHeartFilled); // Toggle fill state on single click
    }
    setLastClickTime(currentTime);
  };

  return (

    <div className="w-full lg:w-3/4 lg:ml-auto -ml-4 md:mt-28 mt-8 mb-9">
      <h1 className="mb-10 font-bold ml-10" style={{ fontSize: "23px" }}>
        {headingText}
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 ml-10">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onClick={() => handleClick(product.id)}
            onAddToCart={() => onAddToCart(product)}
            isInCart={!!cartItems.find((item) => item.id === product.id)}
          />
        ))}

    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105 hover:cursor-pointer">
      <div className="mt-2 md:ml-48 ml-80">
        <lord-icon
          onClick={() => {
            onAddToWhishlist(product);
            handleHeartClick;
          }}
          disabled={wishlistItems.find((item) => item.id === product.id)}
          style={{
            height: "30px",
            width: "30px",
          }}
          src="https://cdn.lordicon.com/ulnswmkk.json"
          trigger="click"
          state={isHeartFilled ? "morph-heart" : "morph-heart-empty"}
          colors="primary:#e83a30"></lord-icon>
      </div>
      <img
        onClick={handleClick}
        src={product.image}
        alt={product.title}
        className="w-full h-48 object-contain p-4"
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
          onClick={() => {
            onAddToCart(product);
          }}
          disabled={cartItems.find((item) => item.id === product.id)}>
          {cartItems.find((item) => item.id === product.id)
            ? "Added to cart"
            : "Add to Cart"}
        </button>

      </div>
    </div>
  );
}

export default ProductGrid;
