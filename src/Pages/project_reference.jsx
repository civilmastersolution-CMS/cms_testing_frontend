import React, { useState } from 'react';
import Nav from '../Component/nav';
import Reference1 from '../Component/reference_1';
import Footer from '../Component/footer';

const ProjectReference = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const references = [
    {
      title: "Industrial Floor Reinforcement – Warehouse A",
      images: ['/images/project-references/warehouse1.jpg'],
      location: "Bangkok, Thailand",
      monthYear: "January 2024",
      siteArea: "12000 m²",
      contractMember: "ABC Engineering Co., Ltd."
    },
    {
      title: "Manufacturing Plant Floor System",
      images: [
        '/images/project-references/manufacturing1.jpg',
        '/images/project-references/manufacturing2.jpg'
      ],
      location: "Chiang Mai, Thailand",
      monthYear: "March 2024",
      siteArea: "8500 m²",
      contractMember: "XYZ Construction Ltd."
    },
    {
      title: "Logistics Hub Distribution Center",
      images: [
        '/images/project-references/logistics1.jpg',
        '/images/project-references/logistics2.jpg',
        '/images/project-references/logistics3.jpg'
      ],
      location: "Phuket, Thailand",
      monthYear: "May 2024",
      siteArea: "20000 m²",
      contractMember: "DEF Industrial Co."
    },
    {
      title: "Heavy Industry Processing Facility",
      images: [
        '/images/project-references/heavy1.jpg',
        '/images/project-references/heavy2.jpg',
        '/images/project-references/heavy3.jpg',
        '/images/project-references/heavy4.jpg'
      ],
      location: "Rayong, Thailand",
      monthYear: "July 2024",
      siteArea: "15000 m²",
      contractMember: "GHI Heavy Industries"
    },
    {
      title: "Multi-Purpose Commercial Complex",
      images: [
        '/images/project-references/complex1.jpg',
        '/images/project-references/complex2.jpg',
        '/images/project-references/complex3.jpg',
        '/images/project-references/complex4.jpg',
        '/images/project-references/complex5.jpg'
      ],
      location: "Pattaya, Thailand",
      monthYear: "September 2024",
      siteArea: "25000 m²",
      contractMember: "JKL Development Group"
    }
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

  const currentReference = references[currentSlide];

  return (
    <div className="min-h-screen bg-gray-900">
      <Nav />

      {/* Reference Slideshow */}
      <section className="bg- py-8">
        <div className="max-w-7xl mx-auto px-4">
          {/* Main Card Container */}
          <div className="relative h-[600px] rounded-lg overflow-hidden shadow-lg">
            <div className="w-full h-full relative transition-all duration-500">
              <Reference1 
                title={currentReference.title}
                images={currentReference.images}
                location={currentReference.location}
                monthYear={currentReference.monthYear}
                siteArea={currentReference.siteArea}
                contractMember={currentReference.contractMember}
              />
              
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
            </div>
          </div>
          
          {/* Centered Dots Navigation */}
          <div className="flex justify-center mt-4">
            <div className="flex space-x-3">
              {references.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide ? 'bg-gray-900' : 'bg-gray-400 hover:bg-gray-600'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ProjectReference;