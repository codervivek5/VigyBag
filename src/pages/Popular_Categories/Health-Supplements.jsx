import React, { useState, useEffect } from 'react';
import Header from '../../components/Popular_Categories/Header';
import Filters from '../../components/Popular_Categories/Filters';
import ProductGrid from '../../components/Popular_Categories/ProductGrid';

function HealthSupplements() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categoryFilter, setCategoryFilter] = useState('');
  const [priceFilter, setPriceFilter] = useState('');
  const [ratingFilter, setRatingFilter] = useState(0);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then((data) => {
      setProducts(data);
      setFilteredProducts(data);
    })
    .catch((error) => {
      console.error('Fetch error:', error);
    });
  }, []);

  useEffect(() => {
    setFilteredProducts(
         products
           .filter(product => !categoryFilter || product.category === categoryFilter)
           .filter(product => !priceFilter || product.price <= parseInt(priceFilter))
           .filter(product => !ratingFilter || Math.round(product.rating.rate) >= ratingFilter)
       );
  }, [products, categoryFilter, priceFilter, ratingFilter]);
  
  return (
    <div className="bg-[#fff5edff] min-h-screen">
      <Header 
        backgroundUrl="https://th.bing.com/th/id/OIP.U5NMNZxJdyVTt3AU1WcN5QHaC9?w=1500&h=600&rs=1&pid=ImgDetMain" 
        headingText="Health & Supplements Products"
        paragraphText="Home/Health & Supplements Products"
      />
      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8 relative">
          <Filters 
            setCategoryFilter={setCategoryFilter}
            setPriceFilter={setPriceFilter}
            setRatingFilter={setRatingFilter}
            backgroundColor="#d9d8a5ff" 
          />
          <ProductGrid products={filteredProducts} />
        </div>
      </main>
    </div>
  );
}

export default HealthSupplements;

