import React from 'react';
import signUp from '../../assets/sign-up-img.png';
import Logo from '../../assets/offical_logo.png';
import { IoCall } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { RiLockPasswordLine } from "react-icons/ri";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookSquare } from "react-icons/fa";

function Login() {
    return (
        <>
            <div className="flex justify-center items-center h-screen bg-[#fff0e3ff]">
                <div className="flex">
                    <div className="bg-[#393d3cff] rounded-lg p-20 mr-20 relative " style={{ borderRadius: '20px', 
                    paddingRight: '9vw', left: '-13vw', width: '35vw', height: '80vh',top:'-2.5vh' }}>
                        <div className=" flex items-center mb-6 " style={{ flexDirection: 'column', gap: '5%' }} >
                            <div className=" absolute flex items-center justify-center " style={{
                                top: '-5vh', height: '15vh', width: '7vw',
                                borderRadius: '50%', backgroundColor: '#393d3cff',
                                zIndex: '100', boxShadow: '0px 0px 10px 0px black'
                            }}>
                                <img src={Logo} alt="Logo" className="w-10 h-10" />
                            </div>
                            <h1 className="text-white text-3xl font-bold mt-6 mb-5" style={{ fontFamily: 'League Spartan' }}>Log in</h1>
                        </div>
                        <form>
                            <div className="mb-5">
                                <div className="relative flex items-center mb-2">
                                    <IoCall className="absolute left-3 text-white pointer-events-none bg-[#393d3cff] rounded-full" style={{
                                        scale: '1.5', padding: '1'
                                    }} />
                                    <input
                                        type="text"
                                        id="phoneNumber"
                                        className="pl-10 w-[22vw] px-3 py-3 rounded-md bg-[#e1e8d5ff] focus:outline-none focus:ring-2 focus:ring-[#6AB04C] text-[#393d3cff]"
                                        placeholder="+91 1234567890" style={{ fontFamily: 'League Spartan' }}
                                    />
                                </div>
                            </div>
                            <div className="mb-5">
                                <div className="relative flex items-center mb-2">
                                    <CgProfile className="absolute left-3 text-white pointer-events-none bg-[#595959ff] rounded-full" style={{
                                        scale: '1.5', padding: '1'
                                    }} />
                                    <input
                                        type="text"
                                        id="fullName"
                                        className="pl-10 w-[22vw] px-3 py-3 rounded-md bg-[#e1e8d5ff] focus:outline-none focus:ring-2 focus:ring-[#6AB04C]"
                                        placeholder="Full Name" style={{ fontFamily: 'League Spartan' }}
                                    />
                                </div>
                            </div>
                            <div className="mb-2">
                                <div className="relative flex items-center mb-2">
                                    <RiLockPasswordLine className="absolute left-3 text-white pointer-events-none bg-[#595959ff] rounded-full" style={{
                                        scale: '1.5', padding: '1'
                                    }} />
                                    <input
                                        type="text"
                                        id="otp"
                                        className="pl-10 w-[22vw] px-3 py-3 rounded-md bg-[#e1e8d5ff] focus:outline-none focus:ring-2 focus:ring-[#6AB04C]"
                                        placeholder="OTP" style={{ fontFamily: 'League Spartan' }}
                                    />
                                </div>
                            </div>

                            <div className="flex items-center mb-4">
                                <input
                                    type="checkbox"
                                    id="rememberMe"
                                    className="h-4 w-4 text-[#6AB04C] border-gray-300 rounded focus:ring-2 focus:ring-[#6AB04C]"
                                />
                                <label htmlFor="rememberMe" className="ml-2 text-sm text-[#e8efee]" style={{ fontFamily: 'League Spartan' }}>
                                    Remember Me
                                </label>
                            </div>

                            <button
                                type="submit"
                                className="flex justify-center align-center py-3 rounded-md bg-[#165424ff] text-white font-semibold mb-4 hover:bg-[#5A9C3E] transition-colors duration-300"
                                style={{ width: '10vw', marginLeft: '5vw', borderColor: 'white',fontFamily: 'League Spartan' }}>
                                Log in
                            </button>

                            <p className="text-white text-center" style={{ fontFamily: 'League Spartan' }}>or Continue Log in using</p>
                            <div className="flex justify-center items-center gap-10">
                                <FcGoogle style={{
                                    scale: '2', padding: '1', marginTop: '5%'
                                }} />
                                <FaFacebookSquare className='text-white pointer-events-none bg-[#1877f2ff]' style={{
                                    scale: '1.7', padding: '', marginTop: '5%'
                                }} />
                            </div>
                        </form>
                    </div>
                    <div className="absolute bg-[#c1cfabff] rounded-ml" style={{ borderRadius: '20px', right: '17%',
                     width: '35vw', height: '80vh',top:'17vh' }}>
                        <img src={signUp} alt="Illustration" className="relative max-w-xl mx-auto my-10 rounded-ml" style={{ scale: '1.3', 
                        width: '31vw', height: '68vh' }} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;
