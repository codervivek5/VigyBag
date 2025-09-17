import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUser, FaSignOutAlt, FaBox, FaChartLine, FaCog } from 'react-icons/fa';

const VigyDashboard = () => {
  const [vigyUser, setVigyUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is logged in
    const token = localStorage.getItem('vigyToken');
    const user = localStorage.getItem('vigyUser');
    
    if (!token || !user) {
      navigate('/vigy-login');
      return;
    }

    try {
      setVigyUser(JSON.parse(user));
    } catch (error) {
      console.error('Error parsing user data:', error);
      navigate('/vigy-login');
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('vigyToken');
    localStorage.removeItem('vigyUser');
    navigate('/vigy-login');
  };

  if (!vigyUser) {
    return (
      <div className="min-h-screen bg-[#fff5edff] flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#4a7c59] mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#fff5edff]">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-[#2d3e40]">Vigy Dashboard</h1>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <FaUser className="text-[#4a7c59]" />
                <span className="text-gray-700">{vigyUser.fullname || vigyUser.email}</span>
              </div>
              <button
                onClick={handleLogout}
                className="flex items-center space-x-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition duration-300"
              >
                <FaSignOutAlt />
                <span>Logout</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h2 className="text-xl font-semibold text-[#2d3e40] mb-2">
            Welcome back, {vigyUser.fullname || 'Vigy User'}!
          </h2>
          <p className="text-gray-600">
            Manage your products, track sales, and grow your business with VigyBag.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center">
              <div className="p-3 bg-blue-100 rounded-full">
                <FaBox className="text-blue-600 text-xl" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Total Products</p>
                <p className="text-2xl font-semibold text-gray-900">24</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center">
              <div className="p-3 bg-green-100 rounded-full">
                <FaChartLine className="text-green-600 text-xl" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Total Sales</p>
                <p className="text-2xl font-semibold text-gray-900">₹12,450</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center">
              <div className="p-3 bg-yellow-100 rounded-full">
                <FaChartLine className="text-yellow-600 text-xl" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Orders</p>
                <p className="text-2xl font-semibold text-gray-900">18</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center">
              <div className="p-3 bg-purple-100 rounded-full">
                <FaCog className="text-purple-600 text-xl" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Status</p>
                <p className="text-2xl font-semibold text-green-600">Active</p>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-semibold text-[#2d3e40] mb-4">Quick Actions</h3>
            <div className="space-y-3">
              <button className="w-full text-left p-3 rounded-lg border border-gray-200 hover:border-[#4a7c59] hover:bg-[#4a7c59] hover:text-white transition duration-300">
                Add New Product
              </button>
              <button className="w-full text-left p-3 rounded-lg border border-gray-200 hover:border-[#4a7c59] hover:bg-[#4a7c59] hover:text-white transition duration-300">
                View Orders
              </button>
              <button className="w-full text-left p-3 rounded-lg border border-gray-200 hover:border-[#4a7c59] hover:bg-[#4a7c59] hover:text-white transition duration-300">
                Update Profile
              </button>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-semibold text-[#2d3e40] mb-4">Recent Activity</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 p-2 rounded-lg bg-gray-50">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm text-gray-600">New order received</span>
                <span className="text-xs text-gray-400 ml-auto">2 min ago</span>
              </div>
              <div className="flex items-center space-x-3 p-2 rounded-lg bg-gray-50">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-sm text-gray-600">Product updated</span>
                <span className="text-xs text-gray-400 ml-auto">1 hour ago</span>
              </div>
              <div className="flex items-center space-x-3 p-2 rounded-lg bg-gray-50">
                <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                <span className="text-sm text-gray-600">Payment received</span>
                <span className="text-xs text-gray-400 ml-auto">3 hours ago</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default VigyDashboard;
