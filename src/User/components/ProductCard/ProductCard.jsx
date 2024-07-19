import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { manageCartItem } from "../../redux/cartSlice";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { FaStar } from "react-icons/fa";

const dispatch = useDispatch();
// const onAddToCart = (product) => {
//   const quantity = 1;
//   dispatch(manageCartItem({ product, quantity }));
//   toast.success(`${product.title} successfully added to cart!`);
// };

const ProductCard = ({ image, title, price, rating, product }) => {
  const navigate = useNavigate();

  const cartItems = useSelector((state) => state.cart.items);
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <img
        src={image}
        alt={title}
        className="w-full h-40 object-cover rounded-t-lg"
      />
      <div className="mt-2 ">
        <h3 className="text-lg font-semibold text-[#171616]">{title}</h3>

        <div
          className="flex items-center mt-3"
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "row",
          }}>
          <p className="text-[#1b1a1a]">₹{price}</p>
          {[...Array(rating)].map((_, i) => (
            <FaStar
              style={{ position: "relative", left: "8vw" }}
              key={i}
              className="text-yellow-500"
            />
          ))}
        </div>

        <button
          className="flex justify-center items-center gap-3 mt-4 bg-[#166635ff] text-white px-4 py-2 rounded text-sm w-full hover:bg-[#3d9970ff] transition-colors disabled:opacity-45 disabled:pointer-events-none"
          disabled={cartItems.find((item) => item.id === product.id)}>
          <lord-icon
            style={{
              height: "25px",
              width: "25px",
            }}
            src="https://cdn.lordicon.com/mqdkoaef.json"
            trigger="hover"
            colors="primary:#ffffff"></lord-icon>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
