import React, { useState, useEffect } from 'react';
import Header from '../../components/Popular_Categories/Header';
import Filters from '../../components/Popular_Categories/Filters';
import ProductGrid from '../../components/Popular_Categories/ProductGrid';

import axios from "axios";

function NaturalCosmetics() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categoryFilter, setCategoryFilter] = useState('');
  const [priceFilter, setPriceFilter] = useState('');
  const [ratingFilter, setRatingFilter] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        setProducts(response.data);
        setFilteredProducts(response.data);
      } catch (error) {
        console.error('Axios error:', error);
      }
    };
    fetchData();
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
        backgroundUrl="https://th.bing.com/th/id/OIP.HkFr3JWrEkECj7GRbVIQJQHaCk?w=2880&h=1000&rs=1&pid=ImgDetMain" 
        headingText="Natural Cosmetics Products"
        paragraphText="Home/Natural Cosmetics Products"
      />
      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8 relative">
          <Filters 
            setCategoryFilter={setCategoryFilter}
            setPriceFilter={setPriceFilter}
            setRatingFilter={setRatingFilter}
            backgroundColor="#c4b2a3ff" 
          />
          <ProductGrid products={filteredProducts} />
        </div>
      </main>
    </div>
  );
}

export default NaturalCosmetics
