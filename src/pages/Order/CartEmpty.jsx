import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import woman from "../../assets/woman.png";

const CartEmpty = () => {
  useEffect(() => {
    document.title = "VigyBag | E-Waste Recycling Policy";
  }, []);

  return (
    <div className="flex flex-col justify-center items-center pt-10">
      <p className="text-4xl text-green-800 font-extrabold underline">Cart</p>
      <img className="shadow-current pt-10 w-96" src={woman} alt="woman" />
      <br />
      <br />
      <div className="flex">
        <Link
          to="/dashboard"
          className="ml-4 text-green-800 hover:text-gray-600 flex items-center">
          <button
            type="button"
            className="text-lg text-white bg-[#3d784aff] px-12 py-3 rounded-2xl"
            style={{ fontSize: "19px" }}>
            Shop the Product
          </button>
        </Link>
        <Link
          to="/cart"
          className="ml-4 text-green-800 hover:text-gray-600 flex items-center">
          <button
            type="button"
            className="text-lg text-white bg-[#3d784aff] px-24 py-3 rounded-2xl"
            style={{ fontSize: "19px" }}>
            My Cart
          </button>
        </Link>
      </div>
      <br />
    </div>
  );
};

export default CartEmpty;
