import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import {
  FaFacebook,
  FaEnvelope,
  FaLock,
  FaUser,
  FaPhone,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import { DotLoader } from "react-spinners";
import "./UserAuth.css";
import { SlLogin } from "react-icons/sl";
import { MdAssignmentInd } from "react-icons/md";
import { Link } from "react-router-dom";

const AuthForm = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Login state
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  // Signup state
  const [username, setUsername] = useState("");
  const [signupEmail, setSignupEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post(
        "https://vigybag-backend.onrender.com/api/auth/login",
        { email: loginEmail, password: loginPassword }
      );

      localStorage.setItem("isLoggedIn", "true");

      const username = response.data.username;
      const adminRole = response.data.adminrole;

      // Store username and admin role in localStorage
      localStorage.setItem("username", username);
      if (adminRole !== undefined) {
        localStorage.setItem("adminRole", adminRole);
      }

      setLoginEmail("");
      setLoginPassword("");

      if (adminRole === 1) {
        Swal.fire({
          title: "Admin login detected",
          text: `Welcome, ${username}! Redirecting to admin verification page...`,
          icon: "warning",
          confirmButtonText: "Ok",
          customClass: {
            popup: "custom-popup",
            title: "custom-title",
            content: "custom-content",
            confirmButton: "custom-confirm-button",
          },
          timer: 3000,
          timerProgressBar: true,
        }).then(() => {
          navigate("/admin-verification");
        });
      } else {
        Swal.fire({
          title: "Login successfully!",
          text: `Welcome, ${username}! Thanks for choosing VigyBag!`,
          icon: "success",
          confirmButtonText: "Ok",
          customClass: {
            popup: "custom-popup",
            title: "custom-title",
            content: "custom-content",
            confirmButton: "custom-confirm-button",
          },
        }).then(() => {
          navigate("/");
        });
      }
    } catch (error) {
      console.log(error);
      Swal.fire({
        title: "Login failed",
        text: error.response?.data?.message,
        icon: "error",
        confirmButtonText: "Ok",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (signupPassword !== confirmPassword) {
      Swal.fire({
        title: "Passwords do not match",
        icon: "error",
        confirmButtonText: "Ok",
      });
      setLoading(false);
      return;
    }

    try {
      await axios.post("https://vigybag-backend.onrender.com/api/auth/signup", {
        username,
        email: signupEmail,
        password: signupPassword,
        phone,
      });
      setIsFlipped(false); // Flip back to login
      Swal.fire({
        title: "Signup successful!",
        text: "Please log in with your new account",
        icon: "success",
        confirmButtonText: "Ok",
      });
    } catch (error) {
      Swal.fire({
        title: "Signup failed",
        text: error.response?.data?.message,
        icon: "error",
        confirmButtonText: "Ok",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleSocialLogin = (provider) => {
    window.location.href = `https://vigybag-backend.onrender.com/auth/${provider}`;
  };

  return (
    <div className="min-h-screen bg-[#f9efe4]">
      {/* Main content */}
      <div className="flex justify-center items-center h-[calc(100vh-80px)]">
        <div className="mt-40 bg-[#e7f0e7] rounded-lg p-10 shadow-lg flex w-full max-w-7xl h-[75vh] gap-[10vw]">
          {/* Left side */}
          <div className="flex-1 pr-8 mt-[13vh]">
            <h1 className="text-5xl font-bold text-[#2d3e40] mb-4">
              Welcome to VigyBag!!
            </h1>
            <h2 className="text-3xl text-[#4a7c59] mb-8">
              Make Your Shopping <br />
              Eco-Friendly
            </h2>
            <div className="space-x-4">
              <Link to="/admin-verification">
                <button className="bg-[#2d3e40] text-white px-6 py-2 rounded-full hover:bg-opacity-90 transition duration-300">
                  Login as Admin
                </button>
              </Link>
              <button className="bg-[#f9efe4] text-[#2d3e40] px-6 py-2 rounded-full border border-[#2d3e40] hover:bg-[#2d3e40] hover:text-white transition duration-300">
                Login as Vigy
              </button>
            </div>
          </div>

          {/* Right side - Login/Signup Form */}
          <div className="flex-1">
            <div className={`flip-container ${isFlipped ? "flipped" : ""}`}>
              <div className="flipper">
                {/* Login Form */}
                <div className="front">
                  <div className="bg-[#2d3e40] rounded-lg p-6 shadow-lg text-white">
                    <h2 className="text-white text-2xl font-semibold text-center mb-6 text-[#4caf50] flex items-center justify-center">
                      <SlLogin className="mr-2" />
                      Login as a User
                    </h2>
                    <form className="space-y-4">
                      <div className="relative">
                        <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        <input
                          type="email"
                          placeholder="Email"
                          className="w-full p-2 pl-10 rounded bg-white text-black"
                          value={loginEmail}
                          onChange={(e) => setLoginEmail(e.target.value)}
                          required
                        />
                      </div>
                      <div className="relative">
                        <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        <input
                          type="password"
                          placeholder="Password"
                          className="w-full p-2 pl-10 rounded bg-white text-black"
                          value={loginPassword}
                          onChange={(e) => setLoginPassword(e.target.value)}
                          required
                        />
                      </div>
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="rememberMe"
                          checked={rememberMe}
                          onChange={(e) => setRememberMe(e.target.checked)}
                          className="mr-2"
                        />
                        <label htmlFor="rememberMe" className="text-sm">
                          Remember me
                        </label>
                        <a
                          href="#"
                          className="text-sm text-[#4caf50] hover:underline ml-[15vw]"
                        >
                          Forgot password?
                        </a>
                      </div>
                      <button
                        type="submit"
                        onClick={handleLogin}
                        className="w-full bg-[#4caf50] text-white p-2 rounded hover:bg-[#45a049] transition duration-300"
                      >
                        {loading ? (
                          <DotLoader color="#ffffff" size={24} />
                        ) : (
                          "Log in"
                        )}
                      </button>
                    </form>
                    <div className="mt-4 flex justify-between space-x-2">
                      <button
                        onClick={() => handleSocialLogin("google")}
                        className="flex-1 flex items-center justify-center bg-white text-black px-4 py-2 rounded text-sm hover:bg-gray-100 transition duration-300"
                      >
                        <FcGoogle className="mr-2" />
                        Continue with Google
                      </button>
                      <button
                        onClick={() => handleSocialLogin("facebook")}
                        className="flex-1 flex items-center justify-center bg-[#1877f2] text-white px-4 py-2 rounded text-sm hover:bg-[#166fe5] transition duration-300"
                      >
                        <FaFacebook className="mr-2" /> Continue with Facebook
                      </button>
                    </div>
                    <p className="text-xs text-center mt-4">
                      By continuing, you agree to follow Terms of Use and
                      Privacy Policy
                    </p>
                    <p className="text-sm text-center mt-4">
                      Don't have an account?{" "}
                      <button
                        onClick={() => setIsFlipped(true)}
                        className="text-[#4caf50] hover:underline"
                      >
                        Sign up
                      </button>
                    </p>
                  </div>
                </div>

                {/* Signup Form */}
                <div className="back">
                  <div className="bg-[#2d3e40] rounded-lg p-6 shadow-lg text-white">
                    <h2 className="text-white text-2xl font-semibold text-center mb-6 text-[#4caf50] flex items-center justify-center">
                      <MdAssignmentInd className="mr-2" />
                      SignUp as a User
                    </h2>
                    <form onSubmit={handleSignup} className="space-y-4">
                      <div className="relative">
                        <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        <input
                          type="text"
                          placeholder="Username"
                          className="w-full p-2 pl-10 rounded bg-white text-black"
                          value={username}
                          onChange={(e) => setUsername(e.target.value)}
                          required
                        />
                      </div>
                      <div className="relative">
                        <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        <input
                          type="email"
                          placeholder="Email"
                          className="w-full p-2 pl-10 rounded bg-white text-black"
                          value={signupEmail}
                          onChange={(e) => setSignupEmail(e.target.value)}
                          required
                        />
                      </div>
                      <div className="relative">
                        <FaPhone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        <input
                          type="tel"
                          placeholder="Phone Number"
                          className="w-full p-2 pl-10 rounded bg-white text-black"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          required
                        />
                      </div>
                      <div className="relative">
                        <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        <input
                          type="password"
                          placeholder="Password"
                          className="w-full p-2 pl-10 rounded bg-white text-black"
                          value={signupPassword}
                          onChange={(e) => setSignupPassword(e.target.value)}
                          required
                        />
                      </div>
                      <div className="relative">
                        <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        <input
                          type="password"
                          placeholder="Confirm Password"
                          className="w-full p-2 pl-10 rounded bg-white text-black"
                          value={confirmPassword}
                          onChange={(e) => setConfirmPassword(e.target.value)}
                          required
                        />
                      </div>
                      <button
                        type="submit"
                        className="w-full bg-[#4caf50] text-white p-2 rounded hover:bg-[#45a049] transition duration-300"
                      >
                        {loading ? (
                          <DotLoader color="#ffffff" size={24} />
                        ) : (
                          "Sign Up"
                        )}
                      </button>
                    </form>
                    <p className="text-sm text-center mt-4">
                      Already have an account?{" "}
                      <button
                        onClick={() => setIsFlipped(false)}
                        className="text-[#4caf50] hover:underline"
                      >
                        Log in
                      </button>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
