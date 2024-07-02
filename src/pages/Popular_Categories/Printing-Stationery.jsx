import React, { useState, useEffect } from 'react';
import Header from '../../components/Popular_Categories/Header';
import Filters from '../../components/Popular_Categories/Filters';
import ProductGrid from '../../components/Popular_Categories/ProductGrid';

function BeautyWellness() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categoryFilter, setCategoryFilter] = useState('');
  const [priceFilter, setPriceFilter] = useState('');
  const [ratingFilter, setRatingFilter] = useState(0);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setFilteredProducts(data);
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
        backgroundUrl="https://png.pngtree.com/background/20210710/original/pngtree-this-sub-ruler-brush-clip-school-supplies-simple-background-material-picture-image_997032.jpg" 
        headingText="Printing & Stationary Products"
        paragraphText="Home/Printing & Stationary Products"
      />
      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8 relative">
          <Filters 
            setCategoryFilter={setCategoryFilter}
            setPriceFilter={setPriceFilter}
            setRatingFilter={setRatingFilter}
            backgroundColor="#dceaf2ff" 
          />
          <ProductGrid products={filteredProducts} />
        </div>
      </main>
    </div>
  );
}

export default BeautyWellness;

