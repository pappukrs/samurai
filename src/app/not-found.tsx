// app/not-found.js
'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

const NotFoundPage = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 dark:bg-gray-900 text-center">
      {/* Animated Sad Emoji */}
      <motion.div
        className="text-6xl mb-4"
        animate={{ y: [-10, 10, -10] }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatType: 'loop',
          ease: 'easeInOut',
        }}
      >
        😢
      </motion.div>

      {/* 404 Text */}
      <h1 className="text-5xl font-bold text-red-600 mb-4">404</h1>

      {/* Error Message */}
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
        Sorry, we couldn't find the page you were looking for.
      </p>

      {/* Back to Home Button */}
      <button
        onClick={() => router.push('/')}
        className="px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-all"
      >
        Go Back to Home
      </button>
    </div>
  );
};

export default NotFoundPage;
