'use client'
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Custom marker icon (optional customization)
const markerIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
  iconSize: [32, 32],
});

const LocationMap = () => {
  // Define position as LatLngTuple
  const position: L.LatLngTuple = [37.7749, -122.4194]; // Replace with your location coordinates (lat, lng).

  return (
    <section className="py-12 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">Our Location</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-8">
          Find us on the map and explore nearby attractions.
        </p>
        <div className="w-full h-96">
          <MapContainer center={position} zoom={13} className="h-full w-full rounded-lg">
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position} icon={markerIcon}>
              <Popup>
                Our Hotel/Coliving Space <br /> Visit us anytime!
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    </section>
  );
};

export default LocationMap;
