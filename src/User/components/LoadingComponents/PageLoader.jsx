import React from 'react';
import { motion } from 'framer-motion';
import { FaLeaf } from 'react-icons/fa';

const PageLoader = () => {
  const containerVariants = {
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const leafVariants = {
    animate: {
      y: [0, -20, 0],
      rotate: [0, 10, -10, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const textVariants = {
    animate: {
      opacity: [0.5, 1, 0.5],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="fixed inset-0 bg-white/90 backdrop-blur-sm flex items-center justify-center z-50">
      <motion.div
        variants={containerVariants}
        animate="animate"
        className="text-center"
      >
        {/* Animated Leaves */}
        <div className="flex justify-center space-x-2 mb-6">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              variants={leafVariants}
              animate="animate"
              style={{ animationDelay: `${i * 0.2}s` }}
              className="text-green-600"
            >
              <FaLeaf size={24} />
            </motion.div>
          ))}
        </div>

        {/* Loading Text */}
        <motion.h2
          variants={textVariants}
          animate="animate"
          className="text-2xl font-semibold text-gray-800 mb-2"
        >
          Loading VigyBag
        </motion.h2>
        
        <motion.p
          variants={textVariants}
          animate="animate"
          className="text-gray-600"
          style={{ animationDelay: '0.5s' }}
        >
          Preparing your eco-friendly experience...
        </motion.p>

        {/* Progress Bar */}
        <div className="w-64 h-2 bg-gray-200 rounded-full mt-6 overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-green-400 to-green-600 rounded-full"
            animate={{
              x: [-256, 256],
              transition: {
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default PageLoader;