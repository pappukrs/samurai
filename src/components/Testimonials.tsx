'use client';

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "Raju Sardar",
    review:
      "The 1 BHK apartment I stayed in was absolutely fantastic. The city view was stunning, and the amenities provided were top-notch. Highly recommended for anyone visiting the city!",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    rating: 5, // Add a rating field to each testimonial
  },
  {
    id: 2,
    name: "Kushon Roy",
    review:
      "I had a wonderful experience staying in the 2 BHK apartment. The space was perfect for my family, and the service was excellent. A great place for a family getaway!",
    avatar: "https://randomuser.me/api/portraits/women/2.jpg",
    rating: 4,
  },
  {
    id: 3,
    name: "Javed Khan",
    review:
      "The service apartment was everything I hoped for. The luxury and comfort made my stay so pleasant. I loved the private pool and the spacious living area. Would definitely book again!",
    avatar: "https://randomuser.me/api/portraits/men/2.jpg",
    rating: 5,
  },
  {
    id: 4,
    name: "Khadir Khan Basha",
    review:
      "Amazing experience! The apartment exceeded my expectations. It was spacious, comfortable, and in a great location. Highly recommended for business trips or vacations!",
    avatar: "https://randomuser.me/api/portraits/women/3.jpg",
    rating: 4,
  },
  {
    id: 5,
    name: "Shreekanth Reddy",
    review:
      "The apartment was spotless and well-maintained. The amenities were excellent, and I had a very comfortable stay. A great value for the price!",
    avatar: "https://randomuser.me/api/portraits/men/3.jpg",
    rating: 3,
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto slide every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  // Get the three testimonials that are currently visible
  const visibleTestimonials = [
    testimonials[(currentIndex) % testimonials.length],
    testimonials[(currentIndex + 1) % testimonials.length],
    testimonials[(currentIndex + 2) % testimonials.length],
  ];

  return (
    <section className="py-16 px-8 bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 rounded-lg">
      <h2 className="text-4xl font-bold text-center text-white mb-12">
        What Our Guests Say
      </h2>
      <div className="flex overflow-hidden space-x-8">
        {visibleTestimonials.map((testimonial) => (
          <motion.div
            key={testimonial.id}
            className="flex-shrink-0 w-1/3 p-6 bg-gray-900 rounded-lg shadow-lg border border-gray-700 transition-transform"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <div className="flex flex-col items-center justify-center mb-4">
              <img
                src={testimonial.avatar}
                alt={testimonial.name}
                className="w-20 h-20 rounded-full object-cover mb-4 border-4 border-indigo-600"
              />
              <h3 className="text-xl font-semibold text-white mb-2 text-center">
                {testimonial.name}
              </h3>
            </div>
            <p className="text-gray-400 text-center mb-4">{testimonial.review}</p>
            <div className="flex justify-center items-center space-x-1">
              {/* Render stars based on the rating */}
              {[...Array(5)].map((_, index) => (
                <svg
                  key={index}
                  xmlns="http://www.w3.org/2000/svg"
                  fill={index < testimonial.rating ? "yellow" : "gray"}
                  viewBox="0 0 24 24"
                  width="20"
                  height="20"
                >
                  <path d="M12 2l2.4 7.2h7.6l-6 4.8 2.4 7.2-6-4.8-6 4.8 2.4-7.2-6-4.8h7.6z" />
                </svg>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
