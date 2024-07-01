<<<<<<< Updated upstream
import React from 'react';
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import anuja from '../../assets/ANUJA-SINGH.png';
import tanmay from '../../assets/tanmay.jpg';
import archana from '../../assets/ARCHANA-KRISHNA.png';
import yatra from '../../assets/YATRA-VISHWAKARMA.png';
import harshita from '../../assets/HARSHITA-BHAMBHANI.png';
import anshuman from '../../assets/ANSHUMAN-TIWARI.png';
import ContributorCard from '../../components/ContributorCard/ContributorCard';
import coFounder from '../../assets/co-founder.jpeg';
import founder from '../../assets/founder.jpeg';
import app from '../../assets/app.png';
import Networkdiagram from '../../components/Networkdiagram/Networkdiagram';
=======
import React from "react";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import anuja from "../../assets/ANUJA-SINGH.png";
import tanmay from "../../assets/tanmay.jpg";
import archana from "../../assets/ARCHANA-KRISHNA.png";
import yatra from "../../assets/YATRA-VISHWAKARMA.png";
import harshita from "../../assets/HARSHITA-BHAMBHANI.png";
import anshuman from "../../assets/ANSHUMAN-TIWARI.png";
import ContributorCard from "../../components/ContributorCard/ContributorCard";
import coFounder from "../../assets/co-founder.jpeg";
import founder from "../../assets/founder.jpeg";
import app from "../../assets/app.png";
>>>>>>> Stashed changes

const AboutUs = () => {
  const contributorsData = [
    
    {
      name: "ANUJA SINGH",
      role: "UI/UX DESIGNER",
      image: anuja,
      socialLinks: [
        { name: "Instagram", url: "#", icon: <FaInstagram /> },
<<<<<<< Updated upstream
        { name: "LinkedIn", url: "https://www.linkedin.com/in/anuja-singh-864068250?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", icon: <FaLinkedin /> },
        { name: "Twitter", url: "https://x.com/AnujaSingh34074?t=JfS-9apI0wkVS1PbTGtFKw&s=09", icon: <FaXTwitter /> },
        { name: "GitHub", url: "https://github.com/Anuja1227", icon: <FaGithub /> },
      ]
=======
        {
          name: "LinkedIn",
          url: "https://www.linkedin.com/in/anuja-singh-864068250?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
          icon: <FaLinkedin />,
        },
        {
          name: "Twitter",
          url: "https://x.com/AnujaSingh34074?t=JfS-9apI0wkVS1PbTGtFKw&s=09",
          icon: <BsTwitterX />,
        },
        {
          name: "GitHub",
          url: "https://github.com/Anuja1227",
          icon: <FaGithub />,
        },
      ],
>>>>>>> Stashed changes
    },
    {
      name: "TANMAY MIRGAL",
      role: "FRONTEND DEVELOPER",
      image: tanmay,
      socialLinks: [
<<<<<<< Updated upstream
        { name: "Instagram", url: "https://www.instagram.com/https.tanmay_mirgal/", icon: <FaInstagram /> },
        { name: "LinkedIn", url: "https://www.linkedin.com/in/tanmay-mirgal-1402792a2/", icon: <FaLinkedin /> },
        { name: "Twitter", url: "https://x.com/TanmayMirgal?t=mJp5zJZ_iKDrFF4jw-UF4w&s=08", icon: <FaXTwitter /> }, // Update Twitter URL
        { name: "GitHub", url: "https://github.com/Tanmay-Mirgal", icon: <FaGithub /> },
      ]
=======
        {
          name: "Instagram",
          url: "https://www.instagram.com/https.tanmay_mirgal/",
          icon: <FaInstagram />,
        },
        {
          name: "LinkedIn",
          url: "https://www.linkedin.com/in/tanmay-mirgal-1402792a2/",
          icon: <FaLinkedin />,
        },
        { name: "Twitter", url: "#", icon: <BsTwitterX /> },
        {
          name: "GitHub",
          url: "https://github.com/Tanmay-Mirgal",
          icon: <FaGithub />,
        },
      ],
>>>>>>> Stashed changes
    },
    
    {
      name: "ARCHANA KRISHNA",
      role: "UI/UX DESIGNER",
      image: archana,
      socialLinks: [
        { name: "Instagram", url: "#", icon: <FaInstagram /> },
        { name: "LinkedIn", url: "#", icon: <FaLinkedin /> },
        { name: "Twitter", url: "#", icon: <FaXTwitter /> },
        { name: "GitHub", url: "#", icon: <FaGithub /> },
      ],
    },
    {
      name: "YATRA VISHWAKARMA",
      role: "ANDROID DEVELOPER",
      image: yatra,
      socialLinks: [
<<<<<<< Updated upstream
        { name: "Instagram", url: "https://www.instagram.com/yatra.vishwa?igsh=MTNnc2Z5bXRpYnYxcw==", icon: <FaInstagram /> },
        { name: "LinkedIn", url: "https://www.linkedin.com/in/yatra-vishwakarma-25905a293?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", icon: <FaLinkedin /> },
        { name: "Twitter", url: "https://x.com/YatraVishw11?s=09", icon: <FaXTwitter /> },
        { name: "GitHub", url: "https://github.com/Yatra052", icon: <FaGithub /> },
      ]
=======
        {
          name: "Instagram",
          url: "https://www.instagram.com/yatra.vishwa?igsh=MTNnc2Z5bXRpYnYxcw==",
          icon: <FaInstagram />,
        },
        {
          name: "LinkedIn",
          url: "https://www.linkedin.com/in/yatra-vishwakarma-25905a293?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
          icon: <FaLinkedin />,
        },
        {
          name: "Twitter",
          url: "https://x.com/YatraVishw11?s=09",
          icon: <BsTwitterX />,
        },
        {
          name: "GitHub",
          url: "https://github.com/Yatra052",
          icon: <FaGithub />,
        },
      ],
>>>>>>> Stashed changes
    },
    {
      name: "HARSHITA BHAMBHANI",
      role: "Full Stack Developer",
      image: harshita,
      socialLinks: [
        { name: "Instagram", url: "#", icon: <FaInstagram /> },
        { name: "LinkedIn", url: "#", icon: <FaLinkedin /> },
        { name: "Twitter", url: "#", icon: <FaXTwitter/> },
        { name: "GitHub", url: "#", icon: <FaGithub /> },
      ],
    },
    {
      name: "ANSHUMAN TIWARI",
      role: "Full Stack Developer",
      image: anshuman,
      socialLinks: [
<<<<<<< Updated upstream
        { name: "Instagram", url: "https://www.instagram.com/ansh_.5911/", icon: <FaInstagram /> },
        { name: "LinkedIn", url: "https://www.linkedin.com/in/anshumantiiwari/", icon: <FaLinkedin /> },
        { name: "Twitter", url: "https://x.com/Realthugus", icon: <FaXTwitter/> },
        { name: "GitHub", url: "https://github.com/Ansh101112", icon: <FaGithub /> },
      ]
=======
        {
          name: "Instagram",
          url: "https://www.instagram.com/ansh_.5911/",
          icon: <FaInstagram />,
        },
        {
          name: "LinkedIn",
          url: "https://www.linkedin.com/in/anshumantiiwari/",
          icon: <FaLinkedin />,
        },
        {
          name: "Twitter",
          url: "https://x.com/Realthugus",
          icon: <BsTwitterX />,
        },
        {
          name: "GitHub",
          url: "https://github.com/Ansh101112",
          icon: <FaGithub />,
        },
      ],
>>>>>>> Stashed changes
    },
  ];

  const leadershipData = [
    {
      name: "Vivek Prajapati",
      role: "Founder",
      image: founder,
      description: "Vivek Prajapati, the visionary founder of VigyBag, is an expert in web and app development with a keen interest in Android development.",
      socialLinks: [
        { name: "Instagram", url: "https://www.instagram.com/coder_vivek/", icon: <FaInstagram /> },
        { name: "LinkedIn", url: "https://www.linkedin.com/in/codervivek/", icon: <FaLinkedin /> },
        { name: "GitHub", url: "https://github.com/codervivek5", icon: <FaGithub /> },
        { name: "Twitter", url: "https://x.com/codervivek5?mx=2", icon: <FaXTwitter/> }
      ]
    },
    {
      name: "Gyan Sharma",
      role: "Co-Founder",
      image: coFounder,
      description: "Co-founder Gyan Sharma complements Vivek's technical prowess with strategic vision and operational expertise in sustainable business practices.",
      socialLinks: [
        { name: "Instagram", url: "https://www.instagram.com/gyan5195/", icon: <FaInstagram /> },
        { name: "LinkedIn", url: "https://www.linkedin.com/in/gyan-sharma", icon: <FaLinkedin /> },
        { name: "GitHub", url: "https://github.com/gyansharma", icon: <FaGithub /> },
        { name: "Twitter", url: "https://twitter.com/gyansharma", icon: <FaXTwitter/> }
      ]
    },
    // Add more leadership members as needed
  ];

  return (
<<<<<<< Updated upstream
    <div className="bg-gradient-to-b from-[#fff0e3] to-white min-h-screen">
      {/* Reduced Height Header Section */}
      <header className="relative h-64 md:h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={app} alt="Background" className="w-full h-full object-cover filter blur-sm" />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-2 md:mb-4">About VigyBag</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">Revolutionizing eco-friendly shopping with innovative technology and sustainable practices.</p>
        </div>
      </header>

      {/* Leadership Section */}
      <section className="py-12 md:py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-16 text-green-800">Our Leadership</h2>
          <hr className="border-2 border-green-600 w-1/2 mx-auto mb-10 -mt-6" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {leadershipData.map((leader, index) => (
              <div key={index} className="bg-white rounded-lg shadow-xl overflow-hidden transform transition duration-500 hover:scale-105">
                <div className="relative h-48 md:h-64">
                  <img src={leader.image} alt={leader.name} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                    <h3 className="text-xl md:text-2xl font-semibold text-white">{leader.name}</h3>
                    <p className="text-green-300">{leader.role}</p>
                  </div>
                </div>
                <div className="p-4 md:p-6">
                  <p className="text-sm md:text-base text-gray-600 mb-4">{leader.description}</p>
                  <div className="flex justify-start space-x-4">
                    {leader.socialLinks.map((link, index) => (
                      <a key={index} href={link.url} className="text-xl md:text-2xl text-gray-800 hover:text-black cursor-pointer" target="_blank" rel="noopener noreferrer">
                        {link.icon}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
=======
    <div className="bg-[#fff0e3ff]" style={{ width: "100%" }}>
      <div className="p-8 bg-[#fff0e3ff] text-gray-800 max-w-6xl mx-auto">
        <section
          className="bg-[#FFF5EA] py-2 md:py-2 lg:py-24 flex items-center"
          style={{
            backgroundImage: `url(${app})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            minHeight: "4vh",
            height: "auto",
            borderRadius: "20px",
          }}>
          <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
            <div className="w-full md:w-2/3 lg:w-1/2 pr-0 md:pr-8 text-center md:text-left">
              <h1
                className="text-4xl font-bold mb-4 px-20 text-black flex relative"
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  left: "20vw",
                }}>
                ABOUT VIGYBAG
              </h1>
            </div>
          </div>
        </section>

        <div className="flex flex-col md:flex-row items-center justify-between mb-8 mt-10">
          <div className="w-full md:w-5/12 p-4 flex flex-col items-center text-center bg-gray-100 rounded-lg shadow-md">
            <img
              src={founder}
              alt="Vivek Prajapati"
              className="rounded-full w-32 h-32 mb-4 border-4 border-green-500"
            />
            <h3 className="text-2xl font-semibold text-green-700">
              Vivek Prajapati
            </h3>
            <p className="italic mb-2 text-gray-500">Founder</p>
            <p className="text-center text-sm">
              Vivek Prajapati, the visionary founder of VigyBag, is an expert in
              web and app development with a keen interest in Android
              development. His exceptional talent has been instrumental in
              driving...
            </p>
          </div>
          <div className="w-full md:w-5/12 p-4 flex flex-col items-center text-center bg-gray-100 rounded-lg shadow-md">
            <img
              src={coFounder}
              alt="Gyan Sharma"
              className="rounded-full w-32 h-32 mb-4 border-4 border-green-500"
            />
            <h3 className="text-2xl font-semibold text-green-700">
              Gyan Sharma
            </h3>
            <p className="italic mb-2 text-gray-500">Co-Founder</p>
            <p className="text-center text-sm">
              Co-founder Gyan Sharma complements Vivek's technical prowess with
              strategic vision and operational expertise. With a wealth of
              experience in sustainable business practices and a passion for
              innovation, Gyan plays a crucial role...
            </p>
          </div>
        </div>
        <div className="mt-8">
          <h3 className="text-3xl font-bold mb-2 text-black">
            What we aim for?
          </h3>
          <p className="text-gray-700">
            Our mission is to create innovative and sustainable solutions that
            address the challenges faced by our community. By leveraging
            technology and creative thinking, we aim to provide...
          </p>
        </div>
        <div className="mt-8">
          <h3 className="text-3xl font-bold mb-2 text-black ">
            How it started?
          </h3>
          <p className="text-gray-700">
            The journey of VigyBag began with a simple idea to revolutionize the
            industry by integrating eco-friendly practices and cutting-edge
            technology...
          </p>
        </div>
        <div className="mt-8">
          <h2 className="text-3xl font-bold mb-4 text-center mt-20 -mb-1">
            Meet Our Contributors
          </h2>
          <hr
            className=""
            style={{
              border: "2px solid forestgreen",
              width: "50%",
              margin: "0 auto",
              marginBottom: "30px",
            }}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {contributorsData.map((contributor, index) => (
              <ContributorCard key={index} {...contributor} />
>>>>>>> Stashed changes
            ))}
          </div>
        </div>
      </section>

      {/* Other Sections */}
      <div className="container mx-auto px-4">
        {/* Add other sections as needed */}
      </div>

      {/* Contributors Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4 text-center">Meet Our Contributors</h2>
          <hr className="border-2 border-green-600 w-1/2 mx-auto mb-10" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {contributorsData.map((contributor, index) => (
              <ContributorCard key={index} {...contributor} roleColor="text-green-600" />
            ))}
          </div>
          <div className="flex justify-center mt-8">
            <button className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition duration-300">
              See More
            </button>
          </div>
        </div>
      </section>

      {/* Network Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4 text-center">Our Network</h2>
          <hr className="border-2 border-green-600 w-1/2 mx-auto mb-10" />
          <Networkdiagram />
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
