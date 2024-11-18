// src/components/Navbar.tsx
'use client'
import { useContext } from "react";
import { useTheme } from '../context/ThemeContext';
import { motion } from "framer-motion";

const Navbar = () => {
    const { theme, toggleTheme } = useTheme();

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 w-full bg-white dark:bg-gray-800 shadow-md z-50"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-600 dark:text-white">slvskysuites</div>

        {/* Links */}
        <ul className="hidden md:flex space-x-6 text-gray-700 dark:text-gray-300">
          <li className="hover:text-blue-600 cursor-pointer">Home</li>
          <li className="hover:text-blue-600 cursor-pointer">Rooms</li>
          <li className="hover:text-blue-600 cursor-pointer">Amenities</li>
          <li className="hover:text-blue-600 cursor-pointer">Pricing</li>
          <li className="hover:text-blue-600 cursor-pointer">About Us</li>
          <li className="hover:text-blue-600 cursor-pointer">Contact Us</li>
        </ul>

        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="p-2 bg-gray-200 dark:bg-gray-600 rounded-full"
        >
          {theme === "dark" ? "🌞" : "🌙"}
        </button>
      </div>
    </motion.nav>
  );
};

export default Navbar;
