"use client"
import { useState } from "react";
import { useRouter } from "next/navigation"; // For navigation to details page
import { motion } from "framer-motion";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const roomsData = [
  {
    id: 1,
    name: "1 BHK Apartment",
    images: [
      "https://media.designcafe.com/wp-content/uploads/2021/11/26100053/living-room-in-1-bhk-flat-designed-with-textured-wallpaper-behind-entertainment-unit.jpg",
      "http://www.goastaycation.com/img/rooms/one-bhk-apartment-4.jpg",
    ],
    price: 4000,
    description: "Cozy 1 BHK apartment with a city view and modern amenities.",
    amenities: ["Free WiFi", "Breakfast Included", "Air Conditioning"],
    details: ["Refrigerator", "Cooking Utensils", "Washing Machine"],
  },
  {
    id: 2,
    name: "2 BHK Apartment",
    images: [
      "https://i.ytimg.com/vi/AdfTiMp-jJI/maxresdefault.jpg",
      "https://i.pinimg.com/originals/e8/71/a9/e871a900cd0cda1c11bb450165b9b02e.jpg",
      "http://www.goastaycation.com/img/rooms/one-bhk-apartment-4.jpg",

    ],
    price: 5000,
    description: "Spacious 2 BHK apartment ideal for families.",
    amenities: ["Free WiFi", "Air Conditioning", "Laundry Service"],
    details: ["Microwave", "Dining Table", "Iron"],
  },
  {
    id: 3,
    name: "Premium",
    images: [
      "https://www.italianbark.com/wp-content/uploads/2018/01/hotel-room-design-trends-italianbark-interior-design-blog.jpg",
      "https://r1imghtlak.mmtcdn.com/029145c6655811e7b186022a7a5c1e3f.jpg",
    ],
    price: 9000,
    description: "Luxury service apartment with premium facilities.",
    amenities: ["Free WiFi", "Breakfast Included", "Private Pool", "Mini Bar"],
    details: ["Blender", "Oven", "Dishwasher"],
  },
];

const Rooms = () => {
  const [filter, setFilter] = useState("all");
  const navigate = useRouter();

  const filteredRooms =
    filter === "all"
      ? roomsData
      : roomsData.filter((room) => room.price <= parseInt(filter));

  return (
    <div className="p-6 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <h1 className="text-4xl font-bold text-center text-white mb-8">Our Rooms</h1>

      <div className="flex justify-center gap-4 mb-6">
        <button
          onClick={() => setFilter("all")}
          className={`px-4 py-2 rounded-lg text-white ${
            filter === "all" ? "bg-blue-500" : "bg-gray-700"
          }`}
        >
          All Rooms
        </button>
        <button
          onClick={() => setFilter("5000")}
          className={`px-4 py-2 rounded-lg text-white ${
            filter === "5000" ? "bg-blue-500" : "bg-gray-700"
          }`}
        >
          Up to &#8377;5000
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredRooms.map((room) => (
          <motion.div
            key={room.id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-white to-gray-100 rounded-lg shadow-lg"
          >
            <Slider
              dots={true}
              infinite={true}
              speed={500}
              slidesToShow={1}
              slidesToScroll={1}
              arrows={false}
              autoplay={true}
            >
              {room.images.map((image, index) => (
                <div key={index} className="w-full h-60">
                  <img
                    src={image}
                    alt={room.name}
                    className="w-full h-full object-cover rounded-t-lg"
                  />
                </div>
              ))}
            </Slider>
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">{room.name}</h2>
              <p className="text-gray-500 mb-2">{room.description}</p>
              <p className="text-lg font-semibold text-indigo-600">
                &#8377;{room.price} / night
              </p>

            
           <motion.div>
              <motion.button
              onClick={() => navigate.push(`/rooms/${room.id}`)}
              whileHover={{ scale: 1.02 }}
              className="w-full mt-4 border border-red-500  bg-gradient-to-r from-purple-500 to-pink-500 text-white py-2 rounded-lg text-center font-semibold"
            >
              VIEW DETAILS
            </motion.button>
          </motion.div>

              
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Rooms;
