'use client';

import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Circle, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Custom marker icon
const icon = L.icon({
  iconUrl: 'https://cdn-icons-png.flaticon.com/512/684/684908.png',
  iconSize: [25, 25],
});

// Component to fit map to markers
const FitBounds = ({ locations }) => {
  const map = useMap();

  useEffect(() => {
    if (locations.length > 0) {
      const bounds = L.latLngBounds(locations);
      map.fitBounds(bounds, { padding: [50, 50] });
    }
  }, [map, locations]);

  return null;
};

export default function NearbyPlacesMap() {
  const apartmentLocation = [12.968492, 77.7375859];
  const [currentLocation, setCurrentLocation] = useState(apartmentLocation);
  const [places, setPlaces] = useState([]); // Nearby places

  useEffect(() => {
    // Fetch nearby places when the component loads
    fetchNearbyPlaces(apartmentLocation[0], apartmentLocation[1]);
  }, []);

  const fetchNearbyPlaces = async (latitude, longitude) => {
    const dummyPlaces = [
      { name: 'Metro Station', coords: [latitude + 0.015, longitude + 0.015] },
      { name: 'Hospital', coords: [latitude + 0.02, longitude + 0.02] },
      { name: 'Shopping Mall', coords: [latitude - 0.01, longitude - 0.02] },
      { name: 'School', coords: [latitude - 0.005, longitude + 0.01] },
    ];
    setPlaces(dummyPlaces);
  };

  return (
    <div className="h-screen flex flex-col">
      {/* Heading */}
      <h1 className="text-3xl font-bold text-center bg-gradient-to-r from-green-400 to-green-600 text-white py-4">
        Nearby Places
      </h1>

      <div className="flex-grow grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Left Panel: List of Places */}
        <div className="col-span-1 p-4 bg-gradient-to-b from-green-100 to-green-200 overflow-y-auto">
          <h2 className="text-xl font-bold text-green-800 mb-4">List of Places</h2>
          {places.length === 0 ? (
            <p className="text-gray-700">Loading nearby places...</p>
          ) : (
            <ul className="space-y-4">
              {places.map((place, index) => (
                <li
                  key={index}
                  className="p-4 bg-white shadow-md rounded-md hover:bg-green-50 transition"
                >
                  <h3 className="font-semibold text-green-900">{place.name}</h3>
                  <p className="text-gray-700">Latitude: {place.coords[0].toFixed(6)}</p>
                  <p className="text-gray-700">Longitude: {place.coords[1].toFixed(6)}</p>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Right Panel: Map */}
        <div className="col-span-1 md:col-span-2">
          <MapContainer
            center={currentLocation}
            zoom={13}
            className="h-full w-full"
            zoomControl={false}
            scrollWheelZoom={false}
            doubleClickZoom={false}
            dragging={true}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />

            {/* Markers */}
            <Marker position={currentLocation} icon={icon}>
              <Popup>Your Apartment</Popup>
            </Marker>
            {places.map((place, index) => (
              <Marker position={place.coords} key={index} icon={icon}>
                <Popup>{place.name}</Popup>
              </Marker>
            ))}

            {/* Circle: 20 km radius */}
            <Circle
              center={currentLocation}
              radius={20000} // 20 km
              pathOptions={{ color: 'blue', fillColor: 'blue', fillOpacity: 0.1 }}
            />

            {/* Fit Bounds to Markers */}
            <FitBounds
              locations={[currentLocation, ...places.map((place) => place.coords)]}
            />
          </MapContainer>
        </div>
      </div>
    </div>
  );
}
