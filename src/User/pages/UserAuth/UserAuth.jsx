import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import {
  FaFacebook,
  FaEnvelope,
  FaLock,
  FaUser,
  FaPhone,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { auth, FacebookAuthProvider, signInWithPopup } from "./firebase";
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
  const [showLoginPassword, setShowLoginPassword] = useState(false); // New state for login password visibility

  // Signup state
  const [username, setUsername] = useState("");
  const [signupEmail, setSignupEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showSignupPassword, setShowSignupPassword] = useState(false); // New state for signup password visibility
  const [showConfirmPassword, setShowConfirmPassword] = useState(false); // New state for confirm password visibility
  const [passwordStrength, setPasswordStrength] = useState(0);

  const isPhoneValid = (number) => /^\d+$/.test(number) && number.length == 10; //checking phone number's validity
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
    if (!isPhoneValid(phone)) {  //checking phone number's validity
      Swal.fire({
        title: "Invalid phone number",
        text: "Phone number must be of 10 digits.",
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
    if (provider === "facebook") {
      const facebookProvider = new FacebookAuthProvider();
      signInWithPopup(auth, facebookProvider)
        .then((result) => {
          const user = result.user;
          const username = user.displayName;
          // Store username in localStorage
          localStorage.setItem("isLoggedIn", "true");
          localStorage.setItem("username", username);
  
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
        })
        .catch((error) => {
          console.log(error);
          Swal.fire({
            title: "Login failed",
            text: error.message,
            icon: "error",
            confirmButtonText: "Ok",
          });
        });
    } else if (provider === "google") {
      window.location.href = `https://vigybag-backend.onrender.com/auth/google`;
    }
  };

  const checkPasswordStrength = (password) => { //checking password strength
    const lengthCriteria = password.length >= 8;
    const numberCriteria = /\d/.test(password);
    const letterCriteria = /[a-zA-Z]/.test(password);
    const strength = (lengthCriteria ? 1 : 0) + (numberCriteria ? 1 : 0) + (letterCriteria ? 1 : 0);

    return strength;
  };
  return (
    <div className="md:min-h-screen h-[120vh] bg-[#f9efe4]">
      {/* Main content */}
      <div className="flex justify-center items-center md:h-[calc(100vh-80px)] h-[calc(150vh-80px)] ">
        <div className="md:mt-40 mt-30 bg-[#e7f0e7] rounded-lg p-10 shadow-lg md:flex w-full md:max-w-7xl md:h-[75vh] h-[100%] gap-[10vw]">
          {/* Left side */}
          <div className="md:flex-1 md:block pr-8 mt-[13vh] hidden">
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
          <div className="md:flex-1">
            <div
              className={`flip-container ${
                isFlipped ? "flipped" : ""
              } md:mt-0 mt-28`}>
              <div className="flipper">
                {/* Login Form */}
                <div className="front">
                  <div className="bg-[#2d3e40] rounded-lg p-6 shadow-lg text-white">
                    <h2 className="text-2xl font-semibold text-center mb-6 text-[#4caf50] flex items-center justify-center">
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
                          type={showLoginPassword ? "text" : "password"} // Toggle input type
                          placeholder="Password"
                          className="w-full p-2 pl-10 rounded bg-white text-black"
                          value={loginPassword}
                          onChange={(e) => setLoginPassword(e.target.value)}
                          required
                        />
                        <button
                          type="button"
                          onClick={() => setShowLoginPassword(!showLoginPassword)}
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                        >
                          {showLoginPassword ? "Hide" : "Show"}
                        </button>
                      </div>
                      <div className="flex items-center justify-between">
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
  </div>
  <a
    href="#"
    className="text-sm text-[#4caf50] hover:underline"
  >
    Forgot password?
  </a>
</div>

                      <button
                        type="submit"
                        onClick={handleLogin}
                        className="w-full bg-[#4caf50] text-white p-2 rounded hover:bg-[#45a049] transition duration-300">
                        {loading ? (
                          <DotLoader color="#ffffff" size={24} />
                        ) : (
                          "Log in"
                        )}
                      </button>
                    </form>
                    <div className="md:mt-4 mt-8 md:mb-0 mb-16 flex justify-between space-x-2 space-y-0  md:ml-0 ml-5">
                      <button
                        onClick={() => handleSocialLogin("google")}
                        className="flex-1 flex items-center justify-center bg-white text-black px-4 py-2 rounded md:text-sm text-xs hover:bg-gray-100 transition duration-300">
                        <FcGoogle className="mr-2" />
                        Login with Google
                      </button>
                       <button
                        onClick={() => handleSocialLogin("facebook")}
                        className="flex-1 flex items-center justify-center bg-[#1877f2] text-white px-4 py-2 rounded md:text-sm text-xs hover:bg-[#166fe5] transition duration-300">
                        <FaFacebook className="md:mr-2 mr-1" /> Login with
                        facebook
                      </button>
                    </div>
                    <p className="text-xs text-center mt-4">

                     By continuing, you agree to follow our{" "}
                         <Link to="https://www.vigybag.com/termsAndCondition" className="text-[#4caf50] hover:underline">
                          Terms of Use
                         </Link>{" "}
                            and{" "}
                           <Link to="https://www.vigybag.com/privacy" className="text-[#4caf50] hover:underline">
                            Privacy Policy
                         </Link>.

                    </p>
                    <p className="text-sm text-center mt-4">
                      Don't have an account?{" "}
                      <button
                        onClick={() => setIsFlipped(true)}
                        className="text-[#4caf50] hover:underline">
                        Sign up
                      </button>
                    </p>
                  </div>
                  <div className="flex space-x-4 mt-8 text-center md:hidden visible">
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

                {/* Signup Form */}
                <div className="back">
                  <div className="bg-[#2d3e40] rounded-lg p-6 shadow-lg text-white">
                    <h2 className="text-white text-2xl font-semibold text-center mb-6 flex items-center justify-center">
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
                          type="text"
                          placeholder="Phone Number"
                          className="w-full p-2 pl-10 rounded bg-white text-black"
                          value={phone}
                          onChange={(e) => {
                            const value = e.target.value;
                            if (/^\d*$/.test(value)) {
                              setPhone(value);
                            }
                          }}
                          required
                        />
                      </div>
                      <div className="relative">
                        <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        <input
                          type={showSignupPassword ? "text" : "password"} // Toggle input type
                          placeholder="Password"
                          className="w-full p-2 pl-10 rounded bg-white text-black"
                          value={signupPassword}
                          onChange={(e) => {
                            setSignupPassword(e.target.value);
                            setPasswordStrength(checkPasswordStrength(e.target.value)); {/*password strength check */}
                          }}
                          required
                        />
                        <button
                          type="button"
                          onClick={() => setShowSignupPassword(!showSignupPassword)}
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                        >
                          {showSignupPassword ? <FaEyeSlash /> : <FaEye />}
                        </button>
                      </div>
                      <div className="relative">
                        <div className="w-full bg-gray-200 rounded-full h-2 mt-2"> {/*passward strength check*/}
                          <div
                            className={`h-full rounded-full ${
                              passwordStrength === 3 ? "bg-green-500" : 
                              passwordStrength === 2 ? "bg-yellow-500" : 
                              passwordStrength === 1 ? "bg-red-500" : "bg-gray-400"
                            }`}
                            style={{ width: `${(passwordStrength / 3) * 100}%` }}
                          ></div>
                        </div>
                        <p className="text-xs text-gray-500 mt-1">
                          {passwordStrength === 3 ? "Strong" : 
                          passwordStrength === 2 ? "Medium" : 
                          passwordStrength === 1 ? "Weak" : "Very Weak"}
                        </p>
                      </div>
                      <div className="relative">
                        <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        <input
                          type={showConfirmPassword ? "text" : "password"} // Toggle input type
                          placeholder="Confirm Password"
                          className="w-full p-2 pl-10 rounded bg-white text-black"
                          value={confirmPassword}
                          onChange={(e) => setConfirmPassword(e.target.value)}
                          required
                        />
                        <button
                          type="button"
                          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                        >
                          {showConfirmPassword ? "Hide" : "Show"}
                        </button>
                      </div>
                      <button
                        type="submit"
                        className="w-full bg-[#4caf50] text-white p-2 rounded hover:bg-[#45a049] transition duration-300">
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
                        className="text-[#4caf50] hover:underline">
                        Log in
                      </button>
                    </p>
                  </div>
                  <div className="flex space-x-4 mt-8 text-center md:hidden visible">
                    <Link to="/admin-verification">
                      <button className="bg-[#2d3e40] text-white px-6 py-2 rounded-full hover:bg-opacity-90 transition duration-300">
                        SignUp as Admin
                      </button>
                    </Link>
                    <button className="bg-[#f9efe4] text-[#2d3e40] px-6 py-2 rounded-full border border-[#2d3e40] hover:bg-[#2d3e40] hover:text-white transition duration-300">
                      SignUp as Vigy
                    </button>
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
