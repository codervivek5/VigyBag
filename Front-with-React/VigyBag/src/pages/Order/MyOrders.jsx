import React from 'react';
import TUMBLER from '../../assets/TUMBLER.png'
import ProgressBar from '../../components/Order/ProgressBar'

const textColor = 'text-zinc-800 dark:text-zinc-200';
const subTextColor = 'text-zinc-600 dark:text-zinc-400` ';
const containerBg = 'bg-[#fcf1e8ff] dark:bg-green-900';
const buttonBase = 'px-4 py-2 rounded-lg';

const OrderInfo = ({ label, value }) => (
  <div >
    <p className={subTextColor}>{label} </p>
    <p className={`font-semibold ${textColor}`}>{value}</p>
  </div>
);

const OrderDetails = ({ orderNumber }) => (
  <div className="flex justify-between items-center mb-6 -mt-7 p-4"style={{backgroundColor:'#d8e6d3ff',borderBottomLeftRadius:"20px",borderBottomRightRadius:'20px'}}>
    <p className={subTextColor}>ORDER #{orderNumber}</p>
    <a href="#" className="text-blue-600 dark:text-blue-400">View order details</a>
  </div>
);

const ProductCard = ({ arrivalDate, productName, productDescription, productImage }) => (
  <div className={`${containerBg} p-4 rounded-lg mb-4 `}style={{border:'1px solid black'}}>
    <p className="text-green-700 dark:text-green-300 font-semibold mb-2">{arrivalDate}</p>
    <div className="flex flex-col md:flex-row items-center">
      <img src={productImage} alt={productName} className="w-20 h-20 rounded-lg mb-4 md:mb-0 md:mr-4" />
      <div className="flex-1 mb-4 md:mb-0">
        <h3 className={`font-bold text-lg ${textColor}`}>{productName}</h3>
        <p className={subTextColor}>{productDescription}</p>
      </div>
      <div className="flex flex-col space-y-2">
        <button className={`bg-green-600 dark:bg-green-700 text-white ${buttonBase}`}>Track Package</button>
        <button className={`bg-zinc-200 dark:bg-zinc-700 text-zinc-700 dark:text-zinc-200 ${buttonBase}`}
        style={{border:'1px solid black'}}>View or edit order</button>
      </div>
    </div>
  </div>
);

const Orders = () => {
  return (
    <div className="bg-[#fff0e3ff] flex mt-1">
      <div className="bg-[#fff0e3ff] p-6 rounded-lg shadow-md  "style={{width:'100%',height:'100%'}}>
        <h2 className={`text-2xl font-bold mb-4 ${textColor}`}>Your Orders</h2>
        <ProgressBar />
        <div style={{borderRadius:'20px' }}>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6 bg-[#d8e6d3ff] p-4"style={{borderTopLeftRadius:'20px',borderTopRightRadius:'20px' }}>
          <OrderInfo label="ORDER PLACED" value="8 JUNE 2024" />
          <OrderInfo label="TOTAL ITEMS" value="2" />
          <OrderInfo label="TOTAL" value="₹350" />
          <OrderInfo label="SHIP TO" value="Anuja Singh" />
        </div>
        <OrderDetails orderNumber="123-456789-0987654" />
        </div>
        <ProductCard
          arrivalDate="Arriving Wednesday"
          productName="BAMBOO PRODUCT - TUMBLER"
          productDescription="This eco-friendly bamboo tumbler offers a stylish and sustainable alternative for your beverage needs. Its natural bamboo exterior provides excellent insulation while ensuring a unique and elegant look."
          productImage={TUMBLER}
        />
        <ProductCard
          arrivalDate="Arriving Wednesday"
          productName="BAMBOO PRODUCT - TUMBLER"
          productDescription="This eco-friendly bamboo tumbler offers a stylish and sustainable alternative for your beverage needs. Its natural bamboo exterior provides excellent insulation while ensuring a unique and elegant look."
          productImage={TUMBLER}
        />
      </div>
    </div>
  );
};

export default Orders;
