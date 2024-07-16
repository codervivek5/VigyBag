import React from "react";
import app from "../../../assets/app.png";

function Header() {
  return (
    <>
      <header className="relative h-96 md:h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://www.globalteckz.com/wp-content/uploads/2017/04/ecommerce-final.png"
            alt="Background"
            className="w-full h-full object-cover filter blur-sm"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-2 md:mb-4">
            About VigyBag
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Revolutionizing eco-friendly shopping with innovative technology and
            sustainable practices.
          </p>
        </div>
      </header>
    </>
  );
}

export default Header;
