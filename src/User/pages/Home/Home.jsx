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
    <div className="bg-gradient-to-b from-orange-50 to-orange-100 min-h-screen">
      <main className="">
        {/* ENHANCED: Mobile search with glassmorphism */}
        <div className="sm:block md:hidden bg-gradient-to-r from-emerald-50 to-teal-50 pt-5 backdrop-blur-sm">
          <SearchBar
            searchTerm={searchTerm}
            handleSearch={handleSearch}
            suggestions={suggestions}
            handleSuggestionClick={handleSuggestionClick}
          />
        </div>

        <section
          className="bg-gradient-to-br from-orange-50 via-amber-50 to-emerald-50 flex items-center justify-center relative overflow-hidden"
          style={{
            backgroundImage: `url(${background})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            minHeight: "87vh",
            height: "auto",
          }}
        >
          {/* Background overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/10 via-transparent to-orange-600/10 animate-pulse"></div>

          <div className="container mx-auto px-4 flex flex-col md:flex-row items-center relative z-10">
            <div className="w-full md:w-2/3 lg:w-1/2 text-center md:text-left">
              {/* Heading without extra margin-top */}
              <h1 className="block text-[33px] sm:text-4xl md:text-[53px] font-extrabold mb-4 leading-snug pb-2 bg-gradient-to-r from-gray-900 via-emerald-800 to-gray-900 bg-clip-text text-transparent animate-fade-in">
                Welcome to{" "}
                <span className="text-transparent bg-gradient-to-r from-emerald-600 to-teal-700 bg-clip-text">
                  VigyBag!
                </span>
              </h1>



              <h2
                className="text-[25px] sm:text-2xl md:text-[33px] font-bold mb-6 text-gray-800 drop-shadow-sm"
                style={{ lineHeight: "1.5" }}
              >
                Your Eco-Friendly Shopping Heaven
              </h2>

              <p
                className="mb-8 text-gray-700 text-[20px] sm:text-[23px] leading-relaxed drop-shadow-sm backdrop-blur-sm bg-white/20 rounded-xl p-4 border border-white/30"
                style={{ lineHeight: "1.6" }}
              >
                At VigyBag, we curate the finest earth-friendly essentials to help you
                reduce your environmental footprint without compromising on quality or
                style. Shop smart, live green, and embrace a sustainable future with
                VigyBag.
              </p>

              <button
                type="button"
                onClick={scrollToSection}
                className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 sm:px-10 py-3 sm:py-4 rounded-full text-base sm:text-lg font-bold shadow-xl hover:shadow-2xl hover:scale-105 transform transition-all duration-300 hover:from-emerald-700 hover:to-teal-700 ring-4 ring-emerald-200 hover:ring-emerald-300"
              >
                Shop Now
              </button>
            </div>
          </div>

          {/* Centered DownArrow at bottom */}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20">
            <DownArrow />
          </div>
        </section>


        {/* ENHANCED: Popular Categories with glassmorphism and hover effects */}
        <section className="py-8 sm:py-12 md:py-16 bg-gradient-to-b from-orange-100 to-orange-50 relative">
          {/* ENHANCED: Decorative background elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-10 left-10 w-32 h-32 bg-emerald-200 rounded-full opacity-20 blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-40 h-40 bg-orange-200 rounded-full opacity-20 blur-3xl"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            {/* ENHANCED: Section title with gradient and better typography */}
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-transparent bg-gradient-to-r from-gray-800 to-emerald-800 bg-clip-text text-center">
              Popular Categories
            </h2>

            {/* ENHANCED: Grid with hover animations */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
              {popularCategories.map((category, index) => (
                <div
                  key={index}
                  className="group transform hover:scale-105 transition-all duration-300 hover:z-10"
                >
                  {/* ENHANCED: Card wrapper with glassmorphism */}
                  <div className="backdrop-blur-sm bg-white/60 rounded-2xl p-2 shadow-lg hover:shadow-2xl border border-white/40 group-hover:bg-white/80 transition-all duration-300">
                    <CategoryCard
                      name={category.name}
                      image={category.image}
                      path={category.path}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ENHANCED: Latest in the Market with improved styling */}
        <section
          className="bg-gradient-to-b from-orange-50 to-amber-50 py-8 sm:py-12 md:py-16 relative overflow-hidden"
          id="sect"
          ref={sectionRef}>

          {/* ENHANCED: Animated background pattern */}
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-full h-full opacity-5">
              <div className="absolute top-20 left-20 w-24 h-24 bg-emerald-400 rounded-full animate-bounce"></div>
              <div className="absolute bottom-32 right-32 w-20 h-20 bg-orange-400 rounded-full animate-pulse"></div>
              <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-teal-400 rounded-full animate-ping"></div>
            </div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            {/* ENHANCED: Section title with animation */}
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-transparent bg-gradient-to-r from-gray-800 to-teal-800 bg-clip-text text-center animate-fade-in">
              Latest in the Market
            </h2>

            {/* ENHANCED: Product grid with staggered animations */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">
              {latestProducts.map((product, index) => (
                <div
                  key={index}
                  className="flex justify-center group"
                  style={{
                    animationDelay: `${index * 100}ms`
                  }}
                >
                  <div className="w-full max-w-[220px] transform group-hover:scale-105 transition-all duration-300">
                    {/* ENHANCED: Product card wrapper with glassmorphism */}
                    <div className="backdrop-blur-sm bg-white/70 rounded-2xl p-3 shadow-lg hover:shadow-2xl border border-white/50 group-hover:bg-white/90 transition-all duration-300">
                      <LatestInMarketCard product={product} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ENHANCED: Newsletter Section with modern glassmorphism design */}
        <section
          className="py-8 sm:py-12 md:py-16 relative mb-[-1px] overflow-hidden"
          style={{
            backgroundImage: `url(${app})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}>

          {/* ENHANCED: Multi-layered background overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900/70 via-emerald-900/50 to-gray-900/70"></div>
          <div className="absolute inset-0 backdrop-blur-sm"></div>

          <div className="container mx-auto px-4 relative z-10">
            {/* ENHANCED: Newsletter card with advanced glassmorphism */}
            <div className="backdrop-blur-xl bg-white/10 rounded-3xl p-6 sm:p-8 md:p-12 max-w-3xl mx-auto border border-white/20 shadow-2xl">
              <div className="text-center">
                {/* ENHANCED: Title with gradient text */}
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-transparent bg-gradient-to-r from-white to-emerald-200 bg-clip-text">
                  Stay Updated with Our Latest News
                </h2>

                {/* ENHANCED: Subtitle with better styling */}
                <p className="text-base sm:text-lg md:text-xl mb-8 text-gray-200 leading-relaxed">
                  Subscribe to our newsletter to receive exclusive updates,
                  promotions, and tips for sustainable living.
                </p>

                {/* ENHANCED: Form with modern styling */}
                <form onSubmit={handleSubscribe} className="space-y-4">
                  <div className="relative">
                    <input
                      type="email"
                      placeholder="Enter your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="w-full px-6 py-4 rounded-2xl backdrop-blur-sm bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-4 focus:ring-emerald-400/50 focus:border-emerald-400 transition-all duration-300 text-center"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-bold rounded-2xl hover:from-emerald-600 hover:to-teal-700 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl ring-4 ring-white/20 hover:ring-white/40"
                  >
                    Subscribe Now
                  </button>
                </form>

                {/* ENHANCED: Success message with animation */}
                {isSubscribed && (
                  <div className="mt-6 p-4 bg-emerald-500/80 backdrop-blur-sm rounded-xl border border-emerald-400/50 animate-bounce">
                    <p className="text-white font-semibold">
                      🎉 Subscribed successfully! Welcome to the VigyBag family!
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;