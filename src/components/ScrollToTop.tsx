'use client';
import { motion } from 'framer-motion';
import { FaChevronUp } from 'react-icons/fa';
import { Tooltip } from 'react-tooltip'; // To show tooltip on hover

const ScrollToTop = () => {
  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative">
      <motion.button
        className="fixed left-6 bottom-6 p-3 rounded-full bg-blue-600 text-white shadow-lg hover:bg-blue-700 transition duration-300"
        onClick={scrollToTop}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        aria-label="Scroll to top"
      >
        <FaChevronUp className="text-2xl" />
      </motion.button>

      {/* Tooltip that shows on hover */}
      {/* <Tooltip
        anchorSelect="button"
        content="Move to Top"
        place="top"
        effect="solid"
      /> */}
    </div>
  );
};

export default ScrollToTop;
