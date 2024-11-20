'use client';
import { motion } from "framer-motion";
import { 
  FaWifi, FaDumbbell, FaTv, FaCouch, FaBook, FaCoffee, 
  FaHotTub, FaBroom, FaUserShield, FaBed, FaCarrot, FaBriefcaseMedical 
} from "react-icons/fa";
import { MdKitchen, MdBalcony, MdFitnessCenter, MdElevator, MdOutlineRoomService } from "react-icons/md";

const amenities = [
  { icon: FaWifi, label: "Unlimited Hi-Speed Wi-Fi" },
  { icon: FaHotTub, label: "24x7 Hot & Cold Water Availability" },
  { icon: MdElevator, label: "Lift" },
  { icon: MdBalcony, label: "Good Ventilation & Luxury Rooms with Balcony" },
  { icon: FaUserShield, label: "CCTV Surveillance with Dedicated Manager" },
  { icon: FaBed, label: "Strong Cots with Branded Luxury Mattress" },
  { icon: MdKitchen, label: "Separate Kitchen for Self Cooking" },
  { icon: FaDumbbell, label: "Gym and Play Area" },
  { icon: MdFitnessCenter, label: "Yoga Room & Indoor Games" },
  { icon: FaTv, label: "Big LED TV at Spacious Dining Area" },
  { icon: FaCouch, label: "Luxury Sofa Seating in Each Flat" },
  { icon: FaBook, label: "Mini Library Stand" },
  { icon: FaCoffee, label: "Daily Coffee with Newspaper" },
  { icon: FaBroom, label: "Hygiene Cleaning for Every Room Every Day" },
  { icon: FaBriefcaseMedical, label: "Mini Pharmacy with Free First-Aid Medical Supplies" },
  { icon: FaCarrot, label: "Water Dispensers and Refrigerator" },
  { icon: FaUserShield, label: "Fingerprint Access for All Tenants" },
  { icon: MdOutlineRoomService, label: "Laundry Service" },
  { icon: FaBriefcaseMedical, label: "Dedicated Workspace" }
];

const AmenitiesSection = () => {
  return (
    <section className="py-12 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">Our Amenities</h2>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
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
