import React from 'react';

const Reference3 = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen relative">
      {/* Header */}
      <div className="absolute top-4 left-4 z-10">
        <div className="text-cyan-400 font-bold text-lg">CMS</div>
      </div>
      
      <div className="absolute top-4 right-4 z-10">
        <div className="text-white text-sm">
          <span>TH | EN</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col h-screen">
        {/* Top - Three Images */}
        <div className="flex-1 p-8">
          <div className="grid grid-cols-3 h-full gap-4">
            <div className="bg-gray-700 rounded-lg flex items-center justify-center">
              <span className="text-gray-400 text-lg">Logistics Center</span>
            </div>
            <div className="bg-gray-700 rounded-lg flex items-center justify-center">
              <span className="text-gray-400 text-lg">Storage Area</span>
            </div>
            <div className="bg-gray-700 rounded-lg flex items-center justify-center">
              <span className="text-gray-400 text-lg">Operations Floor</span>
            </div>
          </div>
        </div>

        {/* Bottom - Content */}
        <div className="bg-gray-800 p-8">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-3xl font-bold mb-6 text-cyan-400 text-center">
              Industrial Floor Reinforcement - Logistics Hub
            </h1>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
              <div>
                <h3 className="font-semibold mb-3 text-cyan-400">Project Overview:</h3>
                <p className="text-gray-300">
                  Comprehensive flooring solution for a modern logistics and distribution center. 
                  Featured micro steel fiber reinforcement for enhanced durability and performance.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold mb-3 text-cyan-400">Key Features:</h3>
                <ul className="text-gray-300 space-y-1">
                  <li>• Micro steel fiber technology</li>
                  <li>• Seamless surface finish</li>
                  <li>• Enhanced load distribution</li>
                  <li>• Chemical resistance coating</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-3 text-cyan-400">Technical Specifications:</h3>
                <ul className="text-gray-300 space-y-1">
                  <li>• Floor area: 18,500 sq.m</li>
                  <li>• Micro fiber dosage: 120 kg/m³</li>
                  <li>• Concrete grade: C40</li>
                  <li>• Surface tolerance: SR1</li>
                </ul>
              </div>
            </div>

            {/* Bottom Navigation Dots */}
            <div className="flex justify-center space-x-2 mt-8">
              <div className="w-3 h-3 bg-gray-600 rounded-full"></div>
              <div className="w-3 h-3 bg-gray-600 rounded-full"></div>
              <div className="w-3 h-3 bg-cyan-400 rounded-full"></div>
              <div className="w-3 h-3 bg-gray-600 rounded-full"></div>
              <div className="w-3 h-3 bg-gray-600 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-cyan-400">
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <button className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-cyan-400">
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
};

export default Reference3;