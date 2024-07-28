import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { manageCartItem } from "../../redux/cartSlice";
import { manageWishlistItem } from "../../redux/wishlist";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { FaHeart, FaRegHeart } from "react-icons/fa";

function ProductGrid({ products, headingText }) {

  function getRandomDiscountPercent(price) {
    return (price % 40) + 10;
  }

  function getNewPrice(discountPercent, actualPrice) {
    return ((100 - discountPercent) * actualPrice / 100).toFixed(2)
  }

  return (
    <div className="w-full lg:w-3/4 lg:ml-auto -ml-4 md:mt-28 mt-8 mb-9 mr-5">
      <h1 className="mb-10 font-bold ml-10" style={{ fontSize: "23px" }}>
        {headingText}
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:grid-cols-4 gap-6 ml-10">
        {products.map((product) => {
          const discountPercent = getRandomDiscountPercent(product.price);
          product.discountPercent = discountPercent
          product.newPrice = getNewPrice(discountPercent, product.price)
          return <ProductCard key={product.id} product={product} />
        })}
      </div>
    </div>
  );
}

function ProductCard({ product }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const wishlistItems = useSelector((state) => state.wishlist.items);

  const handleClick = () => {
    navigate("/productDetails");
  };

  const onAddToCart = (product) => {
    const quantity = 1;
    dispatch(manageCartItem({ product, quantity }));
    toast.success(`successfully added to cart!`);
  };

  const onAddToWhishlist = (product) => {
    const quantity = 1;
    dispatch(manageWishlistItem({ product, quantity }));
  };


  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105 hover:cursor-pointer relative w-full max-w-sm">
      {/* wishlist heart */}
      {
        wishlistItems.find((item) => item.id === product.id) ? (
          <button
            className="mt-2 md:ml-48 ml-80 text-red-600 absolute top-0 right-2 p-2 bg-red-100 rounded-full hover:bg-red-200 transition "
            onClick={() => {
              onAddToWhishlist(product);
              toast.success(`Item removed from wishlist!`);
            }}
          >
            <FaHeart size={18} />
          </button>
        ) :
          (
            <button
              className="mt-2 md:ml-48 ml-80 text-red-600 absolute top-0 right-2 p-2 bg-red-100 rounded-full hover:bg-red-200 transition "
              onClick={() => {
                onAddToWhishlist(product);
                toast.success(`Item added to wishlist!`)
              }}
            >
              <FaRegHeart size={18} />
            </button>
          )
      }
      {/* product imagee */}
      <img
        onClick={handleClick}
        src={product.image}
        alt={product.title}
        className="w-full h-60 object-contain"
      />
      {/* product details */}
      <div className="p-4">
        {/* title */}
        <h3 className="font-bold text-sm h-12 overflow-hidden">
          {product.title}
        </h3>
        {/* price */}
        <p className="text-gray-600 text-lg font-semibold mt-2 flex items-center gap-2">
          ₹{product.newPrice}
          <span className="text-sm text-green-500 line-through">
            ₹{product.price.toFixed(2)}
          </span>
        </p>
        {/* rating */}
        <div className="flex items-center mt-2">
          {[...Array(Math.round(product.rating.rate))].map((_, i) => (
            <span key={i} className="text-yellow-400">
              ⭐
            </span>
          ))}
          <span className="text-gray-500 ml-1">({product.rating.count})</span>
        </div>
        {/* add to cart button */}
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
