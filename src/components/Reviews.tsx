// src/components/Reviews.tsx
'use client'
import { motion } from "framer-motion";

interface Review {
  id: number;
  name: string;
  rating: number;
  comment: string;
}

const reviews: Review[] = [
  { id: 1, name: "John Doe", rating: 5, comment: "Amazing experience! The rooms were very comfortable and the community was great." },
  { id: 2, name: "Jane Smith", rating: 4, comment: "Really enjoyed my stay. Great amenities and the staff were very helpful." },
  { id: 3, name: "Emma White", rating: 3, comment: "Good stay but the wifi could be improved. Otherwise, great place." },
];

const Reviews = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold text-center mb-6">What Our Customers Say</h2>
        <div className="space-y-8">
          {reviews.map((review) => (
            <motion.div
              key={review.id}
              className="bg-white p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center space-x-3">
                <div className="text-xl font-bold">{review.name}</div>
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, index) => (
                    <svg
                      key={index}
                      xmlns="http://www.w3.org/2000/svg"
                      fill={index < review.rating ? "currentColor" : "none"}
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 17.27l4.18 2.73-1.64-5.03L20 9.24l-5.19-.43L12 2 9.19 8.81 4 9.24l3.46 5.73-1.64 5.03L12 17.27z"
                      />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="mt-2 text-gray-700">{review.comment}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
