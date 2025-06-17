import React from 'react';

const GradientStats = () => {
  const stats = [
    {
      number: "50+",
      label: "Countries Served",
      description: "Global reach across continents"
    },
    {
      number: "1000+",
      label: "Products",
      description: "Diverse agricultural portfolio"
    },
    {
      number: "25+",
      label: "Years Experience",
      description: "Decades of industry expertise"
    },
    {
      number: "100%",
      label: "Quality Assured",
      description: "Certified quality standards"
    }
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-r from-green-600 to-blue-600">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Our Global Impact
          </h2>
          <p className="text-lg text-white opacity-90 max-w-3xl mx-auto">
            Connecting farms to tables worldwide with sustainable agricultural solutions
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-6 mb-4">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-white font-semibold mb-1">
                  {stat.label}
                </div>
                <div className="text-white opacity-80 text-sm">
                  {stat.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GradientStats;