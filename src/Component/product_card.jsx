import React, { useState } from 'react';
import RequestMoreInformation from './request_more_information';

const ProductCard = ({ 
  title, 
  description, 
  main_applicationPoints, 
  benefit, 
  performance, 
  images = [],
  imagePosition = 'left',
  theme = 'dark',
  layout = 1, // 1 or 2 for different layouts
  backgroundImage = null // Background image URL for the content section
}) => {
  const isDark = theme === 'dark';
  const [showRequestInfo, setShowRequestInfo] = useState(false);
  const [requestProductName, setRequestProductName] = useState('');

  // Get horizontal split background for main container
  const getMainBackgroundStyle = (layout) => {
    if (layout === 1) {
      // Layout 1: Top half #000A14, bottom half white
      return {
        background: 'linear-gradient(to bottom, #000A14 50%, white 50%)'
      };
    } else {
      // Layout 2: Top half white, bottom half #000A14
      return {
        background: 'linear-gradient(to bottom, white 50%, #000A14 50%)'
      };
    }
  };

  // Default background images for each layout if none provided
  const defaultBackgroundImages = {
    1: '/images/backgrounds/background1.JPG', // Industrial/construction background
    2: '/images/backgrounds/background2.jpg', // Modern concrete/industrial background
  };

  const finalBackgroundImage = backgroundImage || defaultBackgroundImages[layout];

  const handleOpenRequestInfo = () => {
    setRequestProductName(title);
    setShowRequestInfo(true);
  };
  const handleCloseRequestInfo = () => setShowRequestInfo(false);
  const handleSubmitRequestInfo = (formData) => {
    // You can handle the form submission here (e.g., send to API)
    setShowRequestInfo(false);
    // Optionally show a main_application message or do something with formData
  };

  const ImageSection = () => (
    <div className="flex justify-center items-center h-full">
      <div 
        className="overflow-hidden"
        style={{
          minWidth: '320px',
          minHeight: '320px',
          width: '100%',
          maxWidth: '700px',
          margin: 'auto',
        }}
      >
        {images && images.length > 0 ? (
          <img 
            src={images[0]} 
            alt={title}
            className="w-full h-full object-contain"
            onError={(e) => {
              // Default example product images
              const defaultImages = [
                'https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', // Construction materials
                'https://images.unsplash.com/photo-1590736969955-71cc94901144?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'  // Industrial equipment
              ];
              e.target.src = defaultImages[layout - 1] || defaultImages[0];
            }}
          />
        ) : (
          <div 
            className="h-full flex items-center justify-center bg-cover bg-center"
            style={{
              backgroundImage: `url(${layout === 1 
                ? 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
                : 'https://images.unsplash.com/photo-1590736969955-71cc94901144?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
              })`
            }}
          >
            <div className="bg-black bg-opacity-50 px-4 py-2">
              <span className="text-white text-xl font-semibold">Product Image</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );

  const ContentSection = () => (
    <div className="flex justify-center items-center h-full min-h-full" style={{height: '100%'}}>
      <div
        className={`p-8 relative overflow-hidden flex flex-col justify-center ${isDark ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'} mr-10`}
        style={{
          boxShadow: '0 8px 32px 0 rgba(0,0,0,0.55), 0 1.5px 6px 0 rgba(0,0,0,0.65)',
          minWidth: '320px',
          minHeight: '320px',
          width: '100%',
          maxWidth: '700px',
          margin: 'auto',
        }}
      >
        {/* Background image with 20% opacity */}
        <div
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            backgroundImage: `url(${finalBackgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.2,
          }}
        />
        {/* Overlay for readability: add subtle black shade to both layouts */}
        <div className="absolute inset-0 z-10 pointer-events-none">
          <div
            style={{
              background: layout === 1
                ? 'linear-gradient(rgba(0,10,20,0.5), rgba(0,0,0,0.15))'
                : 'linear-gradient(rgba(255,255,255,0.5), rgba(0,0,0,0.10))',
              width: '100%',
              height: '100%',
            }}
          />
        </div>
        <div className="relative z-20">
          <h2 className={`text-4xl font-bold mb-4 ${isDark ? 'text-cyan-400' : 'text-gray-900'}`}>
            {title}
          </h2>
          <p className="text-lg mb-4">{description}</p>
          {main_applicationPoints && (
            <div className="mb-4">
              <h3 className="text-3xl font-semibold mb-2">Performances</h3>
              <ul className="text-lg space-y-1">
                {main_applicationPoints.map((point, index) => (
                  <li key={index}>• {point}</li>
                ))}
              </ul>
            </div>
          )}
          {benefit && (
            <div className="mb-4">
              <h3 className="text-3xl font-semibold mb-2">Main Applications</h3>
              <ul className="text-lg space-y-1">
                {benefit.map((benefit, index) => (
                  <li key={index}>• {benefit}</li>
                ))}
              </ul>
            </div>
          )}
          {performance && (
            <div className="mb-6">
              <h3 className="text-3xl font-semibold mb-2">Benefits</h3>
              <ul className="text-lg space-y-1">
                {performance.map((perf, index) => (
                  <li key={index}>• {perf}</li>
                ))}
              </ul>
            </div>
          )}
          <div className="relative inline-flex items-center mt-6">
            <div className="absolute left-0 top-0 bottom-0 w-3 bg-cyan-400" />
            <button
              onClick={handleOpenRequestInfo}
              className="bg-white text-gray-900 px-10 py-4 pl-8 text-lg font-semibold font-poppins hover:bg-gray-100 transition-colors cursor-pointer rounded-none border-0 shadow-none"
              style={{ boxShadow: 'none', borderRadius: 0 }}
            >
              REQUEST MORE INFORMATION
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {showRequestInfo && (
        <RequestMoreInformation
          onSubmit={handleSubmitRequestInfo}
          onCancel={handleCloseRequestInfo}
          productName={requestProductName}
        />
      )}
      <div 
        className={`w-full grid grid-cols-1 lg:grid-cols-6 gap-12 items-center p-8`}
        style={getMainBackgroundStyle(layout)}
      >
        {layout === 1 ? (
          <>
            {/* Layout 1: Image in left 3 columns */}
            <div className="lg:col-span-3">
              <ImageSection />
            </div>
            <div className="lg:col-span-3">
              <ContentSection />
            </div>
          </>
        ) : (
          <>
            {/* Layout 2: Content in left 3 columns (same position as Layout 1 image) */}
            <div className="lg:col-span-3">
              <ContentSection />
            </div>
            <div className="lg:col-span-3">
              <ImageSection />
            </div>
          </>
        )}
      </div>
    </>
  );
};

// Example usage with different layouts and background images:
/*
// Layout 1 Example - Industrial/Construction Theme
<ProductCard 
  layout={1}
  theme="dark"
  title="Industrial Floor Reinforcement"
  description="High-performance concrete additives for industrial applications"
  main_applicationPoints={["Increased durability", "Faster curing time", "Superior adhesion"]}
  benefit={["Cost effective", "Easy application", "Long-lasting results"]}
  performance={["Load capacity: 500kg/m²", "Curing time: 24 hours", "Temperature range: -20°C to 60°C"]}
  images={["https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"]}
  imagePosition="left"
  backgroundImage="https://images.unsplash.com/photo-1581094288338-2314dddb7ece?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
/>

// Layout 2 Example - Modern Construction Theme
<ProductCard 
  layout={2}
  theme="dark"
  title="Advanced Concrete Solutions"
  description="Next-generation building materials for modern construction"
  main_applicationPoints={["Enhanced strength", "Weather resistant", "Eco-friendly formula"]}
  benefit={["Reduced maintenance", "Energy efficient", "Sustainable construction"]}
  performance={["Compression strength: 40 MPa", "Water absorption: <5%", "Service life: 50+ years"]}
  images={["https://images.unsplash.com/photo-1590736969955-71cc94901144?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"]}
  imagePosition="right"
  backgroundImage="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
/>
*/

export default ProductCard;