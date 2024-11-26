'use client';
import { motion } from 'framer-motion';
import { FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';

export default function Footer() {

  const dropletAnimation = {
    hidden: { opacity: 0, y: -100 },
    visible: {
      opacity: 0.6,
      y: [0, 30, 0],
      transition: { duration: 3, repeat: Infinity },
    },
  };

  // Gradient color for the footer (no theme condition)
  const gradientColorStart = '#0D0E0E'; // Dark shade you requested
  const gradientColorEnd = '#589CF8';   // The previous blue color you wanted to blend
  const bgColor = `bg-gradient-to-r from-${gradientColorStart} via-indigo-800 to-${gradientColorEnd}`;
  const textColor = 'text-white'; // Always white text

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
        style={{ animationDelay: '1s' }}
      />
      <motion.div
        className="absolute top-40 right-1/4 w-6 h-6 bg-white rounded-full"
        variants={dropletAnimation}
        initial="hidden"
        animate="visible"
        style={{ animationDelay: '2s' }}
      />

      {/* Footer Content */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        
        {/* Column 1: About Company */}
        <div className="text-center md:text-left">
          <h2 className="text-3xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500">
            About Company
          </h2>
          <p className="text-lg">
            SLV Sky Suites offers the best in luxury accommodations, delivering comfort, style, and service.
            Experience unparalleled quality during your stay.
          </p>
        </div>

        {/* Column 2: Address */}
        <div className="flex flex-col items-center md:items-start space-y-4 mt-4 md:mt-0">
          <h2 className="text-xl font-bold">Address</h2>
          <p className="text-sm">123 Comfort Lane, Suite 505, City, Country</p>
          <a
            href="https://www.google.com/maps?q=123+Comfort+Lane,+City,+Country"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white-400 hover:underline"
          >
            See on Map
          </a>
        </div>

        {/* Column 3: Useful Links */}
        <div className="flex flex-col items-center md:items-start space-y-4 mt-4 md:mt-0">
          <h2 className="text-xl font-bold">Useful Links</h2>
          <ul className="text-sm">
            <li>
              <a href="/terms-and-conditions" className="hover:underline">Terms & Conditions</a>
            </li>
            <li>
              <a href="/cancellation-policy" className="hover:underline">Cancellation Policy</a>
            </li>
            <li>
              <a href="/privacy-cookie-policy" className="hover:underline">Privacy & Cookie Policy</a>
            </li>
          </ul>
        </div>

        {/* Column 4: Contact Us */}
        <div className="flex flex-col items-center md:items-start space-y-4 mt-4 md:mt-0">
          <h2 className="text-xl font-bold">Contact Us</h2>
          <p className="text-sm">Feel free to reach out for inquiries or support.</p>
          <a
            href="mailto:slvskysuites@gmail.com"
            className="text-white-400 hover:underline"
          >
            Email: slvskysuites@gmail.com
          </a>
          <a
            href="tel:+911234567891"
            className="text-white-400 hover:underline"
          >
            Phone: +91 1234567891
          </a>
        </div>
      </div>

      {/* Footer Bottom - Social Media & Copyright */}
      <div className="mt-12 mb-4 border-t border-white pt-4  text-center md:text-left text-xs">
        <div className="flex gap-6 mt-4 justify-center md:justify-center">
          <FaInstagram size={28} className="hover:text-gray-400 cursor-pointer transition-all duration-300 ease-in-out" />
          <FaFacebook size={28} className="hover:text-gray-400 cursor-pointer transition-all duration-300 ease-in-out" />
          <FaTwitter size={28} className="hover:text-gray-400 cursor-pointer transition-all duration-300 ease-in-out" />
        </div>
        
        <div className="flex justify-center mt-4 md:justify-center gap-6">
          <p >© 2024 SLV Sky Suites. All Rights Reserved.</p>
        </div>
        
      </div>

      {/* Made With 💖 Section */}
      <motion.p className="text-center mt-8">
        Made with 💖{" "}
        <motion.span
          className="inline-block"
          animate={{ y: [0, -10, 0] }}
          transition={{
            duration: 1,
            repeat: Infinity,
            repeatType: 'loop',
            ease: 'easeInOut',
          }}
        >
          <a href="https://www.codeserver.in" className="underline">CodeServer</a>
        </motion.span>
      </motion.p>
    </div>
  );
}
