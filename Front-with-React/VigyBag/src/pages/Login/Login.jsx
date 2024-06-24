import React from 'react';
import signUp from '../../assets/sign-up-img.png';
import Logo from '../../assets/offical_logo.png';
import { IoCall } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { RiLockPasswordLine } from "react-icons/ri";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookSquare } from "react-icons/fa";

const containerClasses = "flex items-center bg-[#fff0e3ff] p-2 text-black rounded-xl";
const inputClasses = "bg-[#fff0e3ff] flex-1 ml-2 text-black focus:outline-none rounded-xl";
const formContainerClasses = "min-h-screen flex flex-col items-center justify-center bg-[#fff0e3ff] p-4";
const cardClasses = "w-full max-w-4xl bg-[#fff0e3ff] dark:bg-zinc-800 rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row";
const formSectionClasses = "relative rounded-lg w-full md:w-1/2 bg-zinc-800 text-zinc-200 p-6 flex flex-col justify-center";
const illustrationSectionClasses = "rounded-lg hidden md:flex w-full md:w-1/2 p-8 items-center justify-center bg-[#c1cfabff] overflow-hidden";

const LoginForm = () => {
  return (
    <div className={formContainerClasses}>
      <div className={cardClasses}>
        <div className={formSectionClasses}>
          <div className="flex justify-center mb-3">
            <img src={Logo} alt="Logo" className="h-12 md:h-16" style={{ width: 'auto' }} />
          </div>
          <h2 className="text-3xl font-semibold text-center mb-6">Log in</h2>
          <form className="space-y-4">
            <FormInput icon={<CgProfile />} placeholder="Full Name" />
            <FormInput icon={<IoCall />} placeholder="+91 1234567890" />
            <FormInput icon={<RiLockPasswordLine />} placeholder="OTP" />
            <div className="flex items-center">
              <input type="checkbox" id="remember" className="mr-2" />
              <label htmlFor="remember" className="text-zinc-400">Remember Me</label>
            </div>
            <button className="w-full bg-green-700 text-white py-2 rounded-xl">Log in</button>
          </form>
          <div className="text-center mt-4">
            <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4">
              <button className="flex items-center justify-center h-12 bg-white text-black rounded-xl px-4 w-full md:w-auto whitespace-nowrap">
                <FcGoogle className="text-black p-1" style={{ fontSize: '2rem' }} />
                <span className="ml-2 text-sm">Continue with Google</span>
              </button>
              <button className="flex items-center justify-center h-12 bg-white text-black rounded-xl px-1 w-full md:w-auto whitespace-nowrap">
                <FaFacebookSquare className="text-black p-1" style={{ fontSize: '2rem' }} />
                <span className="ml-2 text-sm">Continue with Facebook</span>
              </button>
            </div>
          </div>
        </div>
        <div className={illustrationSectionClasses}>
          <img src={signUp} alt="Illustration"
           className="w-full h-full object-contain rounded" />
        </div>
      </div>
    </div>
  );
};

const FormInput = ({ icon, placeholder }) => {
  return (
    <div className={containerClasses}>
      <span className="text-black bg-[#fff0e3ff] p-2 rounded-xl">
        {icon}
      </span>
      <input type="text" placeholder={placeholder} className={inputClasses} />
    </div>
  );
};

export default LoginForm;
