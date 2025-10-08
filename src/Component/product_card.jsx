import React from 'react';

const ProductCard = ({ 
  title, 
  description, 
  successPoints, 
  benefits, 
  performance, 
  imagePosition = 'left',
  theme = 'dark' 
}) => {
  const isDark = theme === 'dark';
  
  const ImagePlaceholder = () => (
    <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center">
      <span className="text-gray-500 text-lg">Product Image</span>
    </div>
  );

  const ContentSection = () => (
    <div className={`p-8 rounded-lg ${isDark ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}>
      <h2 className={`text-2xl font-bold mb-4 ${isDark ? 'text-cyan-400' : 'text-gray-900'}`}>
        {title}
      </h2>
      <p className="mb-4">{description}</p>
      
      {successPoints && (
        <div className="mb-4">
          <h3 className="font-semibold mb-2">Success</h3>
          <ul className="text-sm space-y-1">
            {successPoints.map((point, index) => (
              <li key={index}>• {point}</li>
            ))}
          </ul>
        </div>
      )}
      
      {benefits && (
        <div className="mb-4">
          <h3 className="font-semibold mb-2">Benefits</h3>
          <ul className="text-sm space-y-1">
            {benefits.map((benefit, index) => (
              <li key={index}>• {benefit}</li>
            ))}
          </ul>
        </div>
      )}
      
      {performance && (
        <div className="mb-6">
          <h3 className="font-semibold mb-2">Performance</h3>
          <ul className="text-sm space-y-1">
            {performance.map((perf, index) => (
              <li key={index}>• {perf}</li>
            ))}
          </ul>
        </div>
      )}
      
      <button className={`px-6 py-2 rounded font-semibold transition-colors ${
        isDark 
          ? 'bg-cyan-400 text-gray-900 hover:bg-cyan-300' 
          : 'bg-gray-900 text-white hover:bg-gray-800'
      }`}>
        REQUEST MORE INFORMATION
      </button>
    </div>
  );

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      {imagePosition === 'left' ? (
        <>
          <ImagePlaceholder />
          <ContentSection />
        </>
      ) : (
        <>
          <ContentSection />
          <ImagePlaceholder />
        </>
      )}
    </div>
  );
};

export default ProductCard;