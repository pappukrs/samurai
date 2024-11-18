'use client'

import { motion } from "framer-motion";

export default function FloatingCard() {
  // Droplet animation
  const dropletAnimation = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 0.5,
      y: [0, 15, 0],
      transition: { duration: 2, repeat: Infinity },
    },
  };

  return (
    <div>
      {/* Floating Card */}
      <div className="fixed bottom-0 left-0 right-0 bg-lime-200 shadow-lg rounded-t-lg p-6 flex justify-between items-center z-50">
        {/* Logo */}
        <div className="flex items-center gap-4">
          <img
            src="/logo-placeholder.png" // Replace with your logo
            alt="SlvSuites Hotel"
            className="w-16 h-16 rounded-lg shadow-md"
          />
          <div>
            <h2 className="text-xl font-bold">Slvskysuites HOTEL</h2>
            <p>Book Direct for our Best available Rates</p>
          </div>
        </div>

        {/* Button */}
        <button className="bg-lime-500 text-white px-6 py-2 rounded-md font-semibold hover:bg-lime-600 transition">
          BOOK DIRECT
        </button>

        {/* Close Button */}
        <button className="absolute top-3 right-3 bg-black text-white w-8 h-8 rounded-full flex justify-center items-center hover:bg-gray-800 transition">
          &times;
        </button>

        {/* Animated Droplets */}
        <motion.div
          className="absolute -top-6 left-10 w-4 h-4 bg-lime-300 rounded-full"
          variants={dropletAnimation}
          initial="hidden"
          animate="visible"
        />
        <motion.div
          className="absolute -top-10 right-16 w-6 h-6 bg-lime-300 rounded-full"
          variants={dropletAnimation}
          initial="hidden"
          animate="visible"
          style={{ animationDelay: "1s" }}
        />
      </div>
    </div>
  );
}
