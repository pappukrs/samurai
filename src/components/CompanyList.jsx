'use client';

import { useState } from 'react';
import { motion } from 'framer-motion'; // For adding animations

const companies = [
  { name: 'Zomato', icon: 'https://logodownload.org/wp-content/uploads/2020/02/zomato-logo-1.png', url: 'https://www.zomato.com' },
  { name: 'Swiggy', icon: 'https://marketingmind.in/wp-content/uploads/2018/03/swiggy-logo-990x556-700x393.png', url: 'https://www.swiggy.com' },
  { name: 'Dominos', icon: 'https://www.pngall.com/wp-content/uploads/15/Dominos-Logo-PNG-Clipart.png', url: 'https://www.dominos.co.in' },
  { name: 'Flipkart', icon: 'https://logosmarcas.net/wp-content/uploads/2020/11/Flipkart-Emblema.png', url: 'https://www.flipkart.com' },
  { name: 'Amazon', icon: 'https://wallpaperaccess.com/full/1383587.jpg', url: 'https://www.amazon.com' },
  { name: 'Ola', icon: 'https://p.kindpng.com/picc/s/337-3376762_ola-logo-design-hd-png-download.png', url: 'https://www.olacabs.com' },
  { name: 'Uber', icon: 'https://logodownload.org/wp-content/uploads/2015/05/uber-logo-1-1.png', url: 'https://www.uber.com' },
  { name: 'Rapido', icon: 'https://images.yourstory.com/cs/images/companies/rapido-1588061801805.png?fm=auto&ar=1:1&mode=fill&fill=solid&fill-color=fff', url: 'https://www.rapido.bike' },
];

const CompanyList = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gradient-to-r from-green-400 via-green-500 to-green-600 p-6">
      <h1 className="text-4xl font-bold text-white mb-8">Companies Providing Services at this Place</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {companies.map((company, index) => (
          <motion.div
            key={index}
            className="flex items-center justify-center bg-gradient-to-br from-green-300 to-green-600 rounded-lg p-4 shadow-lg hover:scale-105 transition-transform duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <a href={company.url} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center text-white">
              <div className="mb-2">
                <img src={company.icon} alt={company.name} className="w-24 h-24 object-contain" />
              </div>
              {/* <span className="font-semibold text-lg">{company.name}</span> */}
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CompanyList;
