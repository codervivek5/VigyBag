import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import background from '../../assets/images/background.png';

function Home() {
  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        height: '100vh',
        position: 'relative',
      }}>
      <h1>Welcome to Vigy Bag</h1>
      <h1>Your Eco-Friendly</h1>
      <h1>Shopping Heaven</h1>
    </div>
  );
}

export default Home;
