import React from 'react';

export default function Process() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">Our Process</h1>
        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-gray-700 mb-8 text-center">
            We follow a systematic approach to ensure quality and efficiency in all our operations.
          </p>
          <div className="space-y-8">
            <div className="flex items-center space-x-6">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-xl">
                1
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Planning & Analysis</h3>
                <p className="text-gray-600">
                  Comprehensive planning and market analysis to determine optimal strategies.
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <div className="flex-shrink-0 w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center font-bold text-xl">
                2
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Implementation</h3>
                <p className="text-gray-600">
                  Careful execution of plans with continuous monitoring and quality control.
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <div className="flex-shrink-0 w-12 h-12 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold text-xl">
                3
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Quality Assurance</h3>
                <p className="text-gray-600">
                  Rigorous testing and validation to ensure all standards are met.
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <div className="flex-shrink-0 w-12 h-12 bg-red-500 text-white rounded-full flex items-center justify-center font-bold text-xl">
                4
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Delivery & Support</h3>
                <p className="text-gray-600">
                  Timely delivery with ongoing support and maintenance services.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}