import React from 'react';

const PartnerCard = ({ logo, name, type = 'partner' }) => {
  return (
    <div 
      className={`
        ${type === 'partner' 
          ? 'bg-gray-700 text-gray-400' 
          : 'bg-white text-gray-600'
        } 
        rounded flex items-center justify-center flex-shrink-0 transition-transform hover:scale-105
      `}
      style={{ width: '6.25rem', height: '6.25rem' }}
    >
      {logo ? (
        <img 
          src={logo} 
          alt={name} 
          className="max-h-full max-w-full object-contain p-2"
        />
      ) : (
        <span className={`text-sm ${type === 'partner' ? 'text-gray-400' : 'text-gray-600'}`}>
          {name || 'Logo'}
        </span>
      )}
    </div>
  );
};

export default PartnerCard;