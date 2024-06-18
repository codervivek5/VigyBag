import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import background from '../../assets/images/background.png';
import './typewriter.css';
import CategoryCard from '../../components/HomPageCard/CategoryCard';
import Footer from '../../components/Footer/Footer';
import customisedGiftsImg from '../../assets/images/CustomisedGifts.svg'
import HealthSupplementsImg from '../../assets/images/HealthSupplements.svg'
import PrintingAndStationary from '../../assets/images/PrintingAndStationary.svg'
import BodyCare from '../../assets/images/BodyCare.svg'
import FurnitureAndDecor from '../../assets/images/FurnitureAndDecor.png'
import BeautyAndWellness from '../../assets/images/BeautyAndWellness.svg'
import FoodAndBeverages from '../../assets/images/FoodAndBeverages.svg'
import fashionAndAccessories from '../../assets/images/FashionAndAccessories.svg'
import LatestInMarketCard from '../../components/HomPageCard/LatestInMarketCard';



const products = [
  {
    imageUrl: BodyCare,
    title: 'Handmade Soaps',
    description: 'A vibrant collection of artisan soaps that are 100% natural and trustworthy.',
    discount: '10% Off',
  },
  {
    imageUrl: BodyCare,
    title: 'Art Supplies',
    description: 'Natural and cruelty-free collection of art supplies.',
    discount: 'Up to 50% Off',
  },
  {
    imageUrl: BodyCare,
    title: 'Ceramic Dinnerware',
    description: 'Long lasting and sturdy ceramic plates that are eco friendly and safe.',
    discount: 'Buy 1 Get 1',
  },
  {
    imageUrl: BodyCare,
    title: 'Bamboo Products',
    description: 'Natural, non-toxic, biodegradable, handcrafted and help reduce plastic waste and carbon.',
    discount: '20% Off',
  },
  {
    imageUrl: BodyCare,
    title: 'Storage Baskets',
    description: 'Natural basket collection, featuring wide range of handmade, eco-friendly baskets made from sustainable materials.',
    discount: '20% Off',
  },
  {
    imageUrl: BodyCare,
    title: 'Bamboo Products',
    description: 'Natural, non-toxic, biodegradable, handcrafted and help reduce plastic waste and carbon.',
    discount: '20% Off',
  },
  {
    imageUrl: BodyCare,
    title: 'Storage Baskets',
    description: 'Natural basket collection, featuring wide range of handmade, eco-friendly baskets made from sustainable materials.',
    discount: '20% Off',
  },
  {
    imageUrl: BodyCare,
    title: 'Bamboo Products',
    description: 'Natural, non-toxic, biodegradable, handcrafted and help reduce plastic waste and carbon.',
    discount: '20% Off',
  },
];


function Home() {
  return (
    <div 
      style={{
        backgroundColor: '#FCEFE3',
        backgroundImage: `url(${background})`,
        backgroundSize: 'auto',
        backgroundRepeat: 'no-repeat',
        
      }}>
      <div className="container  font-baloo mx-auto my-auto sm:py-24 leading-snug ">
        <div className="text-left">
            <div className="typewriter">
                <h1 className="text-4xl font-baloo sm:text-6xl font-bold tracking-widest">
                Welcome to <span className="text-green-900 ">VigyBag!</span>
                </h1>
            </div>
          <h2 className="text-3xl sm:text-6xl  font-baloo tracking-widest font-bold mt-5 mb-4">Your Eco-Friendly</h2>
          <h2 className="text-3xl sm:text-6xl font-bold mb-8 tracking-widest">Shopping Heaven</h2>
          <p className=" text-lg sm:text-3xl font-baloo mb-8 leadinh-snug tracking-widest">
            At VigyBag, we curate the finest earth-friendly <br></br>
            essentials to help you reduce your environmental <br></br>
            footprint without compromising on quality or style.<br></br> 
            Shop smart, live green, and embrace a sustainable <br></br>
            future with VigyBag.
          </p>
          <button className="bg-green-900  font-baloo text-2xl tracking-widest text-white px-6 py-3 mt-10 rounded-md hover:bg-green-800 transition-colors duration-300">
            Shop Now
          </button>
        </div>
      </div>


      {/* Popular categories */}
        <div className='mt-24 py-10'>
            <h1 className="text-4xl sm:text-6xl font-bold tracking-widest mt-10 mx-20 font-baloo ">Popular Categories</h1>
            <div className="mt-12 mx-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                <CategoryCard
                imageUrl={BodyCare}
                categoryName="Fashion & Accessories"
                />
                <CategoryCard
                imageUrl={BodyCare}
                categoryName="Printing & Stationary"
                />
                <CategoryCard
                imageUrl={BodyCare}
                categoryName="Food & Beverages"
                />  
                {/* Render other category cards here */}
                <CategoryCard
                imageUrl={BodyCare}
                categoryName="Beauty And Wellness"
                />  
                <CategoryCard
                imageUrl={FurnitureAndDecor}
                categoryName="Furniture & Decor"
                />  
                <CategoryCard
                imageUrl={BodyCare}
                categoryName="Body Care"
                />  
                <CategoryCard
                imageUrl={HealthSupplementsImg}
                categoryName="Health Supplements"
                />  
                <CategoryCard
                imageUrl={customisedGiftsImg}
                categoryName="Customised Gifts"
                />  
            </div>
        </div>
      
      {/* Lastest in Market */}
      <div className='mt-24 py-10'>
        <h1 className="text-4xl sm:text-6xl font-bold tracking-widest mt-10 mx-20 font-baloo">Latest in the Market</h1>
        <div className="mt-12 mx-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <LatestInMarketCard
              key={index}
              imageUrl={product.imageUrl}
              title={product.title}
              description={product.description}
              discount={product.discount}
            />
          ))}
        </div>
      </div>
    
    
    </div>
  );
}

export default Home;
