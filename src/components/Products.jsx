import React from 'react';

const ProductsSection = () => {
  const products = [
    {
      name: "Fresh Vegetables",
      description: "Premium quality fresh vegetables grown with sustainable practices",
      image: "/images/broccoli.svg",
      category: "Fresh Produce"
    },
    {
      name: "Frozen Foods",
      description: "Flash-frozen vegetables and fruits maintaining nutritional value",
      image: "/images/Component1.png",
      category: "Frozen"
    },
    {
      name: "Organic Fruits",
      description: "Certified organic fruits grown without synthetic pesticides",
      image: "/images/Strawberry.png",
      category: "Organic"
    },
    {
      name: "Processed Foods",
      description: "Value-added processed agricultural products",
      image: "/images/Component2.png",
      category: "Processed"
    }
  ];

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Our Products
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover our wide range of premium agricultural products, from fresh produce 
            to processed foods, all meeting international quality standards.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden group hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gray-100 flex items-center justify-center">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-32 h-32 object-contain group-hover:scale-105 transition-transform"
                />
              </div>
              <div className="p-6">
                <span className="text-xs font-semibold text-green-600 bg-green-100 px-2 py-1 rounded">
                  {product.category}
                </span>
                <h3 className="text-xl font-semibold text-gray-800 mt-3 mb-2">
                  {product.name}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {product.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;