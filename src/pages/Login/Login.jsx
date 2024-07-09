import React, { useState } from "react";
import signUp from "../../assets/sign-up-img.png";
import Logo from "../../assets/offical_logo.png";
import { RiLockPasswordLine } from "react-icons/ri";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ClipLoader, DotLoader } from "react-spinners";
import toast, { Toaster } from "react-hot-toast";

const containerClasses =
  "flex items-center bg-[#fff0e3ff] p-2 text-black rounded-xl";
const inputClasses =
  "bg-[#fff0e3ff] flex-1 ml-2 text-black focus:outline-none rounded-xl";
const formContainerClasses =
  "min-h-screen flex flex-col items-center justify-center bg-[#fff0e3ff] p-4";
const cardClasses =
  "w-full max-w-4xl bg-[#fff0e3ff] dark:bg-zinc-800 rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row";
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

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post(
        "https://vigybag-backend.onrender.com/api/auth/login",
        {
          email,
          password,
        }
      );

      toast.success(response.data.message);
      navigate("/dashboard");
      setEmail("");
      setPassword("");
    } catch (error) {
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        toast.error(error.response.data.message);
      } else {
        toast.error("An unexpected error occurred. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className={formContainerClasses}>
        <div className={cardClasses}>
          <div className={formSectionClasses}>
            <div className="flex justify-center mb-3">
              <img
                src={Logo}
                alt="Logo"
                className="h-12 md:h-16"
                style={{ width: "auto" }}
              />
            </div>
            <h2 className="text-3xl font-semibold text-center mb-6 text-white">
              Login
            </h2>
            <form className="space-y-4" onSubmit={handleLogin}>
              <FormInput
                required={true}
                icon={<MdEmail />}
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <FormInput
                required={true}
                icon={<RiLockPasswordLine />}
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="submit"
                className="w-full bg-green-700 text-white py-2 rounded-xl"
              >
                {loading ? <DotLoader color="#ffffff" size={24} /> : "Login"}
              </button>
              <div className="flex items-center">
                <input type="checkbox" id="remember" className="mr-2" />
                <label htmlFor="remember" className="text-zinc-400">
                  Remember Me
                </label>
              </div>
            </form>

            <div className="text-center mt-4">
              <p className="text-zinc-400 mb-2">Or log in with:</p>
              <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4">
                <button className="flex items-center justify-center h-12 bg-white text-black rounded-xl px-4 w-full md:w-auto whitespace-nowrap">
                  <FcGoogle
                    className="text-black p-1"
                    style={{ fontSize: "2rem" }}
                  />
                  <span className="ml-2 text-sm">Log in with Google</span>
                </button>
                <button className="flex items-center justify-center h-12 bg-white text-black rounded-xl px-1 w-full md:w-auto whitespace-nowrap">
                  <FaFacebookSquare
                    className="text-black p-1"
                    style={{ fontSize: "2rem" }}
                  />
                  <span className="ml-2 text-sm">Log in with Facebook</span>
                </button>
              </div>
            </div>

            <p className="text-zinc-400 text-center mt-4">
              Don't have an account?{" "}
              <Link to="/signup" className="text-green-500">
                Sign up
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
      <Toaster />
    </>
  );
};

export default LoginForm;
