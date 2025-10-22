import React from 'react';

const Reference1 = ({ 
  title = "Industrial Floor Reinforcement – Warehouse A",
  images = ['/images/project-references/151F29.jpg'], // Default single image
  location = "Chiang Mai, Thailand",
  monthYear = "July 2024",
  siteArea = "15000 msquare",
  contractMember = "ABC Engineering Co., Ltd.",
  layoutType = 5, // Add support for layout type
  onPrev,
  onNext,
  length = 1
}) => {
  
  // Function to get flex layout based on layout type
  const getFlexLayout = (layoutType) => {
    return "justify-center items-center";
  };

  const imageCount = Math.min(images.length, 5); // Max 5 images
  const displayImages = images.slice(0, 5);

  return (
    <div className="relative flex items-center justify-center" style={{ width: '2000px', height: '800px' }}>
      
      {/* Previous Button - Much further outside left */}
      {length > 1 && (
        <button
          onClick={onPrev}
          className="absolute left-32 top-2/5 transform -translate-y-1/2 z-20 bg-white bg-opacity-60 text-black p-3 rounded-lg hover:bg-opacity-100 transition-all shadow-lg"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      )}

      {/* Main Content Container */}
      <div className="relative" style={{ width: '1200px', height: '750px', backgroundColor: "#000A14" }}>
        
        {/* Title at top center - outside image area */}
        <div className="absolute left-1/2 transform -translate-x-1/2 z-10" style={{ width: '1000px' }}>
          <h1 className="text-white text-5xl font-bold text-center m-0" style={{ fontFamily: 'Oswald, sans-serif' }}>
            {title}
          </h1>
        </div>
        
        {/* Images Grid - Adjusted to start below title */}
        <div className={`absolute flex gap-3 ${getFlexLayout(layoutType)} inset-x-8 top-20`}>
          {displayImages.map((image, index) => (
            <div 
              key={index}
              className={`bg-cover bg-center ${layoutType === 1 ? '' : 'border-5 border-white'} ${layoutType === 1 ? '' : layoutType === 4 ? 'w-1/3' : layoutType === 5 ? 'w-1/5' : 'flex-1'} ${layoutType === 1 ? '' : 'aspect-square'}`}
              style={{ backgroundImage: `url(${image})`, height: '500px', ...(layoutType === 1 ? { width: '100%' } : {}) }}
              onError={(e) => {
                console.log(`Failed to load image: ${image}`);
                e.target.style.backgroundImage = 'none';
                e.target.style.backgroundColor = '#f3f4f6';
                e.target.innerHTML = '<div class="flex items-center justify-center h-full text-gray-500">Image not found</div>';
              }}
            >
              {layoutType !== 1 && <div className="w-full h-full bg-black bg-opacity-20"></div>}
            </div>
          ))}
        </div>

        {/* Project details overlay */}
        <div className="absolute z-10 p-4 bg-gray-800 bg-opacity-80 mx-auto" style={{ bottom: '12px', left: '50%', transform: 'translateX(-50%)', maxWidth: '600px' }}>
          <div className="text-white flex justify-center items-center">
            {/* Combined centered information */}
            <div className="text-left">
              <div className="grid grid-cols-[120px_1fr] text-lg">
                <span className="text-gray-300">Location </span>
                <span>: {location}</span>
                
                <span className="text-gray-300">Site Area </span>
                <span>: {siteArea}</span>
                
                <span className="text-gray-300">Month/Year </span>
                <span>: {monthYear}</span>
                
                {contractMember && (
                  <>
                    <span className="text-gray-300">Contractor </span>
                    <span>: {contractMember}</span>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Next Button - Much further outside right */}
      {length > 1 && (
        <button
          onClick={onNext}
          className="absolute right-32 top-2/5 transform -translate-y-1/2 z-20 bg-white bg-opacity-60 text-black p-3 rounded-lg hover:bg-opacity-100 transition-all shadow-lg"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      )}
    </div>
  );
};

export default Reference1;