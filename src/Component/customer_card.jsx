import React from 'react';

const CustomerCard = ({ name, image, type = "customer" }) => {
  return (
    <div className="flex-shrink-0 mx-4">
      <div className={`w-24 h-24 rounded-lg flex items-center justify-center shadow-md transition-all duration-300 hover:scale-105 ${
        type === 'customer' ? 'bg-blue-100 border-2 border-blue-200' : 'bg-gray-100 border-2 border-gray-200'
      }`}>
        {image ? (
          <img 
            src={image} 
            alt={name} 
            className="w-16 h-16 object-contain"
          />
        ) : (
          <span className={`text-sm font-semibold text-center px-2 ${
            type === 'customer' ? 'text-blue-700' : 'text-gray-700'
          }`}>
            {name}
          </span>
        )}
      </div>
    </div>
  );
};

export default CustomerCard;