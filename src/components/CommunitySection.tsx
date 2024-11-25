'use client';
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const CommunitySection = () => {
  const images = [
    '/community/holi.jpg',
    '/community/holi.jpg',
    '/community/holi.jpg',
    '/community/holi.jpg',
    '/community/holi.jpg',
    '/community/holi.jpg',
    '/community/holi.jpg',
    '/community/holi.jpg',
    '/community/holi.jpg',
    '/community/holi.jpg',
    '/community/holi.jpg',
    '/community/holi.jpg',
    '/community/holi.jpg',
   
  ];

  const [currentImage, setCurrentImage] = useState(images[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      const currentIndex = images.indexOf(currentImage);
      const nextIndex = (currentIndex + 1) % images.length;
      setCurrentImage(images[nextIndex]);
    }, 2000); // Change image every 2 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [currentImage, images]);

  return (
    <section className="py-16 bg-gradient-to-r from-purple-500 via-indigo-600 to-blue-500 text-white">
      <div className="max-w-7xl mx-auto text-center px-6">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-5xl font-extrabold mb-6"
        >
          Build Your Network, Elevate Your Business at SLV SKY SUITES
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-lg md:text-xl font-light mb-8"
        >
          Join a community of professionals, entrepreneurs, and innovators. At SLV SKY SUITES, we offer collaborative spaces, exclusive events, and opportunities to grow your network and business.
        </motion.p>

        {/* Main Image Display */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative mb-8 rounded-lg overflow-hidden shadow-lg"
        >
          <img
            src={currentImage}
            alt="Community Event"
            className="w-full h-96 object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-center text-white">
            <p className="text-lg font-semibold">Engage, Innovate, Connect</p>
          </div>
        </motion.div>

        {/* Thumbnails for Image Change */}
        <div className="flex justify-center space-x-4 mb-12">
          {images.map((image, index) => (
            <motion.div
              key={index}
              className="cursor-pointer relative w-24 h-24 overflow-hidden rounded-lg shadow-lg transform transition-all duration-300 hover:scale-110"
              onClick={() => setCurrentImage(image)} // Set image on thumbnail click
              whileHover={{ scale: 1.1 }} // Slightly enlarge on hover
            >
              <img
                src={image}
                alt={`Thumbnail ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-12 space-x-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <button className="px-8 py-4 bg-yellow-500 hover:bg-yellow-600 text-gray-900 rounded-full shadow-lg transform transition-all duration-300 ease-in-out hover:scale-105">
            Explore Our Events
          </button>
          <button className="px-8 py-4 bg-gray-800 hover:bg-gray-700 text-white rounded-full shadow-lg transform transition-all duration-300 ease-in-out hover:scale-105">
            Become a Member
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default CommunitySection;
