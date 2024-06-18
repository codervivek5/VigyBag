import React, { useState } from 'react';
import Mug from '../../assets/coffee-mug.png';
import Container from '../../assets/Storage-basket-and-container.jpeg';
import DoorMat from '../../assets/Handwoven-Doormat.jpeg';
import TUMBLER from '../../assets/TUMBLER.png';
import { Link } from 'react-router-dom';

// Define the CSS classes for the components
const cardClass = "p-4 bg-white dark:bg-neutral-700 rounded-lg shadow-md";
const textClass = "text-zinc-500 dark:text-zinc-400";
const greenTextClass = "text-green-600 dark:text-green-400";
const buttonClass = "text-zinc-500 dark:text-zinc-400 hover:text-red-600 dark:hover:text-red-400";
const buttonBgClass = "bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition duration-300 ease-in-out";

const CartItem = ({ name, seller, size, price, discount, quantity, image, onRemove }) => (
  <div className={`${cardClass} flex items-center justify-between mb-4`} style={{ border: '1px solid black' }}>
    <div className="flex items-center">
      <img src={image} alt={name} style={{ width: '8vw', height: '15vh', borderRadius: '20px', marginRight: '20px' }} />
      <div>
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className={textClass}>Sold by: {seller}</p>
        <p className={textClass}>Size: {size}</p>
        <p className={textClass}>₹{price} <span className="line-through">₹{discount}</span> (70% OFF)</p>
        <p className={greenTextClass}>Quantity: {quantity}</p>
      </div>
    </div>
    <button className={buttonClass} onClick={onRemove}>&times;</button>
  </div>
);

const Breadcrumbs = () => (
  <div className="text-sm text-zinc-500 mb-2 absolute" style={{ left: '8.5vw', top: '15vh' }}>
    <Link to="/dashboard" className="hover:underline">Dashboard</Link> &gt;
    <Link to="/cart" className='hover:underline'>Cart</Link> &gt;
    <Link to="/myOrders" className="hover:underline">My Orders</Link> &gt;
    <Link to="/orderDetails" className='hover:underline'>Order Details</Link>
  </div>
);

const Subtotal = ({ items }) => {
  const total = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className={`${cardClass} space-y-2`} style={{ border: '1px solid black' }}>
      <p className="text-lg font-semibold">Order Summary</p>
      <ul className="list-disc list-inside text-zinc-700 dark:text-zinc-300 space-y-1">
        {items.map((item, index) => (
          <li key={index}>{item.name} ₹{item.price * item.quantity}</li>
        ))}
      </ul>
      <p className="text-lg">Shipping Charges: <span className={greenTextClass}>Free</span></p>
      <p className="text-lg font-bold">Total: ₹{total}</p>
    </div>
  );
};

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Eco-friendly Coffee Mug", seller: "XYZ", size: "One Size", price: 75, discount: 249, quantity: 4, image: Mug },
    { id: 2, name: "Handwoven Doormat", seller: "XYZ", size: "One Size", price: 275, discount: 299, quantity: 1, image: DoorMat },
    { id: 3, name: "Bamboo Insulated Tumbler", seller: "XYZ", size: "One Size", price: 175, discount: 299, quantity: 2, image: TUMBLER },
    { id: 4, name: "Storage basket and container", seller: "XYZ", size: "One Size", price: 175, discount: 299, quantity: 1, image: Container },
  ]);
  
  const [showCouponInput, setShowCouponInput] = useState(false);

  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const toggleCouponInput = () => {
    setShowCouponInput(!showCouponInput);
  };

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center bg-[#fff0e3ff] py-10 mt-1">
      <Breadcrumbs />
      <div className="container mx-auto p-4 w-full md:max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="w-full md:w-2/3 p-4">
            <h2 className="text-2xl font-bold mb-6">Your Cart</h2>
            <div className="space-y-6">
              {cartItems.map(item => (
                <CartItem
                  key={item.id}
                  {...item}
                  onRemove={() => removeItem(item.id)}
                />
              ))}
            </div>
          </div>
          <div className="w-full md:w-1/3 p-4 mt-8 md:mt-0">
            <h2 className="text-2xl font-bold mb-6">Subtotal</h2>
            <Subtotal items={cartItems} />
            <div className="mt-6">
              <div className="flex justify-between">
                <button className={buttonBgClass} onClick={toggleCouponInput}>Redeem</button>
                <button className={buttonBgClass}>Check Out</button>
              </div>
              {showCouponInput && (
                <div className="mt-4">
                  <input
                    type="text"
                    placeholder="Enter coupon code"
                    className="p-2 border border-gray-300 rounded-md w-full"
                  />
                  <button className={buttonBgClass + " mt-2 w-full"}>Apply Coupon</button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
