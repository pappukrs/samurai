// src/components/RoomCard.tsx
'use client'
import { motion } from "framer-motion";

interface RoomCardProps {
  image: string;
  type: string;
  price: number;
  amenities: string[];
}

const RoomCard: React.FC<RoomCardProps> = ({ image, type, price, amenities }) => {
  return (
    <motion.div
      className="bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <img src={image} alt={type} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">{type}</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-2">₹{price}/night</p>
        <div className="flex space-x-2">
          {amenities.map((amenity, index) => (
            <span key={index} className="px-2 py-1 text-xs bg-gray-200 dark:bg-gray-700 rounded-md">
              {amenity}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default RoomCard;
