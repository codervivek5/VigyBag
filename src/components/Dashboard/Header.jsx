import React from 'react';
import profile from "../../assets/profile.png";

function Header() {
    return (
        <>
            <header className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-bold">Dashboard</h1>
                <div className="flex items-center space-x-4">
                    <div className="h-10 bg-[#686469ff]  flex items-center justify-center px-3 rounded-xl">
                        <img
                            src={profile}
                            alt=""
                            style={{
                                width: "30px",
                                height: "30px",
                                borderRadius: "50%",
                                border: "1px solid black",
                                margin: "5px",
                            }}
                        />
                        <span className="text-white">Vivek Prajapati</span>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header
