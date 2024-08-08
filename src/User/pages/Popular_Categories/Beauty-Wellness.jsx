import React, { useState, useEffect } from "react";
import Filters from "../../components/Popular_Categories/Filters";
import ProductGrid from "../../components/Popular_Categories/ProductGrid";
import toast from "react-hot-toast";
import axios from "axios";
import { Helmet } from "react-helmet";

function BeautyWellness() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categoryFilter, setCategoryFilter] = useState("");
  const [priceFilter, setPriceFilter] = useState("");
  const [ratingFilter, setRatingFilter] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://dummyjson.com/products");
        if (response.data && Array.isArray(response.data.products)) {
          const mappedProducts = response.data.products.map((product) => ({
            id: product.id,
            title: product.title,
            price: product.price,
            category: product.category,
            image: product.images[0] || "",
            discountPercentage: product.discountPercentage,
            rating: {
              rate: product.rating,
              count: product.reviews ? product.reviews.length : 0,
            },
          }));
          setProducts(mappedProducts);
          setFilteredProducts(mappedProducts);
        } else {
          setProducts([]);
          setFilteredProducts([]);
          toast.error("No products found.");
        }
      } catch (error) {
        toast.error("Oops, can't get your products, sorry! Try refreshing the page.");
        console.error("Fetching products failed:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const filterProducts = () => {
      let updatedProducts = products;
      if (categoryFilter) {
        updatedProducts = updatedProducts.filter(
          (product) => product.category === categoryFilter
        );
      }
      if (priceFilter) {
        updatedProducts = updatedProducts.filter(
          (product) => product.price <= parseInt(priceFilter)
        );
      }
      if (ratingFilter) {
        updatedProducts = updatedProducts.filter(
          (product) => Math.round(product.rating.rate) >= ratingFilter
        );
      }
      setFilteredProducts(updatedProducts);
    };

    filterProducts();
  }, [products, categoryFilter, priceFilter, ratingFilter]);

  return (
    <div className="bg-[#fff5edff] min-h-screen">
      <Helmet>
        <title>Beauty & Wellness | VigyBag</title>
        <meta name="description" content="Explore a wide range of beauty and wellness products at VigyBag. Find the best products to enhance your beauty and wellbeing." />
      </Helmet>
      <main className="container">
        <div className="flex flex-col lg:flex-row gap-8 relative">
          <Filters
            setCategoryFilter={setCategoryFilter}
            setPriceFilter={setPriceFilter}
            setRatingFilter={setRatingFilter}
            backgroundColor="#e5ebe4ff"
          />
          <ProductGrid
            products={filteredProducts}
            headingText="Beauty-Wellness"
          />
        </div>
      </main>
    </div>
  );
}

export default BeautyWellness;
