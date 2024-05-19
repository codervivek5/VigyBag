import React from 'react';
import img1 from "../Images/vigybag_icon-removebg-preview (1) 1.png"

const Home = () => {
  return (
    <div className="hero">
      <div className="left-sec">
        <div className="quote">
          {/* <div className="q1">
            <p>The Eco Shop</p>
          </div> */}
          <div className="q2">
            <h2>Welcome to  <span style={{ color: '#1b582c' }}>VigyBag!</span><br />
Your Eco-Friendly 
Shopping Haven </h2>
          </div>
          <div className="q3">
            <p>
            At VigyBag, we curate the finest earth-friendly essentials to help you reduce your environmental footprint without compromising on quality or style. Shop smart, live green, and embrace a sustainable future with VigyBag.
            </p>
          </div>
          <div className="Search-section">
            
            <button className="button-86" role="button">Shop Now</button>
          </div>
        </div>
      </div>
      <div className="right-sec">
        <div className="circle-sec"><img src={img1} alt="" /></div>
      </div>
    </div>
  );
};

export default Home;
