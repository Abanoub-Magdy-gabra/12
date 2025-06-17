import React from 'react';

const GradientSection = () => {
  return (
    <section className="py-16 px-4 bg-gradient-to-br from-purple-600 via-blue-600 to-green-600">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Ready to Partner With Us?
        </h2>
        <p className="text-lg text-white opacity-90 mb-8 max-w-2xl mx-auto">
          Join thousands of satisfied customers worldwide who trust us for their 
          agricultural and food processing needs.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Get Started
          </button>
          <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
            Contact Us
          </button>
        </div>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-6">
            <h3 className="text-xl font-semibold text-white mb-3">
              Premium Quality
            </h3>
            <p className="text-white opacity-80 text-sm">
              Every product meets international quality standards
            </p>
          </div>
          
          <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-6">
            <h3 className="text-xl font-semibold text-white mb-3">
              Global Delivery
            </h3>
            <p className="text-white opacity-80 text-sm">
              Reliable shipping to destinations worldwide
            </p>
          </div>
          
          <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-6">
            <h3 className="text-xl font-semibold text-white mb-3">
              24/7 Support
            </h3>
            <p className="text-white opacity-80 text-sm">
              Dedicated customer service team always available
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GradientSection;