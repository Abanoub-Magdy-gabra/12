import React from 'react';

const CertificationsSection = () => {
  const certifications = [
    {
      name: "ISO 22000",
      description: "Food Safety Management System",
      image: "/images/ISO-22000.png"
    },
    {
      name: "Global GAP",
      description: "Good Agricultural Practices",
      image: "/images/Global-Gap 1.png"
    },
    {
      name: "BRCGS",
      description: "Food Safety Certification",
      image: "/images/BRCGS_CERT_FOOD_LOGO 1.png"
    },
    {
      name: "FDA",
      description: "Food and Drug Administration",
      image: "/images/Food_and_Drug_Administration_logo 1.png"
    }
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Our Certifications
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We maintain the highest standards through internationally recognized certifications 
            and quality management systems.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {certifications.map((cert, index) => (
            <div key={index} className="text-center group">
              <div className="bg-gray-50 p-6 rounded-lg mb-4 group-hover:shadow-lg transition-shadow">
                <img 
                  src={cert.image} 
                  alt={cert.name}
                  className="w-full h-20 object-contain mx-auto"
                />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">{cert.name}</h3>
              <p className="text-sm text-gray-600">{cert.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;