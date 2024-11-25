'use client'
import { motion } from "framer-motion";
import CountUp from 'react-countup';  // Import the CountUp component

const AboutUs = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-600 via-indigo-700 to-purple-800 text-white">
      <div className="max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-extrabold leading-tight text-white mb-6">
            Welcome to <span className="text-yellow-400">SLV Sky Suites</span>
          </h2>
          <p className="text-xl font-light text-gray-300 max-w-3xl mx-auto mb-8">
            At <span className="text-yellow-400 font-semibold">SLV Sky Suites</span>, we pride ourselves on offering luxury service apartments tailored to both short and long-term stays. 
            Whether you’re traveling for business, leisure, or need a comfortable home away from home, our spaces are designed with your comfort, convenience, and style in mind. 
            Every room is equipped with premium amenities, ensuring your stay is always memorable. 
            Experience modern living with breathtaking views, superior services, and unparalleled comfort.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            className="p-8 bg-gradient-to-tl from-indigo-500 to-purple-600 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-4xl font-bold text-yellow-300">
              <CountUp start={0} end={10} duration={4} />
            </h3>
            <p className="text-lg mt-2 text-gray-200">Locations</p>
            <p className="text-sm mt-4 text-gray-300">
              With over 10 prime locations, SLV Sky Suites offers the best in luxury living, no matter where you are.
            </p>
          </motion.div>

          <motion.div
            className="p-8 bg-gradient-to-tl from-indigo-500 to-purple-600 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-4xl font-bold text-yellow-300">
              <CountUp start={0} end={1000} duration={4} />
            </h3>
            <p className="text-lg mt-2 text-gray-200">Rooms</p>
            <p className="text-sm mt-4 text-gray-300">
              Over 1000 luxurious rooms designed for ultimate comfort. Each room is fully equipped to meet your needs.
            </p>
          </motion.div>

          <motion.div
            className="p-8 bg-gradient-to-tl from-indigo-500 to-purple-600 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-4xl font-bold text-yellow-300">
              <CountUp start={0} end={20000} duration={4} />
            </h3>
            <p className="text-lg mt-2 text-gray-200">Happy Residents</p>
            <p className="text-sm mt-4 text-gray-300">
              Over 20,000 satisfied residents who have experienced the comfort and convenience of SLV Sky Suites.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
