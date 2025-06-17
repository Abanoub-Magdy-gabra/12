import React from 'react';

const BannerText = () => {
  return (
    <div className="text-white max-w-2xl">
      <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
        Leading the Future of Agriculture
      </h2>
      <p className="text-lg md:text-xl mb-8 opacity-90 leading-relaxed">
        Committed to delivering premium quality agricultural products and innovative solutions 
        that meet global standards and exceed customer expectations.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
          Learn More
        </button>
        <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
          Our Products
        </button>
      </div>
    </div>
  );
};

export default BannerText;