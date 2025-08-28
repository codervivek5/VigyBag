import React from "react";
import career from "../../../assets/career_page_cover.webp";
import UX from "../../../assets/uxui designer.jpg";
import video from "../../../assets/video editing.jpg";
import content from "../../../assets/Content_Writer.avif";
import product from "../../../assets/product-engineering.jpg";
import Header from "../../components/About/CarrerHeader";

const CareerPage = () => {
  const leadershipData = [
    {
      name: "UX/UI Designer",
      role: "Graphic Designing",
      image: UX,
      description:
        "Designs user-friendly and visually appealing interfaces, ensuring usability and accessibility.",
    },
    {
      name: "Video Editor",
      role: "Video Editing",
      image: video,
      description:
        "Edits and assembles video footage, adding effects and audio to produce professional content.",
    },
    {
      name: "Product Engineer",
      role: "Product Management Engineer",
      image: product,
      description:
        "Develops and improves products, focusing on functionality, quality, and performance.",
    },
    {
      name: "Content Writer",
      role: "Writing E-commerce Content",
      image: content,
      description:
        "Produces clear and engaging written material tailored for digital platforms and audiences.",
    },
    // Add more leadership members as needed
  ];

  return (
+    <div className="bg-gradient-to-b from-[#fff0e3] to-white min-h-screen w-full">
      <Header />

      <section>
        <div className="relative mt-8">
          <img src={career} alt="" className="w-full h-full object-cover mx-auto" />
          <div className="absolute top-1/2 right-0 transform -translate-y-1/2 w-1/2 flex flex-col items-center justify-center px-4 md:px-8">
            <h2 className="font-bold text-white text-center">
              <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold text-white drop-shadow-lg">
                Maximise
              </span>
            </h2>
            <p className="font-bold text-white mt-4 text-center text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
              Come to VigyBag to maximise
              yourself because when you maximise, we maximise.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-10 md:py-20 relative overflow-hidden">
        {/* Split background */}
        <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-[#f0fdf4]" />
          <div className="absolute bottom-0 left-0 w-full h-1/2" style={{ background: "#97c49f" }} />
        </div>
        <div className="relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 md:mb-16 text-green-800">
            Join Our Team
          </h2>
          <div className="container mx-auto px-2 md:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8 w-full max-w-7xl mx-auto">
              {leadershipData.map((leader, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-xl overflow-hidden transform transition duration-500 hover:scale-105 w-full"
                  style={{ minWidth: 0 }}
                >
                  <div className="relative h-40 md:h-48">
                    <img
                      src={leader.image}
                      alt={leader.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-2 md:p-3">
                      <h3 className="text-lg md:text-xl font-semibold text-white">
                        {leader.name}
                      </h3>
                      <p className="text-green-300 text-xs md:text-sm">
                        {leader.role}
                      </p>
                    </div>
                  </div>
                  <div className="p-2 md:p-3">
                    <p className="text-xs md:text-sm text-gray-600 mb-2">
                      {leader.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CareerPage;
