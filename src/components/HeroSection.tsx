// src/components/HeroSection.tsx
'use client'
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <div className="relative w-full h-screen bg-cover bg-center" style={{ backgroundImage: "url('/hero-banner.jpg')" }}>
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center text-white">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold mb-4"
        >
          Experience Comfort, Style, and Community
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-lg md:text-2xl mb-8"
        >
          Your perfect coliving space awaits.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="space-x-4"
        >
          <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md">Book Now</button>
          <button className="px-6 py-3 bg-gray-200 hover:bg-gray-300 text-gray-900 rounded-md">Explore Rooms</button>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
