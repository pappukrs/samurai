'use client';
import { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { motion } from 'framer-motion';


const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [activeLink, setActiveLink] = useState<string>(''); // Track the active link
  const [scrolling, setScrolling] = useState(false); // For the horizontal line effect
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Control hamburger menu
  const [svgWidth, setSvgWidth] = useState(0); // Dynamic width for SVG

  // Handle the scroll effect for horizontal line and dynamic SVG width
  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 50); // Show line after scrolling 50px

      const scrollPercentage =
        window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);

      // Update SVG width dynamically based on scroll percentage
      setSvgWidth(scrollPercentage * 100); // Multiply by 100 for percentage-based width
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (link: string) => {
    setActiveLink(link); // Update active link
    setIsMenuOpen(false); // Close menu on click (for mobile)
  };

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 w-full bg-white dark:bg-gray-800 shadow-md z-50 `
} 
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-600 dark:text-white">slvskysuites</div>

        {/* Nav Items and Theme Toggle */}
        <div className="flex items-center space-x-4">
          {/* Hamburger Menu (visible on mobile) */}
          <button
            className="md:hidden p-2 text-gray-700 dark:text-gray-300 focus:outline-none"
            onClick={toggleMenu}
          >
            {isMenuOpen ? '✖️' : '☰'}
          </button>

          

          {/* Nav Items (hidden on small devices) */}
          <ul
            className={`${
              isMenuOpen ? 'flex' : 'hidden'
            } md:flex flex-col md:flex-row absolute md:static top-16 left-0 w-full md:w-auto bg-white dark:bg-gray-800 md:space-x-6 text-gray-700 dark:text-gray-300 p-4 md:p-0 transition-all duration-300 md:translate-y-0 ${
              isMenuOpen ? 'translate-y-0' : '-translate-y-full'
            }`}
          >
            {['Home', 'Rooms', 'Amenities', 'Pricing', 'About Us', 'Contact Us'].map((item) => (
              <li
                key={item}
                className={`cursor-pointer transition-all font-bold duration-300 p-2 rounded-md ${
                  activeLink === item
                    ? 'bg-red-600 text-black' // Active link styles
                    : 'hover:bg-red-600 hover:text-black'
                }`}
                onClick={() => handleLinkClick(item)}
              >
                {item}
              </li>
            ))}
          </ul>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 bg-gray-200 dark:bg-gray-600 rounded-full"
          >
            {theme === 'dark' ? '🌞' : '🌙'}
          </button>
        </div>
      </div>

      {/* Scroll-triggered line with dynamic width */}
      <svg width={`${svgWidth}%`} height="4" className="transition-all duration-300">
        <line x1="0" y1="2" x2="100%" y2="2" stroke="red" strokeWidth="4" />
      </svg>
    </motion.nav>
  );
};

export default Navbar;
