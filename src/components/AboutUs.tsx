'use client'
import { motion } from "framer-motion";
import CountUp from 'react-countup';  // Import the CountUp component

const AboutUs = () => {
  return (
    <section className="py-12 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white">About Us</h2>
          <p className="mt-4 text-gray-600 dark:text-gray-300">
            At <span className="text-blue-600 dark:text-blue-400 font-semibold">slvskysuites</span>, 
            we believe in combining comfort, style, and community to create unforgettable living experiences. 
            Whether you're staying for a day or settling for months, our spaces are designed to make you feel at home.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div
            className="p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              <CountUp start={0} end={10} duration={4} />
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mt-2">Locations</p>
          </motion.div>

          <motion.div
            className="p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              <CountUp start={0} end={1000} duration={4} />
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mt-2">Rooms</p>
          </motion.div>

          <motion.div
            className="p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              <CountUp start={0} end={20000} duration={4} />
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mt-2">Happy Residents</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
