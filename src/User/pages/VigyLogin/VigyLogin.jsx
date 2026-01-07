import React, { useState } from "react";
import { FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import { DotLoader } from "react-spinners";
import { SlLogin } from "react-icons/sl";

const VigyLogin = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Login state
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [showLoginPassword, setShowLoginPassword] = useState(false);

  const handleLoginSuccess = (data) => {
    const { accessToken, username, role } = data;

    // Save user data to localStorage
    localStorage.setItem("accessToken", accessToken);
    localStorage.setItem("username", username);
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("userType", "vigy"); // Mark as Vigy user
    if (role !== undefined) {
      localStorage.setItem("role", role);
    }

    Swal.fire({
      title: "Login Successful!",
      text: `Welcome, ${username}! Thanks for choosing VigyBag!`,
      icon: "success",
      timer: 2000,
      showConfirmButton: false,
    }).then(() => {
      navigate("/dashboard"); // Redirect to dashboard
      window.location.reload(); // Reload to update Navbar
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Use the Environment variable if it exists (Live), otherwise use localhost (Local)
    const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:5000";

    try {
      const response = await axios.post(`${apiUrl}/auth/vigy-login`, {
        email: loginEmail,
        password: loginPassword,
      });

      handleLoginSuccess(response.data);
    } catch (error) {
      await Swal.fire({
        title: "Login failed",
        text: error.response?.data?.message || "Invalid credentials. Please try again.",
        icon: "error",
        confirmButtonText: "Ok",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-[#f9efe4] to-sky-50 flex items-center justify-center px-4">
      <div className="bg-[#e7f0e7]/80 backdrop-blur-lg rounded-2xl p-10 shadow-2xl border border-white/60 flex flex-col md:flex-row w-full items-center justify-center max-w-6xl mx-auto gap-16">
        {/* Left side - Info */}
        <div className="flex-1 hidden md:block">
          <h1 className="text-5xl font-bold text-[#2d3e40] mb-4">
            Welcome Back, Vigy!
          </h1>
          <h2 className="text-3xl text-[#4a7c59] mb-8">
            Login to Your Seller Account
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            Access your seller dashboard, manage products, and grow your business with VigyBag.
          </p>
          <div className="space-y-4">
            <p className="text-sm text-gray-600">
              Don't have a seller account?{" "}
              <Link
                to="/admin/vigy-form"
                className="text-[#4a7c59] hover:underline font-semibold"
              >
                Register as Vigy
              </Link>
            </p>
            <p className="text-sm text-gray-600">
              Are you a customer?{" "}
              <Link
                to="/auth"
                className="text-[#4a7c59] hover:underline font-semibold"
              >
                Login as User
              </Link>
            </p>
          </div>
        </div>

        {/* Right side - Login Form */}
        <div className="flex-1 w-full max-w-md">
          <div className="bg-[#2d3e40] rounded-xl p-8 shadow-xl text-white border border-white/10">
            <h2 className="text-3xl font-semibold text-center mb-8 text-[#4caf50] flex items-center justify-center">
              <SlLogin className="mr-3" /> Vigy Login
            </h2>
            <form onSubmit={handleLogin} className="space-y-6">
              <div className="relative">
                <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full rounded-lg bg-white/90 text-gray-900 placeholder:text-gray-500 pl-10 pr-3 py-3 border border-gray-200 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500"
                  value={loginEmail}
                  onChange={(e) => setLoginEmail(e.target.value)}
                  required
                />
              </div>
              <div className="relative">
                <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type={showLoginPassword ? "text" : "password"}
                  placeholder="Password"
                  className="w-full rounded-lg bg-white/90 text-gray-900 placeholder:text-gray-500 pl-10 pr-10 py-3 border border-gray-200 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500"
                  value={loginPassword}
                  onChange={(e) => setLoginPassword(e.target.value)}
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowLoginPassword(!showLoginPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                >
                  {showLoginPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="rememberMe"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="mr-2 h-4 w-4 rounded border-gray-300 text-emerald-600 focus:ring-emerald-500"
                  />
                  <label htmlFor="rememberMe" className="text-sm">
                    Remember me
                  </label>
                </div>
                <Link
                  to="/forgot-password"
                  className="text-sm text-[#4caf50] hover:underline"
                >
                  Forgot password?
                </Link>
              </div>
              <button
                type="submit"
                disabled={loading}
                className={`w-full bg-gradient-to-r from-blue-600 to-emerald-600 text-white py-3 rounded-lg transition duration-300 shadow-lg ${
                  loading
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:from-blue-700 hover:to-emerald-700"
                }`}
              >
                {loading ? (
                  <div className="flex items-center justify-center">
                    <DotLoader color="#ffffff" size={24} />
                    <span className="ml-2">Logging in...</span>
                  </div>
                ) : (
                  "Log in"
                )}
              </button>
            </form>

            <div className="mt-6 text-center space-y-3">
              <p className="text-sm">
                Don't have a seller account?{" "}
                <Link
                  to="/admin/vigy-form"
                  className="text-[#4caf50] hover:underline font-semibold"
                >
                  Register as Vigy
                </Link>
              </p>
              <p className="text-sm md:hidden">
                Are you a customer?{" "}
                <Link
                  to="/auth"
                  className="text-[#4caf50] hover:underline font-semibold"
                >
                  Login as User
                </Link>
              </p>
              <p className="text-xs mt-4">
                By continuing, you agree to our{" "}
                <Link
                  to="/terms-and-condition"
                  className="text-[#4caf50] hover:underline"
                >
                  Terms of Use
                </Link>{" "}
                and{" "}
                <Link
                  to="/privacy-policy"
                  className="text-[#4caf50] hover:underline"
                >
                  Privacy Policy
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VigyLogin;
