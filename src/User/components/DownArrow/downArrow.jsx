import React from "react";
import "../../pages/Home/Home.css";
import Arrow from "../../../assets/arrow.png";
// Make sure to update the path to your actual image location

const DownArrow = () => {
  return (
    <div className="down-arrow flex justify-center items-center">
      <img
        className="w-12 mt-32 hover:cursor-pointer"
        src={Arrow}
        alt="Down Arrow"
        id="arrow"
      />
    </div>
  );
};

export default DownArrow;
