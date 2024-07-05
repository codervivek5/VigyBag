import React, { useEffect, useState } from "react";
import Mug from "../../assets/coffee-mug.png";
import Container from "../../assets/Storage-basket-and-container.jpeg";
import DoorMat from "../../assets/Handwoven-Doormat.jpeg";
import TUMBLER from "../../assets/TUMBLER.png";
import { Link } from "react-router-dom";
import { MdHeight } from "react-icons/md";
import { FaMinus, FaMinusCircle, FaPlusCircle } from "react-icons/fa";
import UseCart from "../../hooks/UseCart";

// Define the CSS classes for the components
const cardClass = "p-4 bg-white rounded-lg shadow-md";
const textClass = "text-zinc-500";
const greenTextClass = "text-green-600";
const buttonClass = "text-zinc-500 hover:text-red-600";
const buttonBgClass =
  "bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition duration-300 ease-in-out";

const CartItem = ({
  product,
  onupdate,
}) => (
  <div
    className={`${cardClass} flex items-center justify-between mb-4`}
    style={{ border: "1px solid black" }}>
    <div className="flex items-center">
      <img
        src={product.image}
        alt={product.title}
        className="w-32 h-32 md:w-20 md:h-20 rounded-lg mr-4"
      />
      <div>
        <h3 className="text-lg font-semibold text-zinc-800">{product.title}</h3>
        <p className={textClass}>
          ₹{product.total.toFixed(2)}
        </p>
        <p className="flex gap-3 items-center">
          <span
            onClick={() => onupdate(product, -1)}
          >
            <FaMinusCircle />
          </span>
          <span>{product.quantity}</span>
          <span
            onClick={() => onupdate(product, 1)}
          >
            <FaPlusCircle />
          </span>
        </p>
      </div>
    </div>
    <script src="https://cdn.lordicon.com/lordicon.js"></script>
    <lord-icon
      src="https://cdn.lordicon.com/skkahier.json"
      trigger="hover"
      colors="primary:#ff0000"
      style={{ width: "30px", height: "30px", cursor: "pointer" }}
      onClick={() => onupdate(product, -1 * product.quantity)}
      onKeyUp={(e) => {
        if (e.key === "Enter") onupdate(product, -1 * product.quantity);
      }}
      tabIndex="0"></lord-icon>

  </div>
);

const Breadcrumbs = () => (
  <div className="text-sm text-zinc-500 mb-4 flex items-center ">
    <Link to="/dashboard" className="hover:underline">
      Dashboard
    </Link>
    <span>&gt;</span>
    <Link to="/cart" className="hover:underline">
      Cart
    </Link>
    <span>&gt;</span>
    <Link to="/myOrders" className="hover:underline">
      My Orders
    </Link>
    <span>&gt;</span>
    <Link to="/orderDetails" className="hover:underline">
      Order Details
    </Link>
  </div>
);

const Subtotal = ({ items }) => {
  const total = items.reduce(
    (acc, item) => acc + item.total, 0
  ).toFixed(2);

  return (
    <div
      className={`${cardClass} space-y-2`}
      style={{ border: "1px solid black" }}>
      <p className="text-lg font-semibold text-zinc-800">Order Summary</p>
      <ul className="list-disc list-inside text-zinc-700 space-y-1">
        {items.map((item, index) => (
          <li key={index}>
            {item.title} ₹{item.total}
          </li>
        ))}
      </ul>
      <p className="text-lg text-zinc-800">
        Shipping Charges: <span className={greenTextClass}>Free</span>
      </p>
      <p className="text-lg font-bold text-zinc-800">Total: ₹{total}</p>
    </div>
  );
};

const EmptyCart = () => {
  return (
    <p>Your cart is Empty!</p>
  )
}


const ProceedToCheckout = () => {
  return (
    <div className="mt-6">
      <div className="mt-4 flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
        <input
          type="text"
          placeholder="Enter coupon code"
          className="p-2 border border-gray-300 rounded-md w-full"
        />

        <button
          type="button"
          className={`${buttonBgClass} w-full sm:w-auto`}>
          Redeem
        </button>
      </div>
      <div className="mt-4 flex flex-col sm:flex-row justify-between space-y-4 sm:space-y-0 sm:space-x-8">
        <button
          type="button"
          className={`${buttonBgClass} w-full sm:w-auto`}
          style={{ minWidth: "425px" }}>
          Check Out
        </button>

      </div>
    </div>
  )
}

const LoginToContinue = () => {
  return (
    <div className="mt-5">
      <p className="text-lg font-bold">Seems like you are not logged in yet. Please login to proceed to Checkout.</p>
      <div className="mt-4 flex flex-col sm:flex-row justify-between space-y-4 sm:space-y-0 sm:space-x-8">
        <Link to="/login">
          <button
            type="button"
            className={`${buttonBgClass} w-full sm:w-auto`}
            style={{ minWidth: "425px" }}>
            Login now
          </button>
        </Link>
      </div>
    </div>
  )
}

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const { addToCart, clearCart, getCart } = UseCart();
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  const onupdate = (product, quantity) => {
    addToCart(product, quantity)
    setCartItems(getCart())
  }

  const onclear = () => {
    clearCart()
    setCartItems(getCart())
  }

  console.log(cartItems)
  useEffect(() => {
    setCartItems(getCart())
  }, [])

  return (
    <div className="w-full min-h-screen flex flex-col bg-[#fff0e3ff] py-10">
      <div className="container mx-auto p-4 w-full max-w-7xl">
        <div className="flex flex-col lg:flex-row lg:space-x-8">
          <div className="w-full lg:w-2/3">
            <Breadcrumbs />
            <h2 className="text-2xl font-bold mb-6 text-zinc-800">Your Cart</h2>
            {
              cartItems.length === 0 ? <EmptyCart /> :
                <>
                  <div className="space-y-6">
                    {cartItems.map((item) => (
                      <CartItem key={item.id} product={item} onupdate={onupdate} />
                    ))}
                  </div>
                  <div className="mt-6 flex flex-col sm:flex-row justify-between space-y-4 sm:space-y-0 sm:space-x-4">

                    <button
                      type="button"
                      className={`${buttonBgClass} w-full sm:w-auto`}
                      onClick={onclear}
                    >
                      Clear Cart
                    </button>

                  </div>
                </>
            }
          </div>
          <div className="w-full lg:w-1/3 mt-8 lg:mt-10">
            <h2 className="text-2xl font-bold mb-6 text-black">Subtotal</h2>
            <Subtotal items={cartItems} />
            {cartItems.length !== 0 && ( isLoggedIn ? <ProceedToCheckout /> : <LoginToContinue /> )}


          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
