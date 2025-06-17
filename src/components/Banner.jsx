import React from 'react';

const Banner = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Hero banner content */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      </div>
      
      {/* Banner image or background */}
      <div className="relative w-full h-full flex items-center justify-center">
        <div className="text-center text-white z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Welcome to Our Company
          </h1>
          <p className="text-xl md:text-2xl opacity-90">
            Excellence in Agriculture & Food Processing
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;