import React from 'react';
import avatar from '../../assets/avatar.png';
import like from '../../assets/like.png';
import comb from '../../assets/comb.jpg';
import Similarproducts from '../Products/Similarproducts';

const sharedClasses = {
  textGray: 'text-zinc-600 dark:text-zinc-300',
  roundedFull: 'rounded-full',
  roundedLg: 'rounded-lg',
  mb4: 'mb-4',
  flexSpaceX2: 'flex space-x-2',
  buttonBase: 'px-4 py-2 border rounded-lg',
  buttonGreen: 'px-4 py-2 bg-green-600 text-white rounded-lg',
};

const ProductImage = () => (
  <div className="w-full md:w-1/2">
    <img src={comb} alt="Product Image" className={`${sharedClasses.roundedLg} ${sharedClasses.mb4}`} style={{ height: '70vh', marginLeft: '8vw' }} />
    <div className={`${sharedClasses.flexSpaceX2} ${sharedClasses.mb4}`}>
      <img src={comb} alt="Thumbnail 1" className="w-15 rounded-lg" style={{ height: '10vh', marginLeft: '8vw' }} />
      <img src={comb} alt="Thumbnail 2" className="w-15 rounded-lg" style={{ height: '10vh' }} />
      <img src={comb} alt="Thumbnail 3" className="w-15 rounded-lg" style={{ height: '10vh' }} />
    </div>
  </div>
);

const ProductDetails = () => (
  <div className="w-full md:w-1/2 md:pl-6">
    <h2 className="text-2xl font-bold mb-2">Bamboo India</h2>
    <p className={`${sharedClasses.textGray} ${sharedClasses.mb4}`}>Eco-friendly Handmade Bamboo Comb | Reduce Breakage and Hairfall</p>
    <p className="text-xl font-semibold mb-2">₹175 <span className="line-through text-zinc-500">₹249</span> (30% OFF)</p>
    <p className="text-zinc-500 dark:text-zinc-400 mb-4">Inclusive of taxes</p>
    <ColorOptions />
    <SizeOptions />
    <DeliveryOptions />
    <ActionButtons />
    <ProductInfo />
    <ProductRatings />
    <CustomerFeedback />
  </div>
);

const ColorOptions = () => (
  <div className={sharedClasses.mb4}>
    <label className={`block text-zinc-700 dark:text-zinc-300 mb-2`}>More Colors</label>
    <div className={sharedClasses.flexSpaceX2}>
      <div className="w-8 h-8 bg-zinc-400 rounded-full"></div>
      <div className="w-8 h-8 bg-zinc-600 rounded-full"></div>
      <div className="w-8 h-8 bg-zinc-800 rounded-full"></div>
    </div>
  </div>
);

const SizeOptions = () => (
  <div className={sharedClasses.mb4}>
    <label className={`block text-zinc-700 dark:text-zinc-300 mb-2`}>Select Size</label>
    <div className={sharedClasses.flexSpaceX2}>
      <button className={sharedClasses.buttonBase}>S</button>
      <button className={sharedClasses.buttonBase}>M</button>
      <button className={sharedClasses.buttonBase}>L</button>
    </div>
  </div>
);

const DeliveryOptions = () => (
  <div className={sharedClasses.mb4}>
    <label className={`block text-zinc-700 dark:text-zinc-300 mb-2`}>Delivery Options</label>
    <div className={sharedClasses.flexSpaceX2}>
      <input type="text" placeholder="Enter Pincode" className="px-4 py-2 border rounded-lg flex-1" />
      <button className={sharedClasses.buttonGreen}>Check</button>
    </div>
  </div>
);

const ActionButtons = () => (
  <div className={sharedClasses.mb4}>
    <button className={`${sharedClasses.buttonGreen} w-full mb-2`}>Add to Cart</button>
    <button className="w-full px-4 py-2 bg-zinc-200 dark:bg-zinc-700 text-zinc-700 dark:text-zinc-300 rounded-lg">Wishlist</button>
  </div>
);

const ProductInfo = () => (
  <div className={sharedClasses.mb4}>
    <h3 className="text-lg font-semibold mb-2">Product Details</h3>
    <p className={`${sharedClasses.textGray} mb-1`}>Pattern: Solid</p>
    <p className={`${sharedClasses.textGray} mb-1`}>Sleeve Length: Short Sleeves</p>
    <p className={`${sharedClasses.textGray} mb-1`}>Neck: Round Neck</p>
    <p className={`${sharedClasses.textGray} mb-1`}>Sustainable: Regular</p>
    <p className={`${sharedClasses.textGray} mb-1`}>Wash Care: Machine Wash</p>
    <p className={`${sharedClasses.textGray} mb-1`}>Country of Origin: India</p>
  </div>
);

const ProductRatings = () => (
  <div className={sharedClasses.mb4}>
    <h3 className="text-lg font-semibold mb-2">Product Ratings & Reviews</h3>
    <div className="flex items-center mb-2">
      <span className="text-2xl font-bold">3.7</span>
      <span className="text-yellow-500 ml-2">★</span>
    </div>
    <p className={`${sharedClasses.textGray} mb-2`}>204 Ratings, 36 Reviews</p>
    <RatingBar label="Excellent" width="2/3" color="bg-green-600" />
    <RatingBar label="Very Good" width="1/2" color="bg-green-500" />
    <RatingBar label="Good" width="1/3" color="bg-green-400" />
    <RatingBar label="Average" width="1/4" color="bg-green-300" />
  </div>
);

const RatingBar = ({ label, width, color }) => {
  // Convert width prop to Tailwind CSS grid column classes
  const gridColumnClasses = {
    '1/4': 'w-1/4',
    '1/3': 'w-1/3',
    '1/2': 'w-1/2',
    '2/3': 'w-2/3',
  };

  return (
    <div className="flex items-center mb-1">
      <span className={`flex-1 ${sharedClasses.textGray}`}>{label}</span>
      <div className={`${gridColumnClasses[width]} ${color} h-2 rounded-lg`}></div>
    </div>
  );
};

const CustomerFeedback = () => (
  <div className={sharedClasses.mb4}>
    <h3 className="text-lg font-semibold mb-2">Customer Feedback</h3>
    <div className="p-4 bg-[#798280ff] rounded-lg text-white">
      <div className="flex items-center mb-2">
        <img src={avatar} alt="User Avatar" className={`w-12 h-12 ${sharedClasses.roundedFull} mr-2`} />
        <div>
          <p className="font-semibold">User Name</p>
          <p className="text-sm text-white">Posted on May 2023</p>
        </div>
      </div>
      <p className=" mb-2 text-white">This is a good comb. It's very comfortable, and the size is just right... but great. Nice buy!</p>
      <div className="flex items-center">
        <img src={like} alt="Product Thumbnail" className={`w-12 h-12 ${sharedClasses.roundedLg} mr-2`} />
        <span className="text-white">Likes: 21</span>
      </div>
    </div>
  </div>
);

const ProductPage = () => (
  <div className="bg-[#fff0e3ff]">
    <div className="max-w-full mx-auto bg-[#fff0e3ff] rounded-lg shadow-md p-6">
      <div className="flex flex-col md:flex-row">
        <ProductImage />
        <ProductDetails />
      </div>
      <Similarproducts />
    </div>
  </div>
);

export default ProductPage;
