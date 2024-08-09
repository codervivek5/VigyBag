import React from "react";
import { FaSearch } from "react-icons/fa";
import { MdHeight } from "react-icons/md";

function Header() {
  return (
    <header className="relative min-h-[70vh] md:min-h-[80vh] flex flex-col md:flex-row items-center justify-center bg-black text-white overflow-hidden">
      {/* Background Section */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1506748686214e9df14f8d31e8f2-2bb7a6b5dce3?fit=crop&w=1500&h=1000"
          alt="Background"
          className="w-full h-full object-cover brightness-50"
        />
      </div>
      
      {/* Content Section */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center text-center md:text-left px-4 md:px-8 py-8 md:py-16">
        <div className="flex items-center justify-center mb-6 md:mb-0">
          <lord-icon
            style={{ height: "120px", width: "120px" }}
            src="https://cdn.lordicon.com/lgmqrevt.json"
            trigger="morph"
            stroke="bold"
            state="morph-open"
          ></lord-icon>
        </div>

        <div className="max-w-md md:max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 text-yellow-300 leading-tight">
            Gift Card Store
          </h1>
          <p className="text-xl md:text-3xl font-semibold text-green-300 ml-[5vw]">
            Give Your Gift For Choice
          </p>
        </div>

        <div className="flex items-center justify-center mt-6 md:mt-0">
          <lord-icon
            style={{ height: "120px", width: "120px" }}
            src="https://cdn.lordicon.com/lgmqrevt.json"
            trigger="morph"
            stroke="bold"
            state="morph-open"
          ></lord-icon>
        </div>
      </div>
    </header>
  );
}

export default Header;
