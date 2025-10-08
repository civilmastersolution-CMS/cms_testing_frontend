import React from 'react';

const NewsCards = ({ image, title, description, date }) => {
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform duration-300">
      {/* Image */}
      <div className="h-24 bg-gray-700 relative">
        {image ? (
          <img src={image} alt={title} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span className="text-gray-400 text-xs">{title} Image</span>
          </div>
        )}
      </div>
      
      {/* Content */}
      <div className="p-3">
        <h3 className="text-white font-semibold text-sm mb-2 line-clamp-2">
          {title}
        </h3>
        <p className="text-gray-300 text-xs mb-3 line-clamp-2">
          {description}
        </p>
        <div className="flex justify-between items-center">
          <span className="text-cyan-400 text-xs">{date}</span>
          <button className="text-cyan-400 hover:text-cyan-300 text-xs font-medium">
            Read More →
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsCards;