import React from "react";
import "../../pages/Home/Home.css";
import Arrow from "../../assets/arrow.png"; // Make sure to update the path to your actual image location

const DownArrow = () => {
  const scrollToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  };

  return (
    <div className="down-arrow flex justify-center items-center">
      <img
        className="w-12 hover:cursor-pointer"
        src={Arrow}
        alt="Down Arrow"
        id="arrow"
        onClick={scrollToBottom}
      />
    </div>
  );
};

export default DownArrow;
