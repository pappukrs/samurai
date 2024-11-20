'use client';
import { motion } from "framer-motion";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";
import { useTheme } from "@/context/ThemeContext"; // Importing the useTheme hook

export default function Footer() {
  // Accessing the theme and toggleTheme function from context
  const { theme, toggleTheme } = useTheme();

  // Animation for droplets
  const dropletAnimation = {
    hidden: { opacity: 0, y: -100 },
    visible: {
      opacity: 0.6,
      y: [0, 30, 0],
      transition: { duration: 3, repeat: Infinity },
    },
  };

  // Background color and text color based on the theme
  const bgColor = theme === 'dark' ? "bg-black" : "bg-blue-900";
  const textColor = theme === 'dark' ? "text-gray-300" : "text-white";

  return (
    <div className={`relative ${bgColor} ${textColor} p-8`}>
      {/* Toggle Button for Dark Mode */}
      {/* <button
        className="absolute top-4 right-4 bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-700"
        onClick={toggleTheme}
      >
        {theme === 'dark' ? "Light Mode" : "Dark Mode"}
      </button> */}

      {/* Droplets Animation */}
      <motion.div
        className="absolute top-10 left-10 w-5 h-5 bg-white rounded-full"
        variants={dropletAnimation}
        initial="hidden"
        animate="visible"
      />
      <motion.div
        className="absolute top-20 left-1/4 w-7 h-7 bg-white rounded-full"
        variants={dropletAnimation}
        initial="hidden"
        animate="visible"
        style={{ animationDelay: "1s" }}
      />
      <motion.div
        className="absolute top-40 right-1/4 w-6 h-6 bg-white rounded-full"
        variants={dropletAnimation}
        initial="hidden"
        animate="visible"
        style={{ animationDelay: "2s" }}
      />

      {/* Footer Content */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center">
        {/* Left Section */}
        <div>
          <h1 className="text-3xl font-bold mb-2">slvskysuites</h1>
          <p className="text-sm">A Luxury suites of hotels.</p>
        </div>

        {/* Center Links */}
        <div className="flex flex-wrap gap-4 mt-4 md:mt-0">
          <div>
            <h2 className="font-bold mb-2">Why slvskysuites?</h2>
          </div>
          <div>
            <h2 className="font-bold mb-2">Contact</h2>
            <ul>
              <li>slvskysuites@gmail.com</li>
              <li>+91 1234567891</li>
            </ul>
          </div>
        </div>

        {/* Social Media */}
        <div className="flex gap-6 mt-4 md:mt-0">
          <FaInstagram size={24} className="hover:text-gray-400 cursor-pointer" />
          <FaFacebook size={24} className="hover:text-gray-400 cursor-pointer" />
          <FaTwitter size={24} className="hover:text-gray-400 cursor-pointer" />
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-8 border-t border-white pt-4 flex flex-wrap justify-between text-xs">
        <p>©2024 slvskysuites</p>
        <div className="flex gap-4">
          {/* Updatterms-and-conditionsed with links */}
          <a href="/terms-and-conditions" className="hover:underline">
            Terms & Conditions
          </a>
          <a href="/cancellation-policy" className="hover:underline">
            Cancellation Policy
          </a>
          <a href="/privacy-cookie-policy" className="hover:underline">
            Privacy & Cookie Policy
          </a>
        </div>
        <p>slvskysuites Pvt Ltd</p>
      </div>
      <p className="text-center">
        Developed by {" "} 💖
        <a href="https://www.codeserver.in">
          <span className="underline">codeserver</span>
        </a>
      </p>
    </div>
  );
}
