import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import background from '../../assets/images/background.png';
import './typewriter.css';

function Home() {
  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        height: '100vh',
        position: 'relative',
      }}>
      <div className="container   mx-auto my-auto sm:py-24 leading-snug ">
        <div className="text-left">
            <div className="typewriter">
                <h1 className="text-4xl sm:text-6xl font-bold tracking-widest">
                Welcome to <span className="text-green-900">VigyBag!</span>
                </h1>
            </div>
          <h2 className="text-3xl sm:text-6xl  tracking-widest font-bold mt-5 mb-4">Your Eco-Friendly</h2>
          <h2 className="text-3xl sm:text-6xl font-bold mb-8 tracking-widest">Shopping Heaven</h2>
          <p className=" text-lg sm:text-3xl mb-8 leadinh-snug tracking-widest">
            At VigyBag, we curate the finest earth-friendly <br></br>
            essentials to help you reduce your environmental <br></br>
            footprint without compromising on quality or style.<br></br> 
            Shop smart, live green, and embrace a sustainable <br></br>
            future with VigyBag.
          </p>
          <button className="bg-green-900 tracking-widest text-white px-6 py-3 mt-10 rounded-md hover:bg-green-800 transition-colors duration-300">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
