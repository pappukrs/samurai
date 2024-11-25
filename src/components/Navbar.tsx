'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [activeLink, setActiveLink] = useState<string>('Home');
  const [scrolling, setScrolling] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [svgWidth, setSvgWidth] = useState(0);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 50);
      const scrollPercentage =
        window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
      setSvgWidth(scrollPercentage * 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (link: string, route: string) => {
    setActiveLink(link);
    router.push(route);
    setIsMenuOpen(false);
  };

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg z-50`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <div
          className="text-3xl font-extrabold tracking-wide cursor-pointer"
          onClick={() => router.push('/')}
        >
          SLV SkySuites
        </div>

        {/* Navigation Links */}
        <div className="flex items-center space-x-4">
          {/* Hamburger Menu */}
          <button
            className="md:hidden p-2 text-white focus:outline-none"
            onClick={toggleMenu}
          >
            {isMenuOpen ? '✖️' : '☰'}
          </button>

          {/* Nav Items */}
          <ul
            className={`${
              isMenuOpen ? 'flex' : 'hidden'
            } md:flex flex-col md:flex-row absolute md:static top-16 left-0 w-full md:w-auto bg-gradient-to-r from-purple-500 to-pink-500 md:space-x-6 text-white p-4 md:p-0 transition-all duration-500 md:translate-y-0 ${
              isMenuOpen ? 'translate-y-0' : '-translate-y-full'
            }`}
          >
            {['Home', 'Rooms', 'Amenities', 'Pricing', 'About Us', 'Contact Us'].map((item) => (
              <motion.li
                key={item}
                className={`cursor-pointer transition-all font-semibold text-lg px-4 py-2 rounded-lg ${
                  activeLink === item
                    ? 'bg-white text-purple-500'
                    : 'hover:bg-white hover:text-purple-500'
                }`}
                whileHover={{ scale: 1.1 }}
                onClick={() => {
                  const route =
                    item.toLowerCase() === 'home'
                      ? '/'
                      : `/${item.replace(/\s+/g, '').toLowerCase()}`;
                  handleLinkClick(item, route);
                }}
              >
                {item}
              </motion.li>
            ))}
          </ul>

          {/* Theme Toggle */}
          <motion.button
            onClick={toggleTheme}
            className="p-2 bg-gray-200 dark:bg-gray-600 rounded-full shadow-md"
            whileHover={{ scale: 1.1 }}
          >
            {theme === 'dark' ? '🌞' : '🌙'}
          </motion.button>
        </div>
      </div>

      {/* Scroll-triggered line */}
      <svg width={`${svgWidth}%`} height="4" className="transition-all duration-300">
        <line x1="0" y1="2" x2="100%" y2="2" stroke="white" strokeWidth="4" />
      </svg>
    </motion.nav>
  );
};

export default Navbar;
