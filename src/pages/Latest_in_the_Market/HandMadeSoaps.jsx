import React, { useState, useEffect } from 'react';
import Header from '../../components/Popular_Categories/Header';
import Filters from '../../components/Popular_Categories/Filters';
import ProductGrid from '../../components/Popular_Categories/ProductGrid';

function HandMadeSoaps() {
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
        backgroundUrl="https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/blogs/28228/images/Z9Tq7TweS5KotRGQ7uts_KendraCote_CM-34_opt.jpg" 
        headingText="Hand Made Soaps Products"
        paragraphText="Home/Hand Made Soaps Products"
      />
      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8 relative">
          <Filters 
            setCategoryFilter={setCategoryFilter}
            setPriceFilter={setPriceFilter}
            setRatingFilter={setRatingFilter}
            backgroundColor="#e0bbadff" 
          />
          <ProductGrid products={filteredProducts} />
        </div>
      </main>
    </div>
  );
}

export default HandMadeSoaps
