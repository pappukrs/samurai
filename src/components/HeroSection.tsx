'use client';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';

const HeroSection = () => {
  const images = [
    'https://www.stouchlighting.com/hs-fs/hubfs/Apartment%20Buidling.jpeg?width=1500&height=997&name=Apartment%20Buidling.jpeg',
    'https://cache.marriott.com/marriottassets/marriott/KULDT/kuldt-reception-0047-hor-feat.jpg',
    'https://png.pngtree.com/background/20230616/original/pngtree-modern-luxury-hotel-reception-and-lounge-office-in-stunning-3d-render-picture-image_3665680.jpg',
    'https://hoteldesigns.weebly.com/uploads/4/2/2/0/4220374/design-and-construction-hotel-reception-design-365cf45b792dfcd658663985e54f3d3e_orig.jpg',
    'https://www.bluelankatours.com/wp-content/uploads/2020/01/Evening_Pool_View_at_Anantara_Peace_Haven.jpg',
    'https://wallpapercave.com/wp/wp3598846.jpg',
    'https://wallpaperboat.com/wp-content/uploads/2019/11/hotel-10.jpg',
  ];

  return (
    <div className="relative w-full h-screen">
      {/* Background Swiper with Gradient Animation */}
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

      {/* Foreground Content with Gradient and Text Animations */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-red-500 bg-opacity-60 flex flex-col items-center justify-center text-center text-white z-10">
        {/* Title Animation */}
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-extrabold text-shadow-md mb-4"
        >
          SLV SKY SUITES
        </motion.h1>

        {/* Subtitle Animation */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-lg md:text-2xl font-light mb-8"
        >
          Stay Connected to Comfort
        </motion.p>

        {/* Button Group with Animation and Hover Effects */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="space-x-6"
        >
          <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg transform transition-all duration-300 ease-in-out hover:scale-105">
            Book Now
          </button>
          <button className="px-8 py-4 bg-gray-200 hover:bg-gray-300 text-gray-900 rounded-full shadow-lg transform transition-all duration-300 ease-in-out hover:scale-105">
            Explore Rooms
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
