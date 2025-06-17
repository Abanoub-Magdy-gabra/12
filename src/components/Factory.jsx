import React from 'react';

const FactorySectionComponent = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              State-of-the-Art Facilities
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Our modern processing facilities are equipped with cutting-edge technology 
              to ensure the highest quality standards and food safety protocols.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-4 mt-1">
                  <span className="text-white text-xs">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">
                    Advanced Processing Technology
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Latest equipment for optimal product quality and efficiency
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-4 mt-1">
                  <span className="text-white text-xs">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">
                    Quality Control Labs
                  </h3>
                  <p className="text-gray-600 text-sm">
                    On-site testing facilities ensuring product safety
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-4 mt-1">
                  <span className="text-white text-xs">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">
                    Cold Chain Management
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Temperature-controlled storage and transportation
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-green-100 to-blue-100 rounded-lg p-8">
              <img 
                src="/images/Rectangle 7.jpg" 
                alt="Factory Facility"
                className="w-full h-64 object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-lg shadow-lg">
              <div className="text-2xl font-bold text-green-600">24/7</div>
              <div className="text-sm text-gray-600">Operations</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FactorySectionComponent;