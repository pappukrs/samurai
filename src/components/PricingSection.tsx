'use client'
import { motion } from "framer-motion";

const PricingSection = () => {
  const pricingPlans = [
    {
      type: "1 BHK Room",
      features: [
        "Queen Bed",
        "Free Wi-Fi",
        "Air Conditioning",
        "Fully Equipped Kitchen",
        "Natural Balcony View",
        "TV & Refrigerator",
      ],
      discount: "10% off for 7+ nights",
    },
    {
      type: "2 BHK Room",
      features: [
        "King Bed",
        "Free Wi-Fi",
        "Balcony with Ocean View",
        "Fully Equipped Kitchen",
        "TV & Refrigerator",
        "Spacious Living Area",
      ],
      discount: "15% off for 7+ nights",
    },
    {
      type: "Premium Suite",
      features: [
        "2 King Beds",
        "Living Room",
        "Free Breakfast",
        "Jacuzzi",
        "Ocean View",
        "Personalized Services",
      ],
      discount: "20% off for 7+ nights",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-purple-600 via-indigo-700 to-blue-800 text-white">
      <div className="max-w-7xl mx-auto text-center px-6">
        <motion.h2
          className="text-4xl font-extrabold mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Affordable & Luxurious Rooms at SLV Sky Suites
        </motion.h2>

        <motion.p
          className="text-lg mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Choose from our comfortable rooms, all designed with luxury and convenience in mind. Enjoy special discounts for long stays!
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-tl from-blue-600 to-blue-400 p-6 rounded-lg shadow-lg hover:shadow-xl transform transition-all hover:scale-105"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-xl font-semibold mb-4 text-yellow-400">{plan.type}</h3>

              <ul className="space-y-3 mb-4">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-sm">
                    <span className="mr-2 text-green-400">✓</span> {feature}
                  </li>
                ))}
              </ul>

              <div className="text-sm text-green-300 mb-4">{plan.discount}</div>

              <motion.button
                className="w-full px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-gray-900 rounded-lg shadow-md transform transition-all duration-300 ease-in-out hover:scale-105"
                whileHover={{ scale: 1.05 }}
              >
                Book Now
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
