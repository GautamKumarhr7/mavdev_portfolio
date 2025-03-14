"use client";

import Navbar from "./components/Navbar";
import Hero from "./components/HeroSection";
// import EventSection from "./components/Events";

export default function Home() {
  return (
    <div className="relative w-full min-h-screen bg-black text-white flex flex-col items-center">
      {/* Left Sidebar - Visible on md+ screens */}
      <div className="hidden md:flex absolute left-6 top-24 flex-col items-center">
        <p className="text-2xl font-light">01</p>
        <div className="w-0.5 h-40 bg-gray-600 mt-4"></div>
        <p className="mt-6 rotate-90 text-sm text-purple-400 tracking-wide">
          HOME
        </p>
      </div>

      {/* Main Content (Centered) */}
      <div className="flex flex-col justify-center items-center w-full h-screen px-4 sm:px-8">
        {/* Navbar */}
        <Navbar />

        {/* Hero Section */}
        <Hero />
      </div>
    </div>
  );
}
