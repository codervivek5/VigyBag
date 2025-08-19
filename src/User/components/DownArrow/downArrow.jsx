import React from "react";
import Arrow from "../../../assets/arrow.png";

const DownArrow = () => {
  const handleScroll = () => {
    const section = document.getElementById("popular-categories");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
      <img
        className="w-12 hover:cursor-pointer animate-bounce"
        src={Arrow}
        alt="Down Arrow"
        onClick={handleScroll}
      />
    </div>
  );
};

export default DownArrow;
