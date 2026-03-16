import React from 'react';
import { motion } from 'framer-motion';

const ProductCardSkeleton = () => {
  const shimmerVariants = {
    animate: {
      x: [-100, 100],
      transition: {
        repeat: Infinity,
        duration: 1.5,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden max-w-[280px] mx-auto">
      {/* Image Skeleton */}
      <div className="relative h-48 bg-gray-200 overflow-hidden">
        <motion.div
          variants={shimmerVariants}
          animate="animate"
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent"
        />
      </div>

      {/* Content Skeleton */}
      <div className="p-4 space-y-3">
        {/* Title */}
        <div className="relative h-4 bg-gray-200 rounded overflow-hidden">
          <motion.div
            variants={shimmerVariants}
            animate="animate"
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent"
          />
        </div>
        
        {/* Description */}
        <div className="space-y-2">
          <div className="relative h-3 bg-gray-200 rounded overflow-hidden">
            <motion.div
              variants={shimmerVariants}
              animate="animate"
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent"
            />
          </div>
          <div className="relative h-3 bg-gray-200 rounded w-3/4 overflow-hidden">
            <motion.div
              variants={shimmerVariants}
              animate="animate"
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent"
            />
          </div>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="w-3 h-3 bg-gray-200 rounded" />
          ))}
        </div>

        {/* Price and Button */}
        <div className="flex items-center justify-between">
          <div className="relative h-6 w-20 bg-gray-200 rounded overflow-hidden">
            <motion.div
              variants={shimmerVariants}
              animate="animate"
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent"
            />
          </div>
          <div className="relative h-8 w-24 bg-gray-200 rounded-full overflow-hidden">
            <motion.div
              variants={shimmerVariants}
              animate="animate"
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCardSkeleton;