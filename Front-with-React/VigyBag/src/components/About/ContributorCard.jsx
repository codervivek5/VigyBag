import React from 'react';
import { FaLinkedin, FaTwitter, FaGithub, FaInstagram } from 'react-icons/fa';
import tanmay from '../../assets/tanmay.jpg';
import anuja from '../../assets/ANUJA-SINGH.png';
import archana from '../../assets/tanmay.jpg';
import yatra from '../../assets/YATRA-VISHWAKARMA.png';
import anshuman from '../../assets/ANSHUMAN-TIWARI.png';

const ContributorCard = ({ name, role, image, socialLinks }) => {
  const socialIconComponents = {
    LinkedIn: FaLinkedin,
    Twitter: FaTwitter,
    GitHub: FaGithub,
    Instagram: FaInstagram,
  };

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg max-w-sm transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1">
      <div className="relative">
        <img src={image} alt={name} className="w-full h-72 object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h3 className="text-2xl font-bold text-white mb-1">{name}</h3>
          <p className="text-sm text-gray-300 font-medium">{role}</p>
        </div>
      </div>
      <div className="p-6 bg-gray-50">
        <p className="text-sm text-gray-600 mb-3 font-medium">Let's Connect On:</p>
        <div className="flex space-x-3">
          {socialLinks.map((link, index) => {
            const IconComponent = socialIconComponents[link.name];
            return (
              <a 
                key={index} 
                href={link.url}
                target="_blank"
                rel="noopener noreferrer" 
                className="w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <IconComponent className="w-5 h-5 text-gray-600" />
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const App = () => {
  const contributorsData = [
    {
      name: "ANUJA SINGH",
      role: "UI/UX DESIGNER",
      image: anuja,
      socialLinks: [
        { name: "LinkedIn", url: "https://www.linkedin.com/in/anuja-singh-864068250/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
        { name: "Twitter", url: "https://x.com/AnujaSingh34074?t=JfS-9apI0wkVS1PbTGtFKw&s=09" },
        { name: "GitHub", url: "https://github.com/Anuja1227" },
        { name: "Instagram", url: "https://www.instagram.com/anuja_singh" },
      ]
    },
    {
      name: "TANMAY MIRGAL",
      role: "FRONTEND DEVELOPER",
      image: tanmay,
      socialLinks: [
        { name: "LinkedIn", url: "https://www.linkedin.com/in/tanmay-mirgal-1402792a2/" },
        { name: "Twitter", url: "#" },
        { name: "GitHub", url: "https://github.com/Tanmay-Mirgal" },
        { name: "Instagram", url: "https://www.instagram.com/https.tanmay_mirgal/" },
      ]
    },
    {
      name: "ARCHANA KRISHNA",
      role: "UI/UX DESIGNER",
      image: archana,
      socialLinks: [
        { name: "LinkedIn", url: "#" },
        { name: "Twitter", url: "#" },
        { name: "GitHub", url: "#" },
        { name: "Instagram", url: "#" },
      ]
    },
    {
      name: "YATRA VISHWAKARMA",
      role: "ANDROID DEVELOPER",
      image: yatra,
      socialLinks: [
        { name: "LinkedIn", url: "https://www.linkedin.com/in/yatra-vishwakarma-25905a293?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
        { name: "Twitter", url: "https://x.com/YatraVishw11?s=09" },
        { name: "GitHub", url: "https://github.com/Yatra052" },
        { name: "Instagram", url: "https://www.instagram.com/yatra.vishwa?igsh=MTNnc2Z5bXRpYnYxcw==" },
      ]
    },
    {
      name: "HARSHITA BHAMBHANI",
      role: "ROLE 5",
      image: "",
      socialLinks: [
        { name: "LinkedIn", url: "#" },
        { name: "Twitter", url: "#" },
        { name: "GitHub", url: "#" },
        { name: "Instagram", url: "#" },
      ]
    },
    {
      name: "ANSHUMAN TIWARI",
      role: "ROLE 6",
      image: anshuman,
      socialLinks: [
        { name: "LinkedIn", url: "https://www.linkedin.com/in/anshumantiiwari/" },
        { name: "Twitter", url: "https://x.com/Realthugus" },
        { name: "GitHub", url: "https://github.com/Ansh101112" },
        { name: "Instagram", url: "https://www.instagram.com/ansh_.5911/" },
      ]
    },
  ];

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {contributorsData.map((contributor, index) => (
          <ContributorCard key={index} {...contributor} />
        ))}
      </div>
    </div>
  );
};

export default App;
