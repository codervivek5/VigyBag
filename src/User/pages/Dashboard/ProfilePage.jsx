import React, { useState } from 'react';
import Aside from '../../components/Aside/Aside';

const ProfilePage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    password: '',
    profilePicture: null, // Add a state to store the profile picture
  });

  const [couponVisibility, setCouponVisibility] = useState([false, false]); // State for coupon visibility

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      profilePicture: e.target.files[0],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission and file upload here
    console.log('Form data:', formData);
  };

  const toggleCouponVisibility = (index) => {
    setCouponVisibility((prevVisibility) =>
      prevVisibility.map((visible, i) => (i === index ? !visible : visible))
    );
  };

  return (
    <div className="flex min-h-screen bg-[#fff1e6]">
      {/* Sidebar */}
      <Aside />

      {/* Main Content */}
      <main className="flex-1 p-6 mt-20 flex flex-col md:flex-row md:justify-between">
        {/* Left Section */}
        <div className="flex-1 mr-6">
          <h1 className="text-2xl font-bold mb-6 text-zinc-800">Profile :</h1>
          <div className="flex flex-col md:flex-row items-center mb-8">
            <div className="relative w-32 h-32 mb-4 md:mb-0 md:mr-4">
              <img
                src={formData.profilePicture ? URL.createObjectURL(formData.profilePicture) : 'https://via.placeholder.com/150'}
                alt="Profile"
                className="w-full h-full rounded-full object-cover border-black border"
              />
            </div>
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
              <button className=" text-black border-black border px-4 py-2 rounded-md hover:bg-green-700 transition duration-300 ease-in-out">
                Edit
              </button>
              <label htmlFor="fileUpload" className="text-black border-black border px-4 py-2 rounded-md hover:bg-green-700 transition duration-300 ease-in-out cursor-pointer">
                Upload
              </label>
              <input
                type="file"
                id="fileUpload"
                className="hidden"
                onChange={handleFileChange}
              />
              <button className="bg-yellow-500 text-white border-black border px-4 py-2 rounded-md hover:bg-yellow-500 transition duration-300 ease-in-out">
                Save
              </button>
            </div>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="mb-5">
              <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
              <div className="flex items-center">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className="block w-full border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 sm:text-sm p-3"
                  style={{ backgroundColor: '#e0f7e0', borderColor: '#c4e4c4' }}
                />
                <button className="ml-2 text-black border-black border px-4 py-2 rounded-md hover:bg-green-700 transition duration-300 ease-in-out">
                  Edit
                </button>
              </div>
            </div>
            <div className="mb-5">
              <label className="block text-sm font-medium text-gray-700 mb-2">Mobile Number</label>
              <div className="flex items-center">
                <input
                  type="tel"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  placeholder="Enter your mobile number"
                  className="block w-full border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 sm:text-sm p-3"
                  style={{ backgroundColor: '#e0f7e0', borderColor: '#c4e4c4' }}
                />
                <button className="ml-2 text-black border-black border px-4 py-2 rounded-md hover:bg-green-700 transition duration-300 ease-in-out">
                  Edit
                </button>
              </div>
            </div>
            <div className="mb-5">
              <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <div className="flex items-center">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="block w-full border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 sm:text-sm p-3"
                  style={{ backgroundColor: '#e0f7e0', borderColor: '#c4e4c4' }}
                />
                <button className="ml-2 text-black border-black border px-4 py-2 rounded-md hover:bg-green-700 transition duration-300 ease-in-out">
                  Edit
                </button>
              </div>
            </div>
            <div className="flex flex-col md:flex-row justify-between space-y-4 md:space-y-0">
              <button className="bg-blue-200 text-black border-black border px-4 py-2 rounded-md hover:bg-blue-300 transition duration-300 ease-in-out">
                Change/Update Password
              </button>
              <button className="bg-yellow-500 text-white border-black border px-4 py-2 rounded-md hover:bg-yellow-500 transition duration-300 ease-in-out ml-4">
                Save
              </button>
            </div>
          </form>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/3 mt-6 md:mt-0 flex-shrink-0">
          <div className="mb-6">
            <h2 className="text-xl font-bold text-zinc-800">Coins : 100 🪙</h2>
          </div>
          <div className="p-4 bg-yellow-100 shadow-lg rounded-md">
            <h2 className="text-xl font-bold text-zinc-800">My Coupons :</h2>
            {Array.from({ length: 2 }).map((_, index) => (
              <div key={index} className="flex items-center mb-4">
                <input
                  type="text"
                  readOnly
                  value={couponVisibility[index] ? 'ABC123' : '*****'}
                  className="block w-48 border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 sm:text-sm p-2 mr-4"
                  style={{ backgroundColor: '#e0f7e0', borderColor: '#c4e4c4', fontSize: '14px' }}
                />
                <button
                  onClick={() => toggleCouponVisibility(index)}
                  className="bg-pink-300 text-blue border-black border px-3 py-1 rounded-md hover:bg-pink-300 transition duration-300 ease-in-out"
                >
                  {couponVisibility[index] ? 'Hide Coupon' : 'Show Coupon'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProfilePage;
