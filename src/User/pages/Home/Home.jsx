import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import CategoryCard from "../../components/HomPageCard/CategoryCard";
import LatestInMarketCard from "../../components/HomPageCard/LatestInMarketCard";
import background from "../../../assets/background.png";
import app from "../../../assets/app.png";
import { Link } from "react-router-dom";
import SearchBar from "../../pages/Home/SearchBar";

// Import category images
import customisedGiftsImg from "../../../assets/Customized-Gifts.png";
import HealthSupplementsImg from "../../../assets/Health-supplements.png";
import PrintingAndStationary from "../../../assets/Printing-Stationary.png";
import BodyCare from "../../../assets/Body-Care.png";
import FurnitureAndDecor from "../../../assets/Furniture-Decor.jpeg";
import BeautyAndWellness from "../../../assets/Beauty-Wellness.png";
import FoodAndBeverages from "../../../assets/Food-Beverages.png";
import fashionAndAccessories from "../../../assets/Fashion-Accessories.png";

// Import LatestProducts in markets image
import HandmadeSoapsImg from "../../../assets/Handmade-Soaps.png";
import ArtSuppliesImg from "../../../assets/Art-Supplies.png";
import CeramicDinnerwareImg from "../../../assets/Ceramic-Dinnerware.png";
import BambooProductsImg from "../../../assets/Bamboo-Products.png";
import StorageBasketsImg from "../../../assets/Storage-Baskets.png";
import DownArrow from "../../components/DownArrow/downArrow";

// Redirecting links
const popularCategories = [
  { name: "Fashion & Accessories", image: fashionAndAccessories, path: "/popularCategories/fashionAccessories" },
  { name: "Printing & Stationery", image: PrintingAndStationary, path: "/popularCategories/printingStationery" },
  { name: "Food & Beverages", image: FoodAndBeverages, path: "/popularCategories/foodBeverages" },
  { name: "Beauty & Wellness", image: BeautyAndWellness, path: "/popularCategories/beautyWellness" },
  { name: "Furniture & Decor", image: FurnitureAndDecor, path: "/popularCategories/furnitureDecor" },
  { name: "Body Care", image: BodyCare, path: "/popularCategories/bodyCare" },
  { name: "Health Supplements", image: HealthSupplementsImg, path: "/popularCategories/healthSupplements" },
  { name: "Customized Gifts", image: customisedGiftsImg, path: "/popularCategories/customizedGifts" },
];

const latestProducts = [
  { img: HandmadeSoapsImg, name: "Handmade Soaps", description: "A vibrant collection of artisan soaps that are 100% natural and biodegradable.", discount: "15% Off", path: "/latestInMarket/handMadeSoaps" },
  { img: ArtSuppliesImg, name: "Art Supplies", description: "Natural and cruelty-free selection of art supplies.", discount: "Up to 50% Off", path: "/latestInMarket/artSupplies" },
  { img: CeramicDinnerwareImg, name: "Ceramic Dinnerware", description: "Long-lasting and durable eco-friendly dinnerware.", discount: "Buy 1 Get 1", path: "/latestInMarket/ceramicDinnerware" },
  { img: BambooProductsImg, name: "Bamboo Products", description: "Natural, non-toxic, biodegradable household and bath products.", discount: "20% Off", path: "/latestInMarket/bambooProducts" },
  { img: StorageBasketsImg, name: "Storage Baskets", description: "Natural basket collection featuring hand-woven sustainable materials.", discount: "20% Off", path: "/latestInMarket/storageBaskets" },
  { img: HandmadeSoapsImg, name: "Organic Soaps", description: "Handcrafted organic soaps made with natural ingredients.", discount: "10% Off", path: "/latestInMarket/organicSoaps" },
  { img: FoodAndBeverages, name: "Organic Tea", description: "A selection of premium organic teas from sustainable sources.", discount: "25% Off", path: "/latestInMarket/organicTea" },
  { img: BeautyAndWellness, name: "Natural Cosmetics", description: "Eco-friendly makeup and skincare products made from natural ingredients.", discount: "Buy 2 Get 1", path: "/latestInMarket/naturalCosmetics" },
];

const Home = () => {
  const sectionRef = useRef(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const navigate = useNavigate();

  // Subscribe states
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Use environment variable for API base
  const API_BASE = import.meta.env.VITE_API_BASE_URL || "";

  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);

    const filteredSuggestions = [
      ...popularCategories.filter((category) => category.name.toLowerCase().includes(term.toLowerCase())),
      ...latestProducts.filter((product) => product.name.toLowerCase().includes(term.toLowerCase())),
    ];
    setSuggestions(filteredSuggestions);
  };

  const handleSuggestionClick = (suggestion) => {
    navigate(suggestion.path);
  };

  const scrollToSection = () => {
    sectionRef.current.scrollIntoView({ behavior: "smooth" });
  };

  // Subscribe handler
  const handleSubscribe = async (e) => {
    e.preventDefault();

    if (isSubmitting) return; // prevent spam clicks
    setIsSubmitting(true);

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const normalized = email.trim().toLowerCase();

    if (!normalized) {
      setMessage("⚠️ Please enter your email.");
      setIsError(true);
      setIsSubmitting(false);
      return;
    }

    if (!emailPattern.test(normalized)) {
      setMessage("⚠️ Please enter a valid email address.");
      setIsError(true);
      setIsSubmitting(false);
      return;
    }

    try {
      const res = await fetch(`${API_BASE}/api/subscribe`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ email: normalized }),
      });

      let data = {};
      const ct = res.headers.get("content-type") || "";
      if (ct.includes("application/json")) {
        data = await res.json();
      } else {
        const text = await res.text();
        data = { message: text };
      }

      if (res.ok) {
        setMessage(data.message || "✅ Subscribed successfully!");
        setIsError(false);
        setEmail("");
      } else {
        setMessage(data.message || "❌ Subscription failed");
        setIsError(true);
      }

      setTimeout(() => setMessage(""), 3000);
    } catch (err) {
      console.error("Subscribe error:", err);
      setMessage("❌ Server error. Try again later.");
      setIsError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-[#fff0e3ff]">
      <main>
        {/* SearchBar for mobile */}
        <div className="sm:block md:hidden bg-[#eff0f1] pt-5">
          <SearchBar searchTerm={searchTerm} handleSearch={handleSearch} suggestions={suggestions} handleSuggestionClick={handleSuggestionClick} />
        </div>

        {/* Hero Section */}
        <section
          className="bg-[#FFF5EA] py-12 md:py-20 lg:py-24 flex items-center"
          style={{
            backgroundImage: `url(${background})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            minHeight: "87vh",
            height: "auto",
          }}
        >
          <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
            <div className="w-full md:w-2/3 lg:w-1/2 pr-0 md:pr-8 text-center md:text-left md:mt-20">
              <h1 className="text-[33px] sm:text-4xl md:text-[53px] font-bold mb-4">
                Welcome to <span className="text-green-700">VigyBag!</span>
              </h1>
              <h2 className="text-[25px] sm:text-2xl md:text-[33px] font-semibold mb-6" style={{ lineHeight: "1.5" }}>
                Your Eco-Friendly Shopping Heaven
              </h2>
              <p className="mb-6 text-gray-700 text-[20px] sm:text-[23px]" style={{ lineHeight: "1.5" }}>
                At VigyBag, we curate the finest earth-friendly essentials to help you reduce your environmental footprint without compromising on quality or style. Shop smart, live green, and embrace a sustainable future with VigyBag.
              </p>
              <button
                type="button"
                onClick={scrollToSection}
                className="bg-green-700 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full text-base sm:text-lg font-semibold hover:bg-green-800 transition duration-300"
              >
                Shop Now
              </button>
              <DownArrow />
            </div>
          </div>
        </section>

        {/* Popular Categories */}
        <section className="py-8 sm:py-12 md:py-16 bg-[#fff0e3ff]">
          <div className="container mx-auto px-4">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-black">Popular Categories</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
              {popularCategories.map((category, index) => (
                <div key={index} className="custom-shadow">
                  <CategoryCard name={category.name} image={category.image} path={category.path} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Latest in the Market */}
        <section className="bg-[#fff0e3ff] py-8 sm:py-12 md:py-16" id="sect" ref={sectionRef}>
          <div className="container mx-auto px-4">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-black">Latest in the Market</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">
              {latestProducts.map((product, index) => (
                <div key={index} className="flex justify-center">
                  <div className="w-full max-w-[220px]">
                    <LatestInMarketCard product={product} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* App Download / Newsletter Section */}
        <section
          className="py-8 sm:py-12 md:py-16 relative mb-[-1px]"
          style={{ backgroundImage: `url(${app})`, backgroundSize: "cover", backgroundPosition: "center" }}
        >
          <div className="container mx-auto px-4 relative z-10">
            <div className="bg-[#373b3aff] rounded-lg p-4 sm:p-6 md:p-8 max-w-3xl mx-auto backdrop-blur-lg" style={{ minHeight: "30vh", height: "auto" }}>
              <section className="newsletter-section text-center text-white">
                <h2 className="text-2xl font-bold mb-2">Stay Updated with Our Latest News</h2>
                <p className="mb-4">Subscribe to our newsletter to receive exclusive updates, promotions, and tips.</p>

                <form onSubmit={handleSubscribe} className="flex flex-col items-center space-y-3">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={`w-full p-3 rounded-lg text-black border ${isError ? "border-red-500" : "border-gray-300"}`}
                  />
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`px-6 py-2 rounded-lg transition text-white ${
                      isSubmitting ? "bg-gray-500 cursor-not-allowed" : "bg-green-600 hover:bg-green-700"
                    }`}
                  >
                    {isSubmitting ? "Submitting..." : "Subscribe"}
                  </button>
                </form>

                {message && <p className={`mt-2 text-sm ${isError ? "text-red-400" : "text-green-400"}`}>{message}</p>}
              </section>
            </div>
          </div>
          <div className="absolute inset-0 bg-black opacity-30"></div>
        </section>
      </main>
    </div>
  );
};

export default Home;
