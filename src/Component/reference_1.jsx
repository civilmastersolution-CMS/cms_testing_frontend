import React from 'react';

const Reference1 = ({ 
  title = "Industrial Floor Reinforcement – Warehouse A",
  images = ['/images/project-references/151F29.jpg'], // Default single image
  location = "Chiang Mai, Thailand",
  monthYear = "July 2024",
  siteArea = "15000 msquare",
  contractMember = "ABC Engineering Co., Ltd."
}) => {
  
  // Function to get grid layout based on number of images
  const getGridLayout = (count) => {
    switch(count) {
      case 1:
        return "grid-cols-1";
      case 2:
        return "grid-cols-2";
      case 3:
        return "grid-cols-2 grid-rows-2";
      case 4:
        return "grid-cols-2 grid-rows-2";
      case 5:
        return "grid-cols-3 grid-rows-2";
      default:
        return "grid-cols-1";
    }
  };

  // Function to get specific positioning for 5 images
  const getImageClasses = (index, total) => {
    if (total === 3) {
      if (index === 0) return "col-start-1 row-start-1 row-span-2"; // Left side, spans 2 rows (biggest)
      if (index === 1) return "col-start-2 row-start-1"; // Top right
      if (index === 2) return "col-start-2 row-start-2"; // Bottom right
      return "";
    }
    if (total === 5) {
      if (index === 0) return "col-start-1 row-start-2 col-span-2 row-span-1"; // Biggest image at left bottom
      if (index === 1) return "col-start-3 row-start-1"; // Top right
      if (index === 2) return "col-start-3 row-start-2"; // Middle right
      if (index === 3) return "col-start-1 row-start-1"; // Top left
      if (index === 4) return "col-start-2 row-start-1"; // Top middle
      return "";
    }
    return "";
  };

  const imageCount = Math.min(images.length, 5); // Max 5 images
  const displayImages = images.slice(0, 5);

  return (
    <div className="w-full h-full relative" style={{ backgroundColor: "#FFFFFF" }}>
      
      {/* Title at top center */}
      <div className="absolute top-8 left-1/2 transform -translate-x-1/2 z-10">
        <h1 className="text-black text-3xl font-bold text-center">
          {title}
        </h1>
      </div>
      
      {/* Images Grid - Full Screen */}
      <div className={`absolute inset-0 top-20 bottom-0 grid gap-4 p-4 ${getGridLayout(imageCount)}`}>
        {displayImages.map((image, index) => (
          <div 
            key={index}
            className={`bg-cover bg-center rounded-lg ${getImageClasses(index, imageCount)}`}
            style={{ backgroundImage: `url(${image})` }}
          >
            <div className="w-full h-full bg-black bg-opacity-20 rounded-lg"></div>
          </div>
        ))}
      </div>
      
      {/* Project details overlay - bottom left */}
      <div className="absolute bottom-8 left-8 z-10 p-6 rounded-lg max-w-md border border-gray-300" style={{ backgroundColor: "#151F29" }}>
        <div className="text-white space-y-2">
          <div>
            <span className="text-gray-300">Location : </span>
            <span>{location}</span>
          </div>
          <div>
            <span className="text-gray-300">Month/Year : </span>
            <span>{monthYear}</span>
          </div>
          <div>
            <span className="text-gray-300">Site Area : </span>
            <span>{siteArea}</span>
          </div>
          <div>
            <span className="text-gray-300">Contract Member : </span>
            <span>{contractMember}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reference1;