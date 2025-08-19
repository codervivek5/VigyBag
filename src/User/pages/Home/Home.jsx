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
  {
    img: HandmadeSoapsImg,
    name: "Organic Soaps",
    description: "Handcrafted organic soaps made with natural ingredients.",
    discount: "10% Off",
    path: "/latestInMarket/organicSoaps",
  },
  {
    img: FoodAndBeverages,
    name: "Organic Tea",
    description:
      "A selection of premium organic teas from sustainable sources.",
    discount: "25% Off",
    path: "/latestInMarket/organicTea",
  },
  {
    img: BeautyAndWellness,
    name: "Natural Cosmetics",
    description:
      "Eco-friendly makeup and skincare products made from natural ingredients.",
    discount: "Buy 2 Get 1",
    path: "/latestInMarket/naturalCosmetics",
  },
];

const Home = () => {
  const sectionRef = useRef(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const navigate = useNavigate();

  const [isSubscribed, setIsSubscribed] = useState(false);
  const [email, setEmail] = useState("");

  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);

    // Filter categories and products for suggestions
    const filteredSuggestions = [
      ...popularCategories.filter((category) =>
        category.name.toLowerCase().includes(term.toLowerCase())
      ),
      ...latestProducts.filter((product) =>
        product.name.toLowerCase().includes(term.toLowerCase())
      ),
    ];
    setSuggestions(filteredSuggestions);
  };

  const handleSuggestionClick = (suggestion) => {
    // Navigate to the corresponding path
    navigate(suggestion.path);
  };

  const scrollToSection = () => {
    sectionRef.current.scrollIntoView({ behavior: "smooth" });
  };



  const handleSubscribe = (e) => {
    e.preventDefault();
    setIsSubscribed(true); // Show the success message
    setTimeout(() => {
      setIsSubscribed(false); // Hide the message
      setEmail(""); // Clear the email input
    }, 3000); // 3 seconds
  };



  return (
    <div className="bg-[#fff0e3ff]">
      <main className="">
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
          className="bg-[#FFF5EA] py-12 md:py-20 lg:py-24 flex items-center"
          style={{
            backgroundImage: `url(${background})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            minHeight: "87vh",
            height: "auto",
          }}>
          <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
            <div className="w-full md:w-2/3 lg:w-1/2 pr-0 md:pr-8 text-center md:text-left md:mt-20">
              <h1 className="text-[33px] sm:text-4xl md:text-[53px] font-bold mb-4">
                Welcome to <span className="text-green-700">VigyBag!</span>
              </h1>
              <h2
                className="text-[25px] sm:text-2xl md:text-[33px] font-semibold mb-6"
                style={{ lineHeight: "1.5" }}>
                Your Eco-Friendly Shopping Heaven
              </h2>
              <p
                className="mb-6 text-gray-700 text-[20px] sm:text-[23px]"
                style={{ lineHeight: "1.5" }}>
                At VigyBag, we curate the finest earth-friendly essentials to
                help you reduce your environmental footprint without
                compromising on quality or style. Shop smart, live green, and
                embrace a sustainable future with VigyBag.
              </p>
              <button
                type="button"
                onClick={() => {
                  const section = document.getElementById("popular-categories");
                  if (section) {
                    section.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="bg-green-700 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full text-base sm:text-lg font-semibold hover:bg-green-800 transition duration-300"
              >
                Shop Now
              </button>

              <DownArrow />
            </div>
          </div>
        </section>
        {/* Popular Categories */}
        <section id="popular-categories" className="py-8 sm:py-12 md:py-16 bg-[#fff0e3ff]">
          <div className="container mx-auto px-4">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-black">
              Popular Categories
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
              {popularCategories.map((category, index) => (
                <div key={index} className="custom-shadow">
                  <CategoryCard
                    key={index}
                    name={category.name}
                    image={category.image}
                    path={category.path}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Latest in the Market */}
        <section
          className="bg-[#fff0e3ff] py-8 sm:py-12 md:py-16"
          id="sect"
          ref={sectionRef}>
          <div className="container mx-auto px-4">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-black">
              Latest in the Market
            </h2>
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







        {/* App Download Section */}
        <section
          className="py-8 sm:py-12 md:py-16 relative mb-[-1px]"
          style={{
            backgroundImage: `url(${app})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}>
          <div className="container mx-auto px-4 relative z-10">
            <div
              className="bg-[#373b3aff] rounded-lg p-4 sm:p-6 md:p-8 max-w-3xl mx-auto backdrop-blur-lg"
              style={{ minHeight: "30vh", height: "auto" }}>
              <section
                className="newsletter-section"
                style={{ color: "white", padding: "40px 0" }}>
                <div
                  className="container"
                  style={{
                    maxWidth: "600px",
                    margin: "0 auto",
                    textAlign: "center",
                  }}>
                  <h2
                    style={{
                      fontSize: "24px",
                      marginBottom: "10px",
                      color: "white",
                    }}>
                    Stay Updated with Our Latest News
                  </h2>
                  <p
                    style={{
                      fontSize: "16px",
                      marginBottom: "20px",
                    }}>
                    Subscribe to our newsletter to receive exclusive updates,
                    promotions, and tips.
                  </p>
                  <form onSubmit={handleSubscribe}>
                    <input
                      type="email"
                      placeholder="Enter your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      style={{
                        color: "black",
                        width: "100%",
                        borderRadius: "10px",
                        padding: "10px",
                        marginBottom: "10px",
                        border: "1px solid #ccc",
                      }}
                    />
                    <button
                      type="submit"
                      style={{
                        backgroundColor: "#4CAF50",
                        color: "#fff",
                        padding: "10px 20px",
                        border: "none",
                        borderRadius: "5px",
                        cursor: "pointer",
                      }}>
                      Subscribe
                    </button>
                  </form>
                  {isSubscribed && (
                    <div className="popup-message">
                      <p>Subscribed successfully!</p>
                    </div>
                  )}
                </div>
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
