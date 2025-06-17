import React from 'react';

export default function Agronomy() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">Agronomy</h1>
        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-gray-700 mb-6">
            Our agronomy services focus on sustainable farming practices and crop optimization.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-4">Crop Management</h2>
              <p className="text-gray-600">
                Expert guidance on crop selection, planting schedules, and harvest optimization.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-4">Soil Analysis</h2>
              <p className="text-gray-600">
                Comprehensive soil testing and recommendations for optimal plant nutrition.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}