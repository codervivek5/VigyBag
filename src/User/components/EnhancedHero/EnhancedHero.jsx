import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaLeaf, FaRecycle, FaHeart } from 'react-icons/fa';
import background from '../../../assets/background.png';

const EnhancedHero = ({ onShopNowClick }) => {
  const [currentText, setCurrentText] = useState(0);
  
  const heroTexts = [
    "Your Eco-Friendly Shopping Heaven",
    "Sustainable Products for Better Tomorrow",
    "Green Living Made Simple"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % heroTexts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${background})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-green-900/20 via-transparent to-amber-900/20" />
      
      <motion.div
        variants={floatingVariants}
        animate="animate"
        className="absolute top-20 left-10 text-green-600 opacity-30"
      >
        <FaLeaf size={40} />
      </motion.div>
      
      <motion.div
        variants={floatingVariants}
        animate="animate"
        className="absolute top-32 right-20 text-green-500 opacity-40"
        style={{ animationDelay: '1s' }}
      >
        <FaRecycle size={35} />
      </motion.div>
      
      <motion.div
        variants={floatingVariants}
        animate="animate"
        className="absolute bottom-32 left-20 text-amber-600 opacity-30"
        style={{ animationDelay: '2s' }}
      >
        <FaHeart size={30} />
      </motion.div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto text-center"
        >
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
          >
            Welcome to{' '}
            <motion.span
              className="text-green-700 inline-block"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              VigyBag!
            </motion.span>
          </motion.h1>

          <motion.div
            variants={itemVariants}
            className="h-20 mb-8 flex items-center justify-center"
          >
            <motion.h2
              key={currentText}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="text-2xl md:text-4xl lg:text-5xl font-semibold text-gray-800"
            >
              {heroTexts[currentText]}
            </motion.h2>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl lg:text-2xl text-gray-700 mb-10 max-w-3xl mx-auto leading-relaxed"
          >
            At VigyBag, we curate the finest earth-friendly essentials to help you reduce your environmental footprint without compromising on quality or style.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.button
              onClick={onShopNowClick}
              className="bg-gradient-to-r from-green-600 to-green-700 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 25px rgba(0,0,0,0.2)"
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Shop Now
            </motion.button>
            
            <motion.button
              className="border-2 border-green-600 text-green-700 px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-50"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Learn More
            </motion.button>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="grid grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto"
          >
            <div className="text-center">
              <motion.div
                className="text-3xl font-bold text-green-700"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1, type: "spring" }}
              >
                1000+
              </motion.div>
              <div className="text-gray-600">Eco Products</div>
            </div>
            <div className="text-center">
              <motion.div
                className="text-3xl font-bold text-green-700"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1.2, type: "spring" }}
              >
                50K+
              </motion.div>
              <div className="text-gray-600">Happy Customers</div>
            </div>
            <div className="text-center">
              <motion.div
                className="text-3xl font-bold text-green-700"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1.4, type: "spring" }}
              >
                100%
              </motion.div>
              <div className="text-gray-600">Sustainable</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default EnhancedHero;