import React, { useState } from 'react';
import Aside from '../../components/Aside/Aside'; // Adjust the path as necessary
import SearchBar from "../../components/Dashboard/SearchBar"; // If you want a search bar
import Header from "../../components/Dashboard/Header"; // If you have a header component

const ProfilePage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form data:', formData);
  };

  return (
    <div className="flex min-h-screen bg-[#fff1e6]">
      {/* Sidebar */}
      <Aside />

      {/* Main Content */}
      <main className="flex-1 p-6 mt-20">
        {/* Header */}
        <Header />

        {/* Search Bar */}
        <SearchBar />

        <h1 className="text-2xl font-bold mb-6 text-zinc-800">Profile</h1>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg">
          <div className="mb-5">
            <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="block w-full border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 sm:text-sm p-3"
            />
          </div>
          <div className="mb-5">
            <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="block w-full border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 sm:text-sm p-3"
            />
          </div>
          <div className="mb-5">
            <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className="block w-full border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 sm:text-sm p-3"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300 ease-in-out"
          >
            Save Changes
          </button>
        </form>
      </main>
    </div>
  );
};

export default ProfilePage;
