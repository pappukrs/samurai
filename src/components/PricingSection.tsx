// src/components/PricingSection.tsx
'use client'
import { motion } from "framer-motion";


const PricingSection = () => {
  const pricingPlans = [
    {
      type: "Standard Room",
      pricePerNight: 50,
      features: ["1 Queen Bed", "Free Wi-Fi", "Air Conditioning"],
      discount: "10% off for 7+ nights",
    },
    {
      type: "Deluxe Room",
      pricePerNight: 80,
      features: ["1 King Bed", "Free Wi-Fi", "Balcony", "Ocean View"],
      discount: "15% off for 7+ nights",
    },
    {
      type: "Suite",
      pricePerNight: 120,
      features: ["2 King Beds", "Living Room", "Free Breakfast", "Jacuzzi"],
      discount: "20% off for 7+ nights",
    },
  ];

  return (
    <section className="py-12 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">Our Pricing Plans</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-8">
          Choose the perfect plan for your stay. Discounts available for long-term bookings!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-4">{plan.type}</h3>
              <p className="text-gray-800 dark:text-gray-200 mb-4">
                <span className="text-3xl font-bold">${plan.pricePerNight}</span> / night
              </p>
              <ul className="text-gray-600 dark:text-gray-400 mb-4 space-y-2">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <span className="mr-2 text-blue-500">✓</span> {feature}
                  </li>
                ))}
              </ul>
              <div className="text-green-500 font-semibold text-sm mb-4">{plan.discount}</div>
              <button className="w-full px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                Book Now
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
