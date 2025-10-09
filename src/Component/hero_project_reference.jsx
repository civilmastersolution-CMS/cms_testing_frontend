import React, { useState } from 'react';

const HeroProjectReference = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Sample project data - you can replace with real data
  const projects = [
    {
      id: 1,
      title: "Industrial Warehouse Floor Solution",
      image: "/images/project-references/project1.jpg",
      description: "Large-scale industrial flooring project for logistics center"
    },
    {
      id: 2,
      title: "Manufacturing Plant Flooring",
      image: "/images/project-references/project2.jpg",
      description: "High-performance flooring for automotive manufacturing"
    },
    {
      id: 3,
      title: "Commercial Facility Floor",
      image: "/images/project-references/project3.jpg",
      description: "Durable flooring solution for retail and commercial spaces"
    },
    {
      id: 4,
      title: "Food Processing Plant",
      image: "/images/project-references/project4.jpg",
      description: "Hygienic and safe flooring for food industry"
    },
    {
      id: 5,
      title: "Pharmaceutical Facility",
      image: "/images/project-references/project5.jpg",
      description: "Clean room compatible flooring solution"
    },
    {
      id: 6,
      title: "Data Center Flooring",
      image: "/images/project-references/project6.jpg",
      description: "Anti-static flooring for sensitive equipment"
    },
    {
      id: 7,
      title: "Airport Terminal Floor",
      image: "/images/project-references/project7.jpg",
      description: "Heavy-duty flooring for high-traffic areas"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const currentProject = projects[currentSlide];

  return (
    <section className="bg-white py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="mb-6">
          <h2 className="text-3xl font-bold text-gray-900 text-left">PROJECT REFERENCES</h2>
        </div>

        {/* Main Card Container */}
        <div className="relative h-[600px] rounded-lg overflow-hidden shadow-lg">
          <div 
            className="w-full h-full bg-cover bg-center relative transition-all duration-500"
            style={{ backgroundImage: `url('${currentProject.image}')` }}
          >
            {/* Navigation Arrows */}
            <button 
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-75 transition-all duration-300 z-20 p-2 rounded-lg"
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button 
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-75 transition-all duration-300 z-20 p-2 rounded-lg"
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Content Overlay */}
            <div className="absolute bottom-6 left-6 right-6 z-10">
              <div className="max-w-4xl">
                <h3 className="text-2xl font-bold text-white bg-gray-900 inline-block px-6 py-3 mb-3 transition-all duration-500 rounded">
                  {currentProject.title}
                </h3>
                <div className="flex justify-between items-end">
                  <button className="bg-cyan-400 text-gray-900 px-6 py-2 font-semibold hover:bg-cyan-300 transition-colors rounded">
                    REFERENCE DETAIL
                  </button>
                </div>
              </div>
            </div>

            {/* Dark overlay for better text contrast */}
            <div className="absolute inset-0 bg-black bg-opacity-30"></div>
          </div>
        </div>
        
        {/* Centered Dots Navigation */}
        <div className="flex justify-center mt-4">
          <div className="flex space-x-3">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-gray-900' : 'bg-gray-400 hover:bg-gray-600'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroProjectReference;