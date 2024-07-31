import React from 'react';
import { RotatingLines } from 'react-loader-spinner'; // Import the spinner component
import './Loader.css'; // Import CSS file for styling (create this if needed)

const Loader = ({ visible }) => {
  return (
    <div className={`loader-overlay ${visible ? 'visible' : 'hidden'}`}>
      <RotatingLines
        visible={visible}
        height="96"
        width="96"
        color="grey"
        strokeWidth="5"
        animationDuration="0.75"
        ariaLabel="rotating-lines-loading"
      />
    </div>
  );
};

export default Loader;
