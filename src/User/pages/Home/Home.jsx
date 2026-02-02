import React, { useRef, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import CategoryCard from "../../components/HomPageCard/CategoryCard";
import LatestInMarketCard from "../../components/HomPageCard/LatestInMarketCard";
import background from "../../../assets/background.png";
import app from "../../../assets/app.png";
import SearchBar from "../../pages/Home/SearchBar";
import DownArrow from "../../components/DownArrow/downArrow";
import { AnimatePresence, motion } from "framer-motion";

// Category Images
import customisedGiftsImg from "../../../assets/Customized-Gifts.png";
import HealthSupplementsImg from "../../../assets/Health-supplements.png";
import PrintingAndStationary from "../../../assets/Printing-Stationary.png";
import BodyCare from "../../../assets/Body-Care.png";
import FurnitureAndDecor from "../../../assets/Furniture-Decor.jpeg";
import BeautyAndWellness from "../../../assets/Beauty-Wellness.png";
import FoodAndBeverages from "../../../assets/Food-Beverages.png";
import fashionAndAccessories from "../../../assets/Fashion-Accessories.png";

// Latest Products Images
import HandmadeSoapsImg from "../../../assets/Handmade-Soaps.png";
import ArtSuppliesImg from "../../../assets/Art-Supplies.png";
import CeramicDinnerwareImg from "../../../assets/Ceramic-Dinnerware.png";
import BambooProductsImg from "../../../assets/Bamboo-Products.png";
import StorageBasketsImg from "../../../assets/Storage-Baskets.png";

// Popular Categories
const popularCategories = [
  {
    name: "Fashion & Accessories",
    image: fashionAndAccessories,
    path: "/popularCategories/fashionAccessories",
  },
  {
    name: "Printing & Stationery",
    image: PrintingAndStationary,
    path: "/popularCategories/printingStationery",
  },
  {
    name: "Food & Beverages",
    image: FoodAndBeverages,
    path: "/popularCategories/foodBeverages",
  },
  {
    name: "Beauty & Wellness",
    image: BeautyAndWellness,
    path: "/popularCategories/beautyWellness",
  },
  {
    name: "Furniture & Decor",
    image: FurnitureAndDecor,
    path: "/popularCategories/furnitureDecor",
  },
  { name: "Body Care", image: BodyCare, path: "/popularCategories/bodyCare" },
  {
    name: "Health Supplements",
    image: HealthSupplementsImg,
    path: "/popularCategories/healthSupplements",
  },
  {
    name: "Customized Gifts",
    image: customisedGiftsImg,
    path: "/popularCategories/customizedGifts",
  },
];

// Latest Products
const latestProducts = [
  {
    img: HandmadeSoapsImg,
    name: "Handmade Soaps",
    description:
      "A vibrant collection of artisan soaps that are 100% natural and biodegradable.",
    discount: "15% Off",
    path: "/latestInMarket/handMadeSoaps",
  },
  {
    img: ArtSuppliesImg,
    name: "Art Supplies",
    description: "Natural and cruelty-free selection of art supplies.",
    discount: "Up to 50% Off",
    path: "/latestInMarket/artSupplies",
  },
  {
    img: CeramicDinnerwareImg,
    name: "Ceramic Dinnerware",
    description: "Long-lasting and durable eco-friendly dinnerware.",
    discount: "Buy 1 Get 1",
    path: "/latestInMarket/ceramicDinnerware",
  },
  {
    img: BambooProductsImg,
    name: "Bamboo Products",
    description:
      "Natural, non-toxic, biodegradable household and bath products.",
    discount: "20% Off",
    path: "/latestInMarket/bambooProducts",
  },
  {
    img: StorageBasketsImg,
    name: "Storage Baskets",
    description:
      "Natural basket collection featuring hand-woven sustainable materials.",
    discount: "20% Off",
    path: "/latestInMarket/storageBaskets",
  },
];

// Debounce utility
const debounce = (fn, delay = 400) => {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
};

const Home = () => {
  const sectionRef = useRef(null);
  const navigate = useNavigate();

  // 🔍 Search State
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const performSearch = (term) => {
    if (!term.trim()) {
      setSuggestions([]);
      return;
    }

    const results = [
      ...popularCategories.filter((c) =>
        c.name.toLowerCase().includes(term.toLowerCase())
      ),
      ...latestProducts.filter((p) =>
        p.name.toLowerCase().includes(term.toLowerCase())
      ),
    ];

    setSuggestions(results);
  };

  const debouncedSearch = useCallback(
    debounce((value) => {
      performSearch(value);
    }, 400),
    []
  );

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    debouncedSearch(value);
  };

  const handleSuggestionClick = (item) => {
    setSearchTerm("");
    setSuggestions([]);
    navigate(item.path);
  };

  const scrollToSection = () =>
    sectionRef.current.scrollIntoView({ behavior: "smooth" });

  // 📧 Newsletter Subscription
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const API_BASE = import.meta.env.VITE_API_BASE_URL || "http://localhost:3000";

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);
    const normalized = email.trim().toLowerCase();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(normalized)) {
      setMessage("⚠️ Please enter a valid email address.");
      setIsError(true);
      setIsSubmitting(false);
      return;
    }

    try {
      const endpoint = `${API_BASE.replace(/\/$/, "")}/api/subscribe`;

      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: normalized }),
      });

      const data = await res.json();

      if (res.ok) {
        setMessage(data.message || "🎉 Subscribed successfully!");
        setIsError(false);
        setEmail("");
      } else {
        setMessage(data.message || "❌ Subscription failed");
        setIsError(true);
      }

      setTimeout(() => setMessage(""), 4000);
    } catch (err) {
      console.error(err);
      setMessage("❌ Server error. Try again later.");
      setIsError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-[#fff0e3ff] min-h-screen">
      <main>
        {/* Mobile Search */}
        <div className="sm:block md:hidden bg-[#eff0f1] pt-5">
          <SearchBar
            searchTerm={searchTerm}
            handleSearch={handleSearch}
            suggestions={suggestions}
            handleSuggestionClick={handleSuggestionClick}
          />
        </div>

        {/* Hero Section */}
        <section
          className="bg-[#FFF5EA] py-12 md:py-20 flex items-center"
          style={{
            backgroundImage: `url(${background})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
            <div className="w-full md:w-2/3 lg:w-1/2 text-center md:text-left">
              <h1 className="text-[33px] md:text-[53px] font-bold mb-4">
                Welcome to <span className="text-green-700">VigyBag!</span>
              </h1>
              <p className="mb-6 text-gray-700 text-[20px]">
                Eco-friendly products, directly from local artisans.
              </p>
              <button
                onClick={scrollToSection}
                className="bg-green-700 text-white px-6 py-3 rounded-full hover:bg-green-800 transition"
              >
                Shop Now
              </button>
              <DownArrow />
            </div>
          </div>
        </section>

        {/* Popular Categories */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8">Popular Categories</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {popularCategories.map((cat, i) => (
                <CategoryCard key={i} {...cat} />
              ))}
            </div>
          </div>
        </section>

        {/* Latest Products */}
        <section ref={sectionRef} className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8">Latest in the Market</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {latestProducts.map((prod, i) => (
                <LatestInMarketCard key={i} product={prod} />
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section
          className="py-12 relative"
          style={{
            backgroundImage: `url(${app})`,
            backgroundSize: "cover",
          }}
        >
          <div className="container mx-auto px-4 relative z-10">
            <div className="bg-[#373b3aff] p-8 rounded-lg text-white text-center">
              <h2 className="text-2xl font-bold mb-2">
                Stay Updated with VigyBag
              </h2>

              <form onSubmit={handleSubscribe} className="space-y-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full p-3 rounded text-black"
                />
                <button
                  disabled={isSubmitting}
                  className={`px-6 py-2 rounded ${
                    isSubmitting ? "bg-gray-500" : "bg-green-500"
                  }`}
                >
                  {isSubmitting ? "Processing..." : "Subscribe"}
                </button>
              </form>

              <AnimatePresence>
                {message && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className={`mt-4 p-3 rounded ${
                      isError ? "bg-red-500" : "bg-green-500"
                    }`}
                  >
                    {message}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
          <div className="absolute inset-0 bg-black opacity-30"></div>
        </section>
      </main>
    </div>
  );
};

export default Home;
