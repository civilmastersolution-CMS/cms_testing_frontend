import React from 'react';
import Nav from '../Component/nav';
import ProductCard from '../Component/product_card';
import Footer from '../Component/footer';

const Product = () => {
  const productData = [
    {
      title: "Steel Fiber",
      description: "Steel fiber, made from high-strength steel (100-2000 MPa), is designed with hooked ends and optimized geometry for effective use in concrete.",
      successPoints: [
        "Proven worldwide use.",
        "Trusted in major construction projects."
      ],
      benefits: [
        "Extends concrete lifespan.",
        "Reduces reinforcement costs."
      ],
      performance: [
        "High tensile strength.",
        "Strong load and impact resistance."
      ],
      imagePosition: "left",
      theme: "dark"
    },
    {
      title: "Synthetic Fiber",
      description: "Synthetic fiber reinforcement uses high-performance polypropylene fibers to strengthen concrete and shotcrete, reinforcing the entire structure.",
      successPoints: [
        "Proven in modern construction.",
        "Enhances structural integrity."
      ],
      benefits: [
        "Reinforces all areas of concrete.",
        "Increases durability and longevity."
      ],
      performance: [
        "High tensile strength.",
        "Uniform distribution in mix.",
        "Suitable for concrete and shotcrete."
      ],
      imagePosition: "right",
      theme: "light"
    },
    {
      title: "Micro Steel Fiber",
      description: "Micro steel fiber, produced from extra-high strength steel (2800-2800 MPa), has a smaller size and is ideal for Ultra-High Performance Fiber Reinforced Concrete (UHPFRC).",
      successPoints: [
        "Widely applied in UHPFRC projects.",
        "Recognized for advanced construction solutions."
      ],
      benefits: [
        "Enables higher fiber dosage (up to 150 kg/m³).",
        "Increases toughness and durability of concrete."
      ],
      performance: [
        "Provides extra-high tensile strength.",
        "Optimized for superior structural performance."
      ],
      imagePosition: "left",
      theme: "dark"
    },
    {
      title: "Armor Joint",
      description: "Armor Joint is a heavy-duty prefabricated joint system for large concrete floors, with cold-drawn steel rails for strong edge protection.",
      successPoints: [
        "Standard in industrial flooring.",
        "Proven in large-scale projects."
      ],
      benefits: [
        "Protects slab edges.",
        "Extends floor durability."
      ],
      performance: [
        "High-strength steel rails.",
        "Reliable in heavy-traffic areas."
      ],
      imagePosition: "right",
      theme: "light"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      <Nav />
      
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-8 text-center">
          <h1 className="text-2xl mb-8">
            At <span className="text-cyan-400">Civil Master Solution</span>(CMS)
          </h1>
          <p className="text-gray-300 max-w-4xl mx-auto leading-relaxed">
            We go beyond simply selling flooring materials, we enhance complete solutions. As structural design engineers, our
            focus is to understand your projects requirements and select the right products for the right application, ensuring
            performance, safety, and long-term value. Our products meet international quality standards and have been
            carefully selected and tested to ensure it can be designed, applied, and perform effectively in real projects.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-8 space-y-16">
          {productData.map((product, index) => (
            <ProductCard
              key={index}
              title={product.title}
              description={product.description}
              successPoints={product.successPoints}
              benefits={product.benefits}
              performance={product.performance}
              imagePosition={product.imagePosition}
              theme={product.theme}
            />
          ))}
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Product;
