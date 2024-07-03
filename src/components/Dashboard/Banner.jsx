import React from 'react';
import carryBag from "../../assets/vigybag-carry-bag.png";
import profile from "../../assets/profile.png";

function Banner() {
    return (
        <>
            <div
                className="bg-[#686469ff] p-6 rounded-lg shadow-lg text-white mb-6"
                style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "row",
                }}
            >
                <div
                    style={{ width: "100%", display: "flex", flexDirection: "column" }}
                >
                    <h1 className="text-3xl ml-3 ">
                        Welcome Back,{" "}
                        <span style={{ color: "#faf48cff" }}>Vivek Prajapati</span>
                    </h1>
                    <h1 className=" text-xl ml-3 mt-2">What will u learn today?</h1>
                </div>

                <div className="flex mt-3 mr-20 ">
                    <img
                        src={carryBag}
                        alt=""
                        style={{ width: "13vw", height: "19vh" }}
                    />
                </div>
            </div>
        </>
    )
}

export default Banner
