'use client';
import { motion } from "framer-motion";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";
import { useTheme } from "@/context/ThemeContext"; 

export default function Footer() {
  const { theme, toggleTheme } = useTheme();

  const dropletAnimation = {
    hidden: { opacity: 0, y: -100 },
    visible: {
      opacity: 0.6,
      y: [0, 30, 0],
      transition: { duration: 3, repeat: Infinity },
    },
  };

  const bgColor = theme === 'dark' ? "bg-gradient-to-r from-blue-900 via-indigo-800 to-purple-900" : "bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400";
  const textColor = theme === 'dark' ? "text-gray-300" : "text-white";

  return (
    <div className={`relative ${bgColor} ${textColor} p-12`}>
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
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center space-y-6 md:space-y-0">
        {/* Left Section */}
        <div className="text-center md:text-left">
          <h1 className="text-4xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500">
            SLV Sky Suites
          </h1>
          <p className="text-lg">Luxury suites offering unparalleled comfort and style. Your perfect stay awaits.</p>
        </div>

        {/* Center Links */}
        <div className="flex flex-wrap gap-8 mt-4 md:mt-0">
          <div>
            <h2 className="font-bold mb-4 text-xl">Why Choose Us?</h2>
            <p>Experience premium amenities, exceptional service, and a warm welcoming atmosphere. Whether short-term or long-term, we ensure your comfort.</p>
          </div>
          <div>
            <h2 className="font-bold mb-4 text-xl">Contact</h2>
            <ul>
              <li>Email: <a href="mailto:slvskysuites@gmail.com" className="hover:underline">slvskysuites@gmail.com</a></li>
              <li>Phone: <a href="tel:+911234567891" className="hover:underline">+91 1234567891</a></li>
            </ul>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex gap-6 mt-4 md:mt-0 justify-center md:justify-start">
          <FaInstagram size={28} className="hover:text-gray-400 cursor-pointer transition-all duration-300 ease-in-out" />
          <FaFacebook size={28} className="hover:text-gray-400 cursor-pointer transition-all duration-300 ease-in-out" />
          <FaTwitter size={28} className="hover:text-gray-400 cursor-pointer transition-all duration-300 ease-in-out" />
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-12 mb-4 border-t border-white pt-4 text-center md:text-left text-xs">
        <p>© 2024 SLV Sky Suites. All Rights Reserved.</p>
        <div className="flex justify-center md:justify-start gap-6 mt-4">
          <a href="/terms-and-conditions" className="hover:underline">Terms & Conditions</a>
          <a href="/cancellation-policy" className="hover:underline">Cancellation Policy</a>
          <a href="/privacy-cookie-policy" className="hover:underline">Privacy & Cookie Policy</a>
        </div>
        <p className="mt-4">SLV Sky Suites Pvt Ltd</p>
      </div>

      <motion.p className="text-center mt-4">
        Made with 💖{" "}
        <motion.span
          className="inline-block"
          animate={{ y: [0, -10, 0] }}
          transition={{
            duration: 1,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
          }}
        >
          <a href="https://www.codeserver.in" className="underline">CodeServer</a>
        </motion.span>
      </motion.p>
    </div>
  );
}
