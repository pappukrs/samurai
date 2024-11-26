'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsappContact = () => {
  const handleWhatsAppClick = () => {
    // Open WhatsApp with the specified number (modify the phone number as needed)
    window.open('https://wa.me/8809501517', '_blank');
  };

  return (
    <motion.div
      className="fixed bottom-8 right-8 bg-green-600 text-white p-4 rounded-lg shadow-lg cursor-pointer z-50"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.1 }}
      onClick={handleWhatsAppClick}
    >
      <div className="flex items-center justify-center">
        <div className="bg-white p-2 rounded-full">
          <FaWhatsapp className="text-green-600 text-3xl" />
        </div>
      </div>
      <div className="mt-2 text-center text-sm">Contact Us</div>
    </motion.div>
  );
};

export default WhatsappContact;
