import React from 'react';
import { Link } from 'react-router-dom';

function Header({ backgroundUrl, headingText, paragraphText }) {
  return (
    <header 
      className="shadow-md sticky top-0 z-10"
      style={{
        height: '200px', 
        backgroundSize: 'cover', 
        backgroundImage: `url(${backgroundUrl})`
      }}
    >
      <div className="container mx-auto px-4">
        <div className="relative flex items-center justify-center py-4" style={{ overflow: 'hidden' }}>
          {/*<img 
            src={left} 
            alt="" 
            className="absolute top-1 left-[-8vw] w-[15vw] h-[18vh] min-w-[100px] min-h-[80px] max-w-[200px] max-h-[150px] object-contain" 
          />*/}
          <div className="text-center z-10">
            <h1 className="text-2xl md:text-4xl font-bold text-black mt-2">{headingText}</h1>
            <p className="text-[18px] text-gray-600 mt-3">{paragraphText}</p>
          </div>
          {/*<img 
            src={right} 
            alt="" 
            className="absolute top-1 right-[-8vw] w-[15vw] h-[18vh] min-w-[100px] min-h-[80px] max-w-[200px] max-h-[150px] object-contain" 
          />*/}
        </div>
        <nav className="mt-5 w-full">
          <ul className="flex justify-center space-x-[45px] text-sm md:text-base overflow-x-auto pb-1 text-black" 
          style={{ scrollbar: 'none',fontWeight:'bold' }}>
            <li><Link to="/" className="whitespace-nowrap hover:text-[green] cursor-pointer">Furniture</Link></li>
            <li><Link to="/" className="whitespace-nowrap hover:text-[green] cursor-pointer">Kitchen & Dining</Link></li>
            <li><Link to="/" className="whitespace-nowrap hover:text-[green] cursor-pointer">Home Decor</Link></li>
            <li><Link to="/" className="whitespace-nowrap hover:text-[green] cursor-pointer">Garden and Outdoor</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
