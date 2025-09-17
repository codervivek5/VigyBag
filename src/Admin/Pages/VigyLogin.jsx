import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaEnvelope, FaLock, FaEye, FaEyeSlash } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { DotLoader } from 'react-spinners';
import axios from 'axios';

const VigyLogin = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (error) setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

         try {
       // Use local backend for development, change to production URL when deploying
       const apiUrl = process.env.NODE_ENV === 'production' 
         ? 'https://vigybag-backend.onrender.com/api/vigy/login'
         : 'http://localhost:5000/api/vigy/login';
       
       const response = await axios.post(apiUrl, formData);
      
      if (response.data.success) {
        // Store token or user data
        localStorage.setItem('vigyToken', response.data.token);
        localStorage.setItem('vigyUser', JSON.stringify(response.data.user));
        
        // Redirect to Vigy dashboard or appropriate page
        navigate('/vigy-dashboard');
      }
         } catch (error) {
       console.error('Login error:', error);
       
       // Better error handling for debugging
       if (error.response) {
         // Server responded with error status
         console.log('Error response:', error.response.data);
         setError(error.response.data.message || `Server error: ${error.response.status}`);
       } else if (error.request) {
         // Request was made but no response received
         console.log('No response received:', error.request);
         setError('No response from server. Please check if backend is running.');
       } else {
         // Something else happened
         console.log('Error setting up request:', error.message);
         setError('Network error. Please try again.');
       }
     } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = () => {
    const googleAuthUrl = process.env.NODE_ENV === 'production'
      ? 'https://vigybag-backend.onrender.com/auth/google'
      : 'http://localhost:5000/auth/google';
    window.location.href = googleAuthUrl;
  };

  return (
    <div className="min-h-screen bg-[#fff5edff] flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-[#2d3e40] mb-2">
            Welcome Back, Vigy!
          </h1>
          <p className="text-gray-600">
            Sign in to your Vigy account to continue
          </p>
        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
              {error}
            </div>
          )}

          {/* Email Field */}
          <div className="relative">
            <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              className="w-full rounded-lg bg-gray-50 text-gray-900 placeholder:text-gray-500 pl-10 pr-3 py-3 border border-gray-200 outline-none transition focus:border-[#4a7c59] focus:ring-2 focus:ring-[#4a7c59] focus:bg-white"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>

          {/* Password Field */}
          <div className="relative">
            <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              className="w-full rounded-lg bg-gray-50 text-gray-900 placeholder:text-gray-500 pl-10 pr-10 py-3 border border-gray-200 outline-none transition focus:border-[#4a7c59] focus:ring-2 focus:ring-[#4a7c59] focus:bg-white"
              value={formData.password}
              onChange={handleInputChange}
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>

          {/* Forgot Password & Remember Me */}
          <div className="flex items-center justify-between">
            <label className="flex items-center">
              <input
                type="checkbox"
                className="mr-2 h-4 w-4 rounded border-gray-300 text-[#4a7c59] focus:ring-[#4a7c59]"
              />
              <span className="text-sm text-gray-700">Remember me</span>
            </label>
            <Link
              to="/forgot-password"
              className="text-sm text-[#4a7c59] hover:underline"
            >
              Forgot password?
            </Link>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#4a7c59] text-white py-3 rounded-lg hover:bg-[#3d6b4a] transition duration-300 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? (
              <DotLoader color="#ffffff" size={20} />
            ) : (
              "Sign In"
            )}
          </button>
        </form>

        {/* Divider */}
        <div className="my-6 flex items-center">
          <div className="flex-1 border-t border-gray-200"></div>
          <span className="px-4 text-sm text-gray-500">or</span>
          <div className="flex-1 border-t border-gray-200"></div>
        </div>

        {/* Google Login */}
        <button
          onClick={handleGoogleLogin}
          className="w-full flex items-center justify-center bg-white text-gray-700 px-4 py-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition duration-300"
        >
          <FcGoogle className="mr-2 text-xl" />
          Continue with Google
        </button>

        {/* Footer Links */}
        <div className="mt-8 text-center space-y-2">
          <p className="text-sm text-gray-600">
            Don't have a Vigy account?{' '}
            <Link
              to="/vigy-form"
              className="text-[#4a7c59] hover:underline font-medium"
            >
              Register here
            </Link>
          </p>
          <p className="text-sm text-gray-600">
            Are you a regular user?{' '}
            <Link
              to="/auth"
              className="text-[#4a7c59] hover:underline font-medium"
            >
              Login here
            </Link>
          </p>
          
          {/* Dev test credentials removed */}
        </div>
      </div>
    </div>
  );
};

export default VigyLogin;
