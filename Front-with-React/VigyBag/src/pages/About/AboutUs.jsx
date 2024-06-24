import React from 'react';
import founder from '../../assets/founder.jpeg'
import cofounder from '../../assets/co-founder.jpeg'
import tanmay from '../../assets/tanmay.jpg';
import anuja from '../../assets/ANUJA-SINGH.png';
import archana from '../../assets/tanmay.jpg';
import yatra from '../../assets/YATRA-VISHWAKARMA.png';
import ContributorCard from '../../components/About/ContributorCard';


  

  
  const MeetContributors = () => {
    return (
      <section className="mt-16">
        <h2 className="text-3xl font-bold mb-8">Meet Our Contributors</h2>
        <div className="bg-gray-200 p-8 rounded-lg relative">
          {/* This is a placeholder for the network diagram */}
          <div className="h-64 flex items-center justify-center">
            <p className="text-gray-500">Network diagram placeholder</p>
          </div>
          
        </div>
      </section>
    );
  };
const AboutVigybag = () => {
  return (
    <div className="bg-[url('/path-to-leaf-background.jpg')] bg-cover bg-center p-8 text-white min-h-screen">
      <h1 className="text-5xl font-bold mb-6 text-center">ABOUT VIGYBAG</h1>
      <p className="text-center mb-8">Lorem ipsum dolor sit amet consectetur. Sit velit neque bibendum orci sit et ipsum. Egestas orci nullam nullam porttitor molestie dolor.</p>
      
      <div className="space-y-8">
        <TeamMember
          name="Vivek Prajapati"
          role="FOUNDER"
          image={founder}
          description="Vivek Prajapati, the visionary founder of VigyBag, is an expert in design and web development with a keen interest in Android development. His exceptional leadership qualities shine through as he constantly guides and motivates his team, fostering a culture of innovation and dedication. With his strong background in design, Vivek ensures that VigyBag offers an aesthetically pleasing and user-friendly shopping experience for eco-conscious consumers. Vivek's passion for technology and sustainability drives the continuous improvement of VigyBag, making it a leader in the eco-friendly market. Under his leadership, VigyBag is not just an online store but a movement towards a greener future, inspiring both his team and customers to embrace a sustainable lifestyle."
        />
        
        <TeamMember
          name="Gyan Sharma"
          role="Co-FOUNDER"
          image={cofounder}
          description="Co-founder Gyan Sharma complements Vivek's technical prowess with his strategic vision and operational expertise. Gyan brings a wealth of experience in sustainable business practices and has been instrumental in shaping VigBag's eco-friendly policies. His passion for VigBag. His keen eye for detail and commitment to ethical sourcing practices ensures that every VigBag product meets the highest standards of sustainability. Together, Vivek and Gyan form a dynamic duo, united by their shared passion for the environment and determination to make a positive impact through their business. Their combined leadership propels VigBag forward, inspiring a greener and more sustainable future."
        />
      </div>
      
      <section className="mt-8 bg-[#fff0e3ff] text-black rounded-3xl p-6">
        <h2 className="text-2xl font-semibold mb-4">What we aim for?</h2>
        <p className="text-sm">Lorem ipsum dolor sit amet consectetur. Etiam diam eu lorem et erat cursus vel pretium. Aliquot eget mattis duis vulputate tortor at ultricies eros sagittis. Ut donec sit lacus turpis maecenas molestie hendrerit sit porttitor. Nulla turpis viverra molestie hendrerit malesuada egestas in porttitor. Nec quis nibh enim id malesuada. Ac diam consectetur pharetra potentissue nisi magna vulputate vitae neque suspendisse et. Etiam venenatis index neque vitae dapibus facilisis.</p>
      </section>
      
      <section className="mt-8 bg-[#fff0e3ff] text-black rounded-3xl p-6">
        <h2 className="text-2xl font-semibold mb-4">How it started?</h2>
        <p className="text-sm">Lorem ipsum dolor sit amet consectetur. Etiam diam eu lorem et erat cursus vel pretium. Aliquot eget mattis duis vulputate tortor at ultricies eros sagittis. Ut donec sit lacus turpis maecenas molestie hendrerit sit porttitor. Nulla turpis viverra molestie hendrerit malesuada egestas in porttitor. Nec quis nibh enim id malesuada. Ac diam consectetur pharetra potentissue nisi magna vulputate vitae neque suspendisse et. Etiam venenatis index neque vitae dapibus facilisis.</p>
      </section>
      <ContributorCard/>

      
      
    </div>
  );
};

const TeamMember = ({ name, role, image, description }) => {
  return (
    <div className="bg-[#fff0e3ff] text-black bg-opacity-20 rounded-3xl p-6 flex flex-col md:flex-row items-center md:items-start">
      <img src={image} alt={name} className="w-32 h-32 rounded-full mb-4 md:mb-0 md:mr-6" />
      <div>
        <h3 className="text-2xl font-semibold">{name}</h3>
        <p className="text-xl text-green-400 mb-2">{role}</p>
        <p className="text-sm">{description}</p>
        <div className="mt-4 flex space-x-2">
          <SocialIcon icon="facebook" />
          <SocialIcon icon="twitter" />
          <SocialIcon icon="linkedin" />
          <SocialIcon icon="instagram" />
        </div>
      </div>
    </div>
  );
};

const SocialIcon = ({ icon }) => {
  return (
    <a href="#" className="w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center">
      {/* Replace with actual icon */}
      <span className="text-xs">{icon[0].toUpperCase()}</span>
    </a>
  );
};



export default AboutVigybag;