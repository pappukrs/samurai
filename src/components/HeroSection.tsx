'use client';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';

const HeroSection = () => {
  const images = [
    'https://cache.marriott.com/marriottassets/marriott/KULDT/kuldt-reception-0047-hor-feat.jpg',
    'https://png.pngtree.com/background/20230616/original/pngtree-modern-luxury-hotel-reception-and-lounge-office-in-stunning-3d-render-picture-image_3665680.jpg',
    'https://hoteldesigns.weebly.com/uploads/4/2/2/0/4220374/design-and-construction-hotel-reception-design-365cf45b792dfcd658663985e54f3d3e_orig.jpg',
    'https://www.bluelankatours.com/wp-content/uploads/2020/01/Evening_Pool_View_at_Anantara_Peace_Haven.jpg',
    'https://wallpapercave.com/wp/wp3598846.jpg',
    'https://wallpaperboat.com/wp-content/uploads/2019/11/hotel-10.jpg',
  ];

  return (
    <div className="relative w-full h-screen">
      {/* Background Swiper */}
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        pagination={{ clickable: true }}
        className="absolute inset-0 w-full h-full z-0"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${image})` }}
            ></div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Foreground Content */}
      <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center text-center text-white z-10">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold mb-4"
        >
          Experience Comfort, Style, and Community
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-lg md:text-2xl mb-8"
        >
          Your perfect coliving space awaits.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="space-x-4"
        >
          <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md">
            Book Now
          </button>
          <button className="px-6 py-3 bg-gray-200 hover:bg-gray-300 text-gray-900 rounded-md">
            Explore Rooms
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
