import React from "react";
import career from "../../../assets/career_page_cover.png";
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
        "A UX/UI designer focuses on creating user-friendly and visually appealing digital interfaces. They blend user experience (UX) and user interface (UI) design to enhance usability and accessibility while ensuring the product is engaging and intuitive.",
    },
    {
      name: "Video Editor",
      role: "Video Editing",
      image: video,
      description:
        "A video editor is responsible for assembling raw footage into a polished final product. They cut, arrange, and enhance video clips, adding transitions, effects, and audio to create engaging visual stories.",
    },
    {
      name: "Product Engineer",
      role: "Product Management Engineer",
      image: product,
      description:
        "A product engineer designs, develops, and improves products, focusing on functionality and performance. They work closely with design and manufacturing teams to ensure products meet specifications and quality standards. Their role involves prototyping, testing, and refining products ",
    },
    {
      name: "Content Writer",
      role: "Writing E-commerce Content",
      image: content,
      description:
        "A content writer creates engaging and informative written material for various platforms, such as websites, blogs, and social media. They research topics, craft clear and compelling content, and tailor their writing to target audiences.",
    },
    // Add more leadership members as needed
  ];

  return (
    <div className="bg-gradient-to-b from-[#fff0e3] to-white min-h-screen md:w-auto w-fit">
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
      <section className="py-10 bg-green-50 md:py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-16 text-green-800 underline">
          Our Role
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
                    <p className="text-green-300 text-xs md:text-sm">{leader.role}</p>
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
      </section>
    </div>
  );
};

export default CareerPage;
