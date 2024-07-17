import React, { useState } from "react";
import signUp from "../../../assets/Sign-up.png";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import "../../components/FeedbackForm/Sweetpopup.css";
import SignUp from "../../components/Buttons/SignUp";
import { ClipLoader, DotLoader } from "react-spinners";

const containerClasses =
  "flex items-center bg-[#fff0e3ff] p-2 text-black rounded-xl";
const inputClasses = "bg-[#fff0e3ff] flex-1 ml-2 text-black focus:outline-none";
const formContainerClasses =
  "min-h-screen flex flex-col items-center justify-center bg-[#fff0e3ff] p-4";
const cardClasses =
  "w-full max-w-4xl bg-[#fff0e3ff] dark:bg-zinc-800 rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row mt-24";
const formSectionClasses =
  "relative rounded-lg w-full md:w-1/2 bg-zinc-800 text-zinc-200 p-6 flex flex-col justify-center";
const illustrationSectionClasses =
  "rounded-lg hidden md:flex w-full md:w-1/2 p-8 items-center justify-center bg-[#c1cfabff] overflow-hidden";

const FormInput = ({ icon, placeholder, type = "text", value, onChange }) => {
  return (
    <div className={containerClasses}>
      <span className="text-black bg-[#fff0e3ff] p-2 rounded-xl">{icon}</span>
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

const SignUpForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      console.log("Passwords do not match");
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post(
        "https://vigybag-backend.onrender.com/api/auth/signup",
        {
          username,
          email,
          password,
          phone,
        }
      );
      navigate("/login");
      setUsername("");
      setEmail("");
      setPhone("");
      setPassword("");
      setConfirmPassword("");
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

    Swal.fire({
      title: "SignUp successfully!",
      text: "Thanks for Choosing VigyBag!",
      icon: "success",
      confirmButtonText: "Ok",
      customClass: {
        popup: "custom-popup",
        title: "custom-title",
        content: "custom-content",
        confirmButton: "custom-confirm-button",
      },
    });
  };

  function handleToggle() {
    if (showPassword) {
      setShowPassword(false);
    } else {
      setShowPassword(true);
    }
  }
  function handleToggle1() {
    if (showConfirmPassword) {
      setShowConfirmPassword(false);
    } else {
      setShowConfirmPassword(true);
    }
  }
  const handleGoogleLogin = () => {
    window.location.href = "https://vigybag-backend.onrender.com/auth/google";
  };
  return (
    <>
      <div className={formContainerClasses}>
        <div className={cardClasses}>
          <div className={formSectionClasses}>
            <h2 className="text-3xl font-semibold text-center mb-6 text-white">
              Sign Up
            </h2>
            <form className="space-y-4" onSubmit={handleSignup}>
              <FormInput
                required={true}
                // icon={<CgProfile />}
                icon={
                  <lord-icon
                    style={{
                      height: "20px",
                      width: "20px",
                      paddingTop: "2px",
                    }}
                    src="https://cdn.lordicon.com/hrjifpbq.json"
                    trigger="hover"
                    colors="primary:#0a5c15"
                  ></lord-icon>
                }
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
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
              <FormInput
                required={true}
                icon={
                  <lord-icon
                    style={{
                      height: "20px",
                      width: "20px",
                      paddingTop: "2px",
                    }}
                    src="https://cdn.lordicon.com/srsgifqc.json"
                    trigger="hover"
                    colors="primary:#0a5c15"
                  ></lord-icon>
                }
                type="text"
                placeholder="Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
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
                  type={`${showPassword ? "text" : "password"}`}
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
                  placeholder="Confirm Password"
                  type={`${showPassword ? "text" : "password"}`}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                {/* {showConfirmPassword ? (
                  <FaEye
                    className="absolute bottom-[11px] right-[13px] text-[1.5rem] text-black"
                    onClick={handleToggle1}
                  />
                ) : (
                  <FaEyeSlash
                    className="absolute bottom-[11px] right-[13px] text-[1.5rem] text-black"
                    onClick={handleToggle1}
                  />
                )} */}
              </div>
              <div className="flex items-center">
                <input type="checkbox" id="terms" className="mr-2" required />
                <label htmlFor="terms" className="text-zinc-400">
                  I agree to the Terms and Conditions
                </label>
              </div>
              <button
                type="submit"
                className="w-full bg-green-700 text-white py-2 rounded-xl"
              >
                {loading ? <DotLoader color="#ffffff" size={24} /> : "SignUp"}
              </button>
            </form>

            <div className="text-center mt-4">
              <p className="text-zinc-400 mb-2 underline">Or</p>
              <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4">
                <button
                  onClick={handleGoogleLogin}
                  className="flex items-center justify-center h-12 bg-white text-black rounded-xl px-4 w-full md:w-auto whitespace-nowrap"
                >
                  <FcGoogle
                    className="text-black p-1"
                    style={{ fontSize: "2rem" }}
                  />
                  <span className="ml-2 text-sm">Login with Google</span>
                </button>
                <button className="flex items-center justify-center h-12 bg-white text-black rounded-xl px-1 w-full md:w-auto whitespace-nowrap">
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
              Already have an account?{" "}
              <Link to="/login" className="text-green-500 underline">
                Log in
              </Link>
            </p>
          </div>

          <div className={illustrationSectionClasses}>
            <img
              src={signUp}
              alt="Illustration"
              className="w-full h-full object-contain rounded"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUpForm;
