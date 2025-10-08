import React, { useState } from 'react';
import Nav from '../Component/nav';
import Reference1 from '../Component/reference_1';
import Reference2 from '../Component/reference_2';
import Reference3 from '../Component/reference_3';
import Reference4 from '../Component/reference_4';
import Reference5 from '../Component/reference_5';

const ProjectReference = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const references = [
    { component: Reference1, title: "Warehouse A" },
    { component: Reference2, title: "Manufacturing Plant" },
    { component: Reference3, title: "Logistics Hub" },
    { component: Reference4, title: "Heavy Industry" },
    { component: Reference5, title: "Multi-Purpose Facility" }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % references.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + references.length) % references.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const CurrentComponent = references[currentSlide].component;

  return (
    <div className="min-h-screen bg-gray-900">
      <Nav />
      
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-8 text-center">
          <h1 className="text-4xl font-bold mb-8">
            <span className="text-cyan-400">Project References</span>
          </h1>
          <p className="text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Explore our portfolio of successful industrial flooring projects across Thailand and beyond.
          </p>
        </div>
      </section>

      {/* Reference Slideshow */}
      <section className="relative">
        <div className="relative w-full h-screen overflow-hidden">
          <CurrentComponent />
          
          {/* Custom Navigation Arrows */}
          <button 
            onClick={prevSlide}
            className="absolute left-8 top-1/2 transform -translate-y-1/2 z-20 text-white hover:text-cyan-400 transition-colors"
          >
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-8 top-1/2 transform -translate-y-1/2 z-20 text-white hover:text-cyan-400 transition-colors"
          >
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

      

          {/* Slide Counter */}
          <div className="absolute top-8 left-1/2 transform -translate-x-1/2 z-20 text-white text-sm">
            <span className="bg-black/50 px-3 py-1 rounded-full">
              {currentSlide + 1} / {references.length}
            </span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-12">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="text-white font-bold text-xl mb-4">
              <span className="text-cyan-400">CMS</span>
              <span className="text-xs ml-1">◆</span>
            </div>
            <p className="text-gray-400 text-sm">
              Your trusted Partner in Industrial Floor Solutions
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Menu</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>Home</li>
              <li>Product</li>
              <li>Project Reference</li>
              <li>News & Articles</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <div className="text-gray-400 text-sm space-y-2">
              <p>19 Soi Ramintra 109 Intersection 8, Khan Udom, Bueng Kum, Bangkok 10230</p>
              <p>081 712 3544 / 062 479 4215</p>
              <p>siamgrout@civilmastersolution.com</p>
              <p>export@civilmastersolution.com</p>
            </div>
          </div>
          
          <div className="bg-blue-900 p-6 rounded">
            <p className="text-white text-sm">
              Civil Master Solution © 2024
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ProjectReference;