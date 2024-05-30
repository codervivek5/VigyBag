import React from 'react';
import Navbar from "../components/Navbar/Navbar";
import background from "../assets/images/background.png";

function LandingPage() {
    return (
        <div style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover', height: '100vh', position: 'relative' }}>
            <Navbar />
            <h1>Welcome to Vigy Bag</h1>
            <h1>Your Eco-Friendly</h1>
            <h1>Shopping Heaven</h1>

        </div>
    );
}

export default LandingPage;