// src/components/CommunitySection.tsx
'use client'
import { motion } from "framer-motion";


const CommunitySection = () => {
  return (
    <section className="py-12 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">Join Our Community</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-8">
          Experience vibrant community events, shared spaces, and meaningful connections.
        </p>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } },
          }}
        >
          {/* Add testimonials here */}
        </motion.div>
      </div>
    </section>
  );
};

export default CommunitySection;
