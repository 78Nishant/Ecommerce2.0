"use client";
import React, { useEffect, useState } from "react";

const HeroSection = () => {
  const [bgStyle, setBgStyle] = useState({});

  useEffect(() => {
    setBgStyle({
      backgroundImage: "url('/image7.jpg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    });
  }, []);
  return (
    <section style={bgStyle} className=" relative h-[75%] flex items-center justify-center text-center px-6 md:px-12">
      <div className="max-w-2xl text-white">
        <h1 className="text-5xl md:text-6xl font-bold">Online Shopping. Redefined.</h1>
        <p className="mt-4 text-lg md:text-xl">Latest stuff at the cheapest price available</p>
        <div className="mt-6">
          <div className="relative w-full max-w-md mx-auto">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full px-6 py-3 rounded-full border-none focus:outline-none focus:ring-2 focus:ring-white text-black placeholder-gray-500 shadow-md transition-all duration-200"
            />
            <button
              type="submit"
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black text-white px-4 py-2 rounded-full hover:bg-blue-700 transition-colors duration-200"
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
