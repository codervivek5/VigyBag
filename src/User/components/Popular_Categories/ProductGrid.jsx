import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { manageCartItem } from "../../redux/cartSlice";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import ProductCard from "./../ProductCard/ProductCard";

function ProductGrid({ products, headingText }) {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const navigate = useNavigate();

  const handleClick = (productId) => {
    navigate(`/productDetails/${productId}`);
  };

  const onAddToCart = (product) => {
    const quantity = 1;
    dispatch(manageCartItem({ product, quantity }));
    toast.success(`${product.title} successfully added to cart!`);
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
      </div>
    </div>
  );
}

export default ProductGrid;
