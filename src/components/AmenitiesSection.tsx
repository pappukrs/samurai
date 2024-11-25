'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';

// Sample amenities data with images (replace URLs with actual image paths or URLs)
const amenities = [
  { img: '/amenities/wifi.jpg', label: "Unlimited Hi-Speed Wi-Fi" },
  { img: '/amenities/hot_water.jpg', label: "24x7 Hot & Cold Water Availability" },
  { img: '/amenities/lift.jpg', label: "Lift" },
  { img: '/amenities/ventilation.jpg', label: "Good Ventilation & Luxury Rooms with Balcony" },
  { img: '/amenities/security.jpg', label: "CCTV Surveillance with Dedicated Manager" },
  { img: '/amenities/cot.jpg', label: "Strong Cots with Branded Luxury Mattress" },
  { img: '/amenities/kitchen.jpg', label: "Separate Kitchen for Self Cooking" },
  { img: '/amenities/gym.jpg', label: "Gym and Play Area" },
  { img: '/amenities/yoga.jpg', label: "Yoga Room & Indoor Games" },
  { img: '/amenities/tv.jpg', label: "Big LED TV at Spacious Dining Area" },
  { img: '/amenities/sofa.jpg', label: "Luxury Sofa Seating in Each Flat" },
  { img: '/amenities/library.jpg', label: "Mini Library Stand" },
  { img: '/amenities/coffee.jpg', label: "Daily Coffee with Newspaper" },
  { img: '/amenities/cleaning.jpg', label: "Hygiene Cleaning for Every Room Every Day" },
  { img: '/amenities/pharmacy.jpg', label: "Mini Pharmacy with Free First-Aid Medical Supplies" },
  { img: '/amenities/fridge.jpg', label: "Water Dispensers and Refrigerator" },
  { img: '/amenities/fingerprint.jpg', label: "Fingerprint Access for All Tenants" },
  { img: '/amenities/laundry.jpg', label: "Laundry Service" },
  { img: '/amenities/workspace.jpg', label: "Dedicated Workspace" },
];

const AmenitiesSection = () => {
  const [showAll, setShowAll] = useState(false); // State to toggle visibility of all amenities

  const amenitiesToShow = showAll ? amenities : amenities.slice(0, 6); // Show first 6 amenities initially

  return (
    <section className="py-12 bg-gradient-to-r from-blue-500 to-teal-500 dark:from-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-white mb-8">Our Amenities</h2>
        
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } },
          }}
        >
          {amenitiesToShow.map((item, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-105"
              variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
            >
              <img src={item.img} alt={item.label} className="w-full h-48 object-cover mb-4 rounded-md" />
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">{item.label}</h3>
            </motion.div>
          ))}
        </motion.div>

        {/* Show See More button */}
        {!showAll && (
          <motion.button
            className="mt-6 text-white bg-teal-600 py-2 px-4 rounded-md hover:bg-teal-700 transition-all duration-300"
            onClick={() => setShowAll(true)}
          >
            See More
          </motion.button>
        )}
      </div>
    </section>
  );
};

export default AmenitiesSection;
