import React from 'react';
import anuja from '../../assets/ANUJA-SINGH.png';
import tanmay from '../../assets/tanmay.jpg';
import archana from '../../assets/ARCHANA-KRISHNA.png';
import yatra from '../../assets/YATRA-VISHWAKARMA.png';
import harshita from '../../assets/HARSHITA-BHAMBHANI.png';
import  anshuman from '../../assets/ANSHUMAN-TIWARI.png';

const ContributorCard = ({ name, role, image, socialLinks }) => {
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
          {socialLinks.map((link, index) => (
            <a 
              key={index} 
              href={link.url}
              target="_blank"
              rel="noopener noreferrer" 
              className="w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <img src={link.icon} alt={link.name} className="w-5 h-5" />
            </a>
          ))}
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
        { name: "LinkedIn", url: "#", icon: "https://example.com/path-to-linkedin-icon.svg" },
        { name: "Twitter", url: "#", icon: "https://example.com/path-to-twitter-icon.svg" },
        { name: "GitHub", url: "#", icon: "https://example.com/path-to-github-icon.svg" },
      ]
    },
    {
      name: "TANMAY MIRGAL",
      role: "FRONTEND DEVELOPER",
      image: tanmay,
      socialLinks: [
        { name: "LinkedIn", url: "#", icon: "https://example.com/path-to-linkedin-icon.svg" },
        { name: "Twitter", url: "#", icon: "https://example.com/path-to-twitter-icon.svg" },
        { name: "GitHub", url: "#", icon: "https://example.com/path-to-github-icon.svg" },
      ]
    },
    {
      name: "ARCHANA KRISHNA",
      role: "UI/UX DESIGNER",
      image: archana,
      socialLinks: [
        { name: "LinkedIn", url: "#", icon: "https://example.com/path-to-linkedin-icon.svg" },
        { name: "Twitter", url: "#", icon: "https://example.com/path-to-twitter-icon.svg" },
        { name: "GitHub", url: "#", icon: "https://example.com/path-to-github-icon.svg" },
      ]
    },
    {
      name: "YATRA VISHWAKARMA",
      role: "ANDROID DEVELOPER",
      image: yatra,
      socialLinks: [
        { name: "LinkedIn", url: "#", icon: "https://example.com/path-to-linkedin-icon.svg" },
        { name: "Twitter", url: "#", icon: "https://example.com/path-to-twitter-icon.svg" },
        { name: "GitHub", url: "#", icon: "https://example.com/path-to-github-icon.svg" },
      ]
    },
    {
      name: "HARSHITA BHAMBHANI",
      role: "Full Stack Developer",
      image: harshita,
      socialLinks: [
        { name: "LinkedIn", url: "#", icon: "https://example.com/path-to-linkedin-icon.svg" },
        { name: "Twitter", url: "#", icon: "https://example.com/path-to-twitter-icon.svg" },
        { name: "GitHub", url: "#", icon: "https://example.com/path-to-github-icon.svg" },
      ]
    },
    {
      name: "ANSHUMAN-TIWARI",
      role: "Backend Developer",
      image: anshuman,
      socialLinks: [
        { name: "LinkedIn", url: "#", icon: "https://example.com/path-to-linkedin-icon.svg" },
        { name: "Twitter", url: "#", icon: "https://example.com/path-to-twitter-icon.svg" },
        { name: "GitHub", url: "#", icon: "https://example.com/path-to-github-icon.svg" },
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