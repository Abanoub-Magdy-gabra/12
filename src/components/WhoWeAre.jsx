import React from 'react';

const WhoWeAreSection = () => {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Who We Are
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We are a leading agricultural company dedicated to providing high-quality products 
            and sustainable farming solutions to customers worldwide.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">
              Our Mission
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              To revolutionize agriculture through innovative practices, sustainable methods, 
              and cutting-edge technology while maintaining the highest standards of quality 
              and environmental responsibility.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-700">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                Sustainable farming practices
              </li>
              <li className="flex items-center text-gray-700">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                Quality assurance and certification
              </li>
              <li className="flex items-center text-gray-700">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                Global distribution network
              </li>
            </ul>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">
              Our Values
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-700 mb-2">Quality</h4>
                <p className="text-gray-600 text-sm">
                  Uncompromising commitment to excellence in every product
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-700 mb-2">Sustainability</h4>
                <p className="text-gray-600 text-sm">
                  Environmental stewardship and responsible farming
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-700 mb-2">Innovation</h4>
                <p className="text-gray-600 text-sm">
                  Continuous improvement and technological advancement
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAreSection;