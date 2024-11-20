// src/app/page.tsx
"use client";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import RoomCard from "@/components/RoomCard";
import AmenitiesSection from "@/components/AmenitiesSection";
import CommunitySection from "@/components/CommunitySection";
import PricingSection from "@/components/PricingSection";
// import LocationMap from "@/components/LocationMap";
import AboutUs from "@/components/AboutUs";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";



import dynamic from "next/dynamic";

// Dynamically import the map component
// const Map = dynamic(() => import("@/components/Map"), {
//   loading: () => <p>loading...</p>,
//   ssr: false
// })

const HomePage = () => {
  return (
    <div>
      {/* Navigation Bar */}
      <Navbar />

      {/* Hero Section */}
      <HeroSection />

      {/* Room Listings */}
      {/* <RoomCard /> */}

      {/* Amenities Section */}
      <AmenitiesSection />

      {/* Community Section */}
      {/* <CommunitySection /> */}

      {/* Pricing Section */}
      <PricingSection />

      {/* Location Map */}
      {/* <LocationMap /> */}
{/* <Map/> */}
      {/* About Us Section */}
      <AboutUs />

      {/* Contact Section */}
      {/* <Contact /> */}

      
    </div>
  );
};

export default HomePage;
