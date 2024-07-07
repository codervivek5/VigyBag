import React from 'react';
import { Link } from "react-router-dom";
import Logo from "../../../assets/images/Logo.svg";

const Header = () => (
    <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row justify-between items-center">
            <div className="flex items-center space-x-4 mb-4 sm:mb-0">
                <img src={Logo} alt="Logo" className="h-[7vh]" />
                <nav className="hidden sm:block">
                    <ul className="flex space-x-10 text-gray-600">
                        <Link to="/">Home</Link>
                        <Link to="/contact">Contact Us</Link>
                        <Link to="/help">Help</Link>
                        <Link to="/analytics">Analytics</Link>
                    </ul>
                </nav>
            </div>
            <div className="flex items-center space-x-4">
                <span>Hello, Vivek</span>
                <button className="bg-indigo-600 text-white px-4 py-2 rounded">Logout</button>
            </div>
        </div>
    </header>
);

export default Header;