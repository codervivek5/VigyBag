import React, { useState } from 'react';
import signUp from '../../assets/sign-up-img.png';
import Logo from '../../assets/offical_logo.png';
import { IoCall } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { RiLockPasswordLine } from "react-icons/ri";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookSquare } from "react-icons/fa";
import { auth, RecaptchaVerifier } from '../../Configs/FirebaseConfig';

import { signInWithPhoneNumber, GoogleAuthProvider, FacebookAuthProvider, signInWithPopup } from 'firebase/auth';

const containerClasses = "flex items-center bg-[#fff0e3ff] p-2 text-black rounded-xl";
const inputClasses = "bg-[#fff0e3ff] flex-1 ml-2 text-black focus:outline-none rounded-xl";
const formContainerClasses = "min-h-screen flex flex-col items-center justify-center bg-[#fff0e3ff] p-4";
const cardClasses = "w-full max-w-4xl bg-[#fff0e3ff] dark:bg-zinc-800 rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row";
const formSectionClasses = "relative rounded-lg w-full md:w-1/2 bg-zinc-800 text-zinc-200 p-6 flex flex-col justify-center";
const illustrationSectionClasses = "rounded-lg hidden md:flex w-full md:w-1/2 p-8 items-center justify-center bg-[#c1cfabff] overflow-hidden";

const LoginForm = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [verificationId, setVerificationId] = useState(null);

  const handleSendOtp = () => {
    window.recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {
      'size': 'invisible',
      'callback': (response) => {
        // reCAPTCHA solved, allow signInWithPhoneNumber.
        handleSendOtp();
      }
    }, auth);

    const appVerifier = window.recaptchaVerifier;
    signInWithPhoneNumber(auth, phoneNumber, appVerifier)
      .then((confirmationResult) => {
        setVerificationId(confirmationResult.verificationId);
      }).catch((error) => {
        console.error(error);
      });
  };

  const handleVerifyOtp = () => {
    const credential = auth.PhoneAuthProvider.credential(verificationId, otp);
    auth.signInWithCredential(credential).catch(error => {
      console.error(error);
    });
  };

  const handleGoogleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider).catch(error => {
      console.error(error);
    });
  };

  const handleFacebookSignIn = () => {
    const provider = new FacebookAuthProvider();
    signInWithPopup(auth, provider).catch(error => {
      console.error(error);
    });
  };

  return (
    <div className={formContainerClasses}>
      <div id="recaptcha-container"></div>
      <div className={cardClasses}>
        <div className={formSectionClasses}>
          <div className="flex justify-center mb-3">
            <img src={Logo} alt="Logo" className="h-12 md:h-16" style={{ width: 'auto' }} />
          </div>
          <h2 className="text-3xl font-semibold text-center mb-6">Log in</h2>
          <form className="space-y-4">
            <FormInput icon={<IoCall />} placeholder="+91 1234567890" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
            <FormInput icon={<RiLockPasswordLine />} placeholder="OTP" value={otp} onChange={(e) => setOtp(e.target.value)} />
            <button type="button" className="w-full bg-green-700 text-white py-2 rounded-xl" onClick={handleSendOtp}>Send OTP</button>
            <button type="button" className="w-full bg-green-700 text-white py-2 rounded-xl" onClick={handleVerifyOtp}>Verify OTP</button>
          </form>
          <div className="text-center mt-4">
            <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4">
              <button type="button" className="flex items-center justify-center h-12 bg-white text-black rounded-xl px-4 w-full md:w-auto whitespace-nowrap" onClick={handleGoogleSignIn}>
                <FcGoogle className="text-black p-1" style={{ fontSize: '2rem' }} />
                <span className="ml-2 text-sm">Continue with Google</span>
              </button>
              <button type="button" className="flex items-center justify-center h-12 bg-white text-black rounded-xl px-1 w-full md:w-auto whitespace-nowrap" onClick={handleFacebookSignIn}>
                <FaFacebookSquare className="text-black p-1" style={{ fontSize: '2rem' }} />
                <span className="ml-2 text-sm">Continue with Facebook</span>
              </button>
            </div>
          </div>
        </div>
        <div className={illustrationSectionClasses}>
          <img src={signUp} alt="Illustration" className="w-full h-full object-contain rounded" />
        </div>
      </div>
    </div>
  );
};

const FormInput = ({ icon, placeholder, value, onChange }) => {
  return (
    <div className={containerClasses}>
      <span className="text-black bg-[#fff0e3ff] p-2 rounded-xl">
        {icon}
      </span>
      <input type="text" placeholder={placeholder} value={value} onChange={onChange} className={inputClasses} />
    </div>
  );
};

export default LoginForm;
