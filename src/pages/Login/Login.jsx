import React, { useState } from "react";
import signUp from "../../assets/sign-up-img.png";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ClipLoader, DotLoader } from "react-spinners";

const containerClasses =
  "flex items-center bg-[#fff0e3ff] p-2 text-black rounded-xl";
const inputClasses = "bg-[#fff0e3ff] flex-1 ml-2 text-black focus:outline-none";
const formContainerClasses =
  "min-h-screen flex flex-col items-center justify-center bg-[#fff0e3ff] p-4";
const cardClasses =
  "w-full max-w-4xl bg-[#fff0e3ff] mb-7 dark:bg-zinc-800 rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row";
const formSectionClasses =
  "relative rounded-lg w-full md:w-1/2 bg-zinc-800 text-zinc-200 p-6 flex flex-col justify-center";
const illustrationSectionClasses =
  "rounded-lg hidden md:flex w-full md:w-1/2 p-8 items-center justify-center bg-[#c1cfabff] overflow-hidden";

const FormInput = ({ icon, placeholder, type = "text", value, onChange }) => {
  return (
    <div className={containerClasses}>
      <span className="text-black bg-[#fff0e3ff] p-2">{icon}</span>
      <input
        type={type}
        placeholder={placeholder}
        className={inputClasses}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post(
        "http://localhost:8080/api/auth/login",
        {
          email,
          password,
        }
      );
      localStorage.setItem("isLoggedIn", "true");
      // Check if the user is an admin based on role
      // if (response.data.user.role === 1) {
      //   localStorage.setItem("isAdmin", "true");
      //   setIsAdmin(true); // Set state to indicate admin login
      // } else {
      //   setIsAdmin(false); // Reset admin state if not admin login
      // }

      alert(response.data.message);
      setEmail("");
      setPassword("");
      navigate("/");
    } catch (error) {
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        alert(error.response.data.message);
        console.log(error.response.data.message);
      }
    } finally {
      setLoading(false);
    }
  };

  function handleToggle() {
    setShowPassword(!showPassword);
  }

  return (
    <div className={formContainerClasses}>
      <div className={cardClasses}>
        {/* Form section */}
        <div className={formSectionClasses}>
          <h2 className="text-3xl font-semibold text-center mb-6 text-white">
            Log in
          </h2>

          {/* Login form */}
          <form className="space-y-4" onSubmit={handleLogin}>
            <FormInput
              required={true}
              icon={
                <lord-icon
                  style={{
                    height: "25px",
                    width: "25px",
                    paddingTop: "2px",
                  }}
                  src="https://cdn.lordicon.com/tmqaflqo.json"
                  trigger="hover"
                  colors="primary:#0a5c15,secondary:#16c72e,tertiary:#fff0e3ff"
                ></lord-icon>
              }
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className="relative">
              <FormInput
                required={true}
                icon={
                  <lord-icon
                    style={{
                      height: "20px",
                      width: "20px",
                      paddingTop: "2px",
                    }}
                    src="https://cdn.lordicon.com/pdwpcpva.json"
                    trigger="hover"
                    colors="primary:#629110,secondary:#109121,tertiary:#629110"
                  ></lord-icon>
                }
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {/* {showPassword ? (
                <FaEye
                  className="absolute bottom-[11px] right-[13px] text-[1.5rem] text-black"
                  onClick={handleToggle}
                />
              ) : (
                <FaEyeSlash
                  className="absolute bottom-[11px] right-[13px] text-[1.5rem] text-black"
                  onClick={handleToggle}
                />
              )} */}
            </div>
            <div className="flex items-center">
              <input type="checkbox" id="remember" className="mr-2" />
              <label htmlFor="remember" className="text-zinc-400">
                Remember Me
              </label>
            </div>
            <button
              type="submit"
              className="w-full h-12 bg-green-700 text-white rounded-xl flex items-center justify-center"
            >
              {loading ? <DotLoader color="#ffffff" size={24} /> : "Login"}
            </button>
          </form>

          {/* Show admin access message if isAdmin is true */}
          {isAdmin && (
            <p className="text-green-500 mt-4">Admin access granted!</p>
          )}

          {/* Social login buttons */}
          <div className="text-center mt-4">
            <p className="text-zinc-400 mb-2 underline">Or</p>
            <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4">
              <button className="flex items-center justify-center h-12 bg-white text-black rounded-xl px-4 w-full md:w-auto whitespace-nowrap">
                <FcGoogle
                  className="text-black p-1"
                  style={{ fontSize: "2rem" }}
                />
                <span className="ml-2 text-sm">Login with Google</span>
              </button>
              <button className="flex items-center justify-center h-12 bg-white text-black rounded-xl px-1 w-full md:w-auto whitespace-nowrap">
                {/* <FaFacebookSquare
                  className="text-black p-1"
                  style={{ fontSize: "2rem" }}
                /> */}
                <lord-icon
                  style={{
                    width: "20px",
                    height: "20px",
                    paddingTop: "0px",
                    paddingLeft: "1px",
                  }}
                  src="https://cdn.lordicon.com/nlsfemdg.json"
                  trigger="hover"
                ></lord-icon>
                <span className="ml-2 text-sm">Login with Facebook</span>
              </button>
            </div>
          </div>

          <p className="text-zinc-400 text-center mt-4">
            Create an account?{" "}
            <Link to="/signup" className="text-green-500 underline">
              Sign-Up
            </Link>
          </p>
        </div>

        {/* Illustration section */}
        <div className={illustrationSectionClasses}>
          <img
            src={signUp}
            alt="Illustration"
            className="w-full h-full object-contain rounded"
          />
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
