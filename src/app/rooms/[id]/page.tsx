'use client';

import { useParams } from "next/navigation";
import roomsData from "../roomsData";

const RoomDetails = () => {
  const { id } = useParams(); // Fetch the dynamic route parameter

  // Find the room data based on the `id` parameter
  const room = roomsData.find((room) => room.id === parseInt(id as string));

  if (!room) {
    return <div>Room not found</div>;
  }

  return (
    <div>
      <h1>{room.name}</h1>
      <p>{room.description}</p>
      <p>Price: &#8377;{room.price}</p>
      <div>
        {room.images.map((image, index) => (
          <img key={index} src={image} alt={room.name} style={{ width: "200px" }} />
        ))}
      </div>
      <h3>Amenities:</h3>
      <ul>
        {room.amenities.map((amenity, index) => (
          <li key={index}>{amenity}</li>
        ))}
      </ul>
    </div>
  );
};

export default RoomDetails;
