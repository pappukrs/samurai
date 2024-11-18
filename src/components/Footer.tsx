'use client'
import { motion } from "framer-motion";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";

export default function Footer() {
  // Animation for droplets
  const dropletAnimation = {
    hidden: { opacity: 0, y: -100 },
    visible: {
      opacity: 0.6,
      y: [0, 30, 0],
      transition: { duration: 3, repeat: Infinity },
    },
  };

  return (
    <div className="relative bg-blue-900 text-white p-8">
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
          <p className="text-sm">
            A Luxury suites of hotels.
          </p>
        </div>

        {/* Center Links */}
        <div className="flex flex-wrap gap-4 mt-4 md:mt-0">
          <div>
            <h2 className="font-bold mb-2">Why slvskysuites?</h2>
            {/* <ul>
              <li>Developers & Owners</li>
              <li>Careers</li>
            </ul> */}
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
          <FaInstagram size={24} className="hover:text-gray-200 cursor-pointer" />
          <FaFacebook size={24} className="hover:text-gray-200 cursor-pointer" />
          <FaTwitter size={24} className="hover:text-gray-200 cursor-pointer" />
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-8 border-t border-white pt-4 flex flex-wrap justify-between text-xs">
        <p>©2024 Slvskysuites</p>
        <div className="flex gap-4">
          <p>Terms & Conditions</p>
          <p>Cancellation Policy</p>
          <p>Privacy & Cookie Policy</p>
        </div>
        <p>slvskysuites Pvt Ltd</p>
      </div>
      <p className="text-center">Developed by <a href="https://www.codeserver.in"><span className="text-underline">codeserver</span></a></p>
    </div>
  );
}
