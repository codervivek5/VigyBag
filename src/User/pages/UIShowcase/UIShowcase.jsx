import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaShoppingCart, FaHeart, FaSearch, FaLeaf, FaRecycle } from 'react-icons/fa';
import EnhancedHero from '../../components/EnhancedHero/EnhancedHero';
import EnhancedProductCard from '../../components/EnhancedProductCard/EnhancedProductCard';
import AnimatedButton from '../../components/EnhancedButtons/AnimatedButton';
import SmartSearchBar from '../../components/EnhancedSearch/SmartSearchBar';
import ProductCardSkeleton from '../../components/LoadingComponents/ProductCardSkeleton';
import PageLoader from '../../components/LoadingComponents/PageLoader';

const UIShowcase = () => {
  const [showLoader, setShowLoader] = useState(false);
  const [showSkeletons, setShowSkeletons] = useState(false);

  const sampleProducts = [
    {
      id: 1,
      name: "Bamboo Toothbrush Set",
      description: "Eco-friendly bamboo toothbrushes with soft bristles, perfect for sustainable oral care.",
      img: "https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?w=300&h=300&fit=crop",
      discount: "20% Off",
      path: "/product/1"
    },
    {
      id: 2,
      name: "Organic Cotton Tote Bag",
      description: "Durable and stylish organic cotton bag for all your shopping needs.",
      img: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300&h=300&fit=crop",
      discount: "15% Off",
      path: "/product/2"
    },
    {
      id: 3,
      name: "Natural Soap Collection",
      description: "Handcrafted soaps made with natural ingredients and essential oils.",
      img: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=300&h=300&fit=crop",
      discount: "Buy 2 Get 1",
      path: "/product/3"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {showLoader && <PageLoader />}
      
      {/* Header */}
      <motion.div
        className="bg-white shadow-sm py-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-4">
            VigyBag UI Enhancement Showcase
          </h1>
          <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto">
            Experience the new and improved user interface with modern animations, 
            enhanced interactions, and eco-friendly design elements.
          </p>
        </div>
      </motion.div>

      {/* Enhanced Hero Section */}
      <motion.section
        className="py-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
            Enhanced Hero Section
          </h2>
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <EnhancedHero onShopNowClick={() => console.log('Shop Now clicked!')} />
          </div>
        </div>
      </motion.section>

      {/* Smart Search Bar */}
      <motion.section
        className="py-12 bg-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
            Smart Search Bar
          </h2>
          <div className="max-w-2xl mx-auto">
            <SmartSearchBar 
              onSearch={(query) => console.log('Search:', query)}
              placeholder="Try searching for 'bamboo' or 'organic'..."
            />
          </div>
        </div>
      </motion.section>

      {/* Enhanced Product Cards */}
      <motion.section
        className="py-12"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-3xl font-bold text-center mb-8 text-gray-800"
            variants={itemVariants}
          >
            Enhanced Product Cards
          </motion.h2>
          
          <div className="flex justify-center mb-6">
            <AnimatedButton
              variant={showSkeletons ? "secondary" : "primary"}
              onClick={() => setShowSkeletons(!showSkeletons)}
              icon={<FaLeaf />}
            >
              {showSkeletons ? "Show Products" : "Show Loading State"}
            </AnimatedButton>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {showSkeletons ? (
              [...Array(3)].map((_, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <ProductCardSkeleton />
                </motion.div>
              ))
            ) : (
              sampleProducts.map((product, index) => (
                <motion.div key={product.id} variants={itemVariants}>
                  <EnhancedProductCard product={product} />
                </motion.div>
              ))
            )}
          </div>
        </div>
      </motion.section>

      {/* Animated Buttons */}
      <motion.section
        className="py-12 bg-white"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-3xl font-bold text-center mb-8 text-gray-800"
            variants={itemVariants}
          >
            Animated Buttons
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <motion.div variants={itemVariants} className="text-center">
              <h3 className="text-lg font-semibold mb-4 text-gray-700">Primary Buttons</h3>
              <div className="space-y-3">
                <AnimatedButton variant="primary" icon={<FaShoppingCart />}>
                  Add to Cart
                </AnimatedButton>
                <AnimatedButton variant="primary" size="lg" icon={<FaHeart />}>
                  Add to Wishlist
                </AnimatedButton>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="text-center">
              <h3 className="text-lg font-semibold mb-4 text-gray-700">Secondary Buttons</h3>
              <div className="space-y-3">
                <AnimatedButton variant="secondary" icon={<FaSearch />}>
                  Quick View
                </AnimatedButton>
                <AnimatedButton variant="outline" size="lg">
                  Learn More
                </AnimatedButton>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="text-center">
              <h3 className="text-lg font-semibold mb-4 text-gray-700">Special Buttons</h3>
              <div className="space-y-3">
                <AnimatedButton variant="ghost" icon={<FaRecycle />}>
                  Eco-Friendly
                </AnimatedButton>
                <AnimatedButton 
                  variant="danger" 
                  onClick={() => setShowLoader(true)}
                  onMouseLeave={() => setTimeout(() => setShowLoader(false), 2000)}
                >
                  Show Loader
                </AnimatedButton>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* CSS Utilities Demo */}
      <motion.section
        className="py-12"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-3xl font-bold text-center mb-8 text-gray-800"
            variants={itemVariants}
          >
            CSS Utilities & Effects
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <motion.div 
              variants={itemVariants}
              className="card-modern p-6 text-center hover-lift"
            >
              <div className="w-16 h-16 bg-eco-primary rounded-full mx-auto mb-4 flex items-center justify-center animate-float">
                <FaLeaf className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-eco-text mb-2">Floating Animation</h3>
              <p className="text-gray-600">Smooth floating effect with eco-friendly colors</p>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="glass-effect p-6 text-center rounded-2xl"
            >
              <div className="w-16 h-16 bg-eco-secondary rounded-full mx-auto mb-4 flex items-center justify-center">
                <FaRecycle className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-eco-text mb-2">Glassmorphism</h3>
              <p className="text-gray-600">Modern glass effect with backdrop blur</p>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="gradient-eco p-6 text-center rounded-2xl text-white"
            >
              <div className="w-16 h-16 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                <FaHeart className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Gradient Background</h3>
              <p className="text-white/90">Beautiful eco-friendly gradient effects</p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <motion.footer
        className="bg-gray-800 text-white py-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-4">VigyBag UI Enhancement Complete!</h3>
          <p className="text-gray-300 mb-6">
            These enhancements provide a modern, engaging, and eco-friendly user experience.
          </p>
          <AnimatedButton variant="secondary" size="lg">
            Back to Home
          </AnimatedButton>
        </div>
      </motion.footer>
    </div>
  );
};

export default UIShowcase;