import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaHeart, FaShoppingCart, FaEye, FaStar, FaLeaf } from 'react-icons/fa';

const EnhancedProductCard = ({ product }) => {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    },
    hover: {
      y: -8,
      transition: { duration: 0.3, ease: "easeOut" }
    }
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };

  const buttonVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { type: "spring", stiffness: 300, damping: 20 }
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      className="group relative bg-white rounded-2xl shadow-lg overflow-hidden max-w-[280px] mx-auto"
    >
      {/* Eco Badge */}
      <div className="absolute top-3 left-3 z-20">
        <div className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
          <FaLeaf size={10} />
          Eco-Friendly
        </div>
      </div>

      {/* Wishlist Button */}
      <motion.button
        className={`absolute top-3 right-3 z-20 p-2 rounded-full ${
          isWishlisted ? 'bg-red-500 text-white' : 'bg-white/80 text-gray-600'
        } shadow-md`}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsWishlisted(!isWishlisted)}
      >
        <FaHeart size={14} />
      </motion.button>

      {/* Product Image */}
      <div className="relative h-48 overflow-hidden">
        <motion.img
          src={product.img}
          alt={product.name}
          className="w-full h-full object-cover"
          onLoad={() => setImageLoaded(true)}
          initial={{ scale: 1.1 }}
          animate={{ scale: imageLoaded ? 1 : 1.1 }}
          transition={{ duration: 0.6 }}
        />
        
        {/* Hover Overlay */}
        <motion.div
          variants={overlayVariants}
          initial="hidden"
          whileHover="visible"
          className="absolute inset-0 bg-black/40 flex items-center justify-center gap-3"
        >
          <motion.button
            variants={buttonVariants}
            className="bg-white text-gray-800 p-3 rounded-full shadow-lg hover:bg-green-50"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaEye size={16} />
          </motion.button>
          
          <motion.button
            variants={buttonVariants}
            className="bg-green-600 text-white p-3 rounded-full shadow-lg hover:bg-green-700"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaShoppingCart size={16} />
          </motion.button>
        </motion.div>

        {/* Discount Badge */}
        {product.discount && (
          <div className="absolute bottom-3 left-3">
            <div className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold">
              {product.discount}
            </div>
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="p-4">
        <Link to={product.path} className="block">
          <motion.h3
            className="font-semibold text-gray-800 mb-2 line-clamp-2 group-hover:text-green-600 transition-colors"
            whileHover={{ x: 2 }}
          >
            {product.name}
          </motion.h3>
        </Link>
        
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
          {product.description}
        </p>

        {/* Rating */}
        <div className="flex items-center gap-1 mb-3">
          {[...Array(5)].map((_, i) => (
            <FaStar
              key={i}
              size={12}
              className={i < 4 ? 'text-yellow-400' : 'text-gray-300'}
            />
          ))}
          <span className="text-xs text-gray-500 ml-1">(4.2)</span>
        </div>

        {/* Price */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold text-green-600">₹299</span>
            <span className="text-sm text-gray-400 line-through">₹399</span>
          </div>
          
          <motion.button
            className="bg-green-600 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-green-700"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Add to Cart
          </motion.button>
        </div>
      </div>

      {/* Shimmer Effect */}
      <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:translate-x-full transition-transform duration-1000 ease-out" />
    </motion.div>
  );
};

export default EnhancedProductCard;