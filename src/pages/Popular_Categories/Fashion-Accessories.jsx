import React, { useState, useEffect } from 'react';
import Header from '../../components/Popular_Categories/Header';
import Filters from '../../components/Popular_Categories/Filters';
import ProductGrid from '../../components/Popular_Categories/ProductGrid';

function FashionAccessories() {
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
    let result = products;
    if (categoryFilter) {
      result = result.filter(product => product.category === categoryFilter);
    }
    if (priceFilter) {
      result = result.filter(product => product.price <= parseInt(priceFilter));
    }
    if (ratingFilter) {
      result = result.filter(product => Math.round(product.rating.rate) >= ratingFilter);
    }
    setFilteredProducts(result);
  }, [products, categoryFilter, priceFilter, ratingFilter]);

  return (
    <div className="bg-[#fff5edff] min-h-screen">
      <Header 
        backgroundUrl="https://img.buzzfeed.com/buzzfeed-static/static/2017-12/1/16/asset/buzzfeed-prod-fastlane-01/sub-buzz-22670-1512165221-10.jpg" 
        headingText="Fashion & Accessories Products"
        paragraphText="Home/Fashion & Accessories  Products"
      />
      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8 relative">
          <Filters 
            setCategoryFilter={setCategoryFilter}
            setPriceFilter={setPriceFilter}
            setRatingFilter={setRatingFilter}
            backgroundColor="#c2b6a9ff" 
          />
          <ProductGrid products={filteredProducts} />
        </div>
      </main>
    </div>
  );
}

export default FashionAccessories;

