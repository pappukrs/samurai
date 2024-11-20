
'use client'
import { useState } from "react";
import { motion } from "framer-motion";

const roomsData = [
  {
    id: 1,
    name: "Deluxe Room",
    image: "https://tse4.mm.bing.net/th?id=OIP.PW9Pt3LIIK_VarDN6M1NLQHaFS&pid=Api&P=0&h=180",
    price: 4000,
    description: "Spacious room with a king-sized bed and city view.",
    amenities: ["Free WiFi", "Breakfast Included", "Air Conditioning"],
  },
  {
    id: 2,
    name: "Standard Room",
    image: "https://tse4.mm.bing.net/th?id=OIP.7Qw5TODF9dBm9a9SR18hfQHaE8&pid=Api&P=0&h=180",
    price: 5000,
    description: "Comfortable room with essential amenities.",
    amenities: ["Free WiFi", "Air Conditioning"],
  },
  {
    id: 3,
    name: "Suite",
    image: "https://www.italianbark.com/wp-content/uploads/2018/01/hotel-room-design-trends-italianbark-interior-design-blog.jpg",
    price: 9000,
    description: "Luxurious suite with premium facilities and sea view.",
    amenities: ["Free WiFi", "Breakfast Included", "Private Pool", "Mini Bar"],
  },
  {
    id: 4,
    name: "Deluxe Room_",
    image: "https://tse4.mm.bing.net/th?id=OIP.PW9Pt3LIIK_VarDN6M1NLQHaFS&pid=Api&P=0&h=180",
    price: 6000,
    description: "Spacious room with a king-sized bed and city view.",
    amenities: ["Free WiFi", "Breakfast Included", "Air Conditioning"],
  },
  {
    id: 5,
    name: "Standard Room_",
    image: "https://tse4.mm.bing.net/th?id=OIP.7Qw5TODF9dBm9a9SR18hfQHaE8&pid=Api&P=0&h=180",
    price: 11000,
    description: "Comfortable room with essential amenities.",
    amenities: ["Free WiFi", "Air Conditioning"],
  },
  {
    id: 6,
    name: "Suite_",
    image: "https://www.italianbark.com/wp-content/uploads/2018/01/hotel-room-design-trends-italianbark-interior-design-blog.jpg",
    price: 15000,
    description: "Luxurious suite with premium facilities and sea view.",
    amenities: ["Free WiFi", "Breakfast Included", "Private Pool", "Mini Bar"],
  },
];

const Rooms = () => {
  const [filter, setFilter] = useState("all");

  const filteredRooms =
    filter === "all"
      ? roomsData
      : roomsData.filter((room) => room.price <= parseInt(filter));

  return (
    <div className="p-6 bg-gray-100">
      <h1 className="text-4xl font-bold text-center mb-8">Our Rooms</h1>

      {/* Filters */}
      <div className="flex justify-center gap-4 mb-6">
        <button
          onClick={() => setFilter("all")}
          className={`px-4 py-2 rounded ${
            filter === "all" ? "bg-blue-500 text-white" : "bg-gray-300"
          }`}
        >
          All
        </button>
        <button
          onClick={() => setFilter("5000")}
          className={`px-4 py-2 rounded ${
            filter === "5000" ? "bg-blue-500 text-white" : "bg-gray-300"
          }`}
        >
          Up to &#8377;5000
        </button>
        <button
          onClick={() => setFilter("10000")}
          className={`px-4 py-2 rounded ${
            filter === "10000" ? "bg-blue-500 text-white" : "bg-gray-300"
          }`}
        >
          Up to &#8377;10000
        </button>
      </div>

      {/* Room List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredRooms.map((room) => (
          <motion.div
            key={room.id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <img
              src={room.image}
              alt={room.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold">{room.name}</h2>
              <p className="text-gray-500 mb-2">{room.description}</p>
              <p className="text-lg font-semibold mb-2">&#8377;{room.price} / night</p>
              <ul className="text-sm text-gray-700 mb-4">
                {room.amenities.map((amenity, index) => (
                  <li key={index}>- {amenity}</li>
                ))}
              </ul>
              <button className="w-full bg-blue-500 text-white py-2 rounded">
                Book Now
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Rooms;
