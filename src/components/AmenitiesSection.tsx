// src/components/AmenitiesSection.tsx
'use client'
import { motion } from "framer-motion";
import { FaWifi, FaSwimmingPool, FaDumbbell } from "react-icons/fa";

const amenities = [
  { icon: FaWifi, label: "Wi-Fi" },
  { icon: FaSwimmingPool, label: "Swimming Pool" },
  { icon: FaDumbbell, label: "Gym" },
];

const AmenitiesSection = () => {
  return (
    <section className="py-12 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">Our Amenities</h2>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } },
          }}
        >
          {amenities.map((item, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center bg-white dark:bg-gray-800 shadow-md rounded-lg p-4"
              variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
            >
              <item.icon className="text-blue-600 dark:text-blue-400 text-4xl mb-4" />
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">{item.label}</h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AmenitiesSection;
