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

// =====================
// Normalize API base
// =====================
const API_BASE = (import.meta.env.VITE_API_BASE || "").replace(/\/+$/, "");
const SUBSCRIBE_URL = `${API_BASE}/subscribe`;

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
    navigate(suggestion.path);
  };

  const scrollToSection = () => {
    sectionRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const handleSubscribe = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(SUBSCRIBE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (!response.ok) throw new Error("Subscription failed");

      setIsSubscribed(true);
      setTimeout(() => {
        setIsSubscribed(false);
        setEmail("");
      }, 3000);
    } catch (err) {
      console.error(err);
      alert("Failed to subscribe. Please try again.");
    }
  };

  return (
    <div className="bg-gradient-to-b from-orange-50 to-orange-100 min-h-screen">
      <main>
        {/* ...rest of your JSX remains unchanged... */}
      </main>
    </div>
  );
};

export default Home;
