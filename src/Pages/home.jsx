import React from 'react';
import { useNavigate } from 'react-router-dom';
import Nav from '../Component/nav';
import Footer from '../Component/footer';
import LogoLoop from '../Component/LogoLoop';
import HeroProjectReference from '../Component/hero_project_reference';
import { partnerLogos } from '../Component/partner_data';
import { customerLogos } from '../Component/customer_data';
import './home.css';

const Home = () => {
  const navigate = useNavigate();

  const handleViewProducts = () => {
    navigate('/product');
  };

  return (
    <div className="min-h-screen bg-000A14">
      
      {/* Hero Section */}<hero className="h-screen block relative">
        
      <section 
        className="relative px-8 py-6 h-[85vh] bg-cover bg-center" 
        style={{ backgroundImage: "url('/images/backgrounds/floor-2.png')" }}>  
        <div className="absolute top-0 left-0 right-0 z-50">
          <Nav />
        </div>
        <div className="max-w-7xl mx-auto flex items-center justify-between h-full relative z-10">
          {/* Left Content */}
          <div className="flex-1 max-w-2xl flex flex-col justify-end pb-8 pt-12">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-white mb-6 tracking-tight font-oswald mt-auto">
              CIVIL<br />
              MASTER<br />
              SOLUTION
            </h1>
            <p className="text-gray-300 text-lg md:text-xl lg:text-2xl mb-8 max-w-lg font-poppins font-light tracking-wide">
              Leading specialist of industrial floor solution in Thailand
            </p>
            <div className="relative inline-flex items-center">
              <div className="absolute left-0 top-0 bottom-0 w-3 bg-cyan-400"></div>
              <button 
                onClick={handleViewProducts}
                className="bg-white text-gray-900 px-10 py-4 pl-8 font-semibold font-poppins hover:bg-gray-100 transition-colors cursor-pointer"
              >
                VIEW OUR PRODUCTS
              </button>
            </div>
          </div>

          {/* Product Images - Positioned to match reference */}
          <div className="flex-1 relative h-full">
            {/* Top right image - metal bars */}
            <div className="absolute right-6 top-20 w-48 h-48 shadow-lg overflow-hidden" style={{ border: '4px solid white' }}>
              <img 
                src="/images/heroSection/product1.jpg" 
                alt="Product 1" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Center image - squares */}
            <div className="absolute right-40 top-1/3 w-60 h-60 shadow-lg overflow-hidden" style={{ border: '4px solid white' }}>
              <img 
                src="/images/heroSection/product2.jpg" 
                alt="Product 2" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Bottom left image - construction site */}
            <div className="absolute left-14 bottom-12 w-52 h-52 shadow-lg overflow-hidden" style={{ border: '4px solid white' }}>
              <img 
                src="/images/heroSection/product3.png" 
                alt="Product 3" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Bottom right image - fibers */}
            <div className="absolute right-2 bottom-20 w-56 h-56 shadow-lg overflow-hidden" style={{ border: '4px solid white' }}>
              <img 
                src="/images/heroSection/product4.jpg" 
                alt="Product 4" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="h-[15vh] relative" style={{ backgroundColor: '#000A14' }}>
        <div className="absolute inset-0 flex items-center justify-center gap-60">
          <div className="text-center">
            <h3 className="text-gray-200 text-lg md:text-xl font-bold">MORE THAN 1 MILLION SQ M</h3>
            <p className="text-cyan-400 text-xs md:text-sm">FLOORING AREA</p>
          </div>
          <div className="text-center">
            <h3 className="text-gray-200 text-lg md:text-xl font-bold">130+ PROJECTS</h3>
            <p className="text-cyan-400 text-xs md:text-sm">COMPLETED</p>
          </div>
          <div className="text-center">
            <h3 className="text-gray-200 text-lg md:text-xl font-bold">+10 YEARS EXPERIENCES</h3>
            <p className="text-cyan-400 text-xs md:text-sm">IN THE INDUSTRY</p>
          </div>
        </div>
      </section></hero>

      {/* About Us & Announcement Section */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-0">
        {/* About Us - Left Side */}
        <div className="py-16 px-12" style={{ backgroundColor: '#222E3B' }}>
          <div className="mt-8">
            <h2 className="text-4xl font-bold text-white mb-12">About Us</h2>
            <div className="mb-4">
              <h3 className="text-white text-lg font-bold mb-2">
                CMS is a leading specialist in industrial flooring solutions in Thailand.
              </h3>
            </div>
            <p className="text-white text-base leading-relaxed">
              Founded with a vision to provide durable, safe, and high-performance flooring systems, we have grown into a trusted partner for factories, warehouses, logistics centers, and commercial facilities. our success comes from engineering smarter solutions, not just selling products. We deliver world-class, tested materials with expert guidance from design to on-site supervision. With custom-fit solutions and a reputation built on trust, we help industries build stronger foundations for the future.
            </p>
          </div>
        </div>
        
        {/* Announcement - Right Side */}
        <div className="py-16 px-12" style={{ backgroundColor: 'white' }}>
          <div className="flex items-center gap-6 mb-6">
            <h2 className="text-4xl font-bold text-gray-900">Announcement</h2>
            <img src="/images/ductil-logo.png" alt="DUCTIL" className="h-24" />
          </div>
          <div className="mb-4">
            <h3 className="text-lg font-bold text-gray-900 mb-2">CMS has officially partnered with Ductil GmbH</h3>
          </div>
          <p className="text-gray-600 text-base leading-relaxed">
            Through this collaboration, we are joining forces with Ductil GmbH, a German company led by Dr. Ralf Winterberg, who brings nearly 30 years of expertise in fiber technology. This partnership combines CMS's deep understanding of the local market with Ductil's cutting-edge German engineering and innovation.Together, we will deliver international-quality, next-generation steel fiber solutions tailored to the unique demands of Thailand's industrial sector.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16" style={{ backgroundColor: '#000A14' }}>
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-4xl font-bold text-white mb-12">OUR SERVICES</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* On-Site Supervision */}
            <div className="relative">
              <div className="h-96 bg-cover bg-center relative" style={{ backgroundImage: "url('/images/services/service2.png')" }}>
                <div className="absolute bottom-6 left-6">
                  <h3 className="text-3xl font-bold text-white mb-4">ON-SITE SUPERVISION</h3>
                </div>
              </div>
              <div className="p-6 bg-gray-800">
                <p className="text-white text-base leading-relaxed text-justify">
                  Our specialists offer on-site supervision to guarantee that floor installation and construction processes meet high quality standards. We oversee every step to ensure quality, safety, and efficiency, delivering results that exceed client expectations.
                </p>
              </div>
            </div>

            {/* Consultancy */}
            <div className="relative">
              <div className="h-96 bg-cover bg-center relative" style={{ backgroundImage: "url('/images/services/service.png')" }}>
                <div className="absolute bottom-6 left-6">
                  <h3 className="text-3xl font-bold text-white mb-4">CONSULTATION</h3>
                </div>
              </div>
              <div className="p-6 bg-gray-800">
                <p className="text-white text-base leading-relaxed text-justify">
                  We provide expert consultation to help clients select the most suitable industrial floor solutions. From assessing site conditions to recommending materials and techniques, our team ensures every project starts with the right strategy for long-lasting performance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project References Section */}
      <HeroProjectReference />

      {/* Partners Section */}
      <section className="bg-gray-900 py-12" style={{ overflow: 'hidden' }}>
        <div className="max-w-7xl mx-auto px-8" style={{ overflow: 'hidden' }}>
          <h2 className="text-4xl font-bold text-white text-center mb-8">Partners</h2>
          <div style={{ 
            height: '120px', 
            position: 'relative', 
            overflow: 'hidden !important',
            scrollbarWidth: 'none', /* Firefox */
            msOverflowStyle: 'none', /* Internet Explorer and Edge */
            WebkitOverflowScrolling: 'touch'
          }} 
          className="mb-12 [&::-webkit-scrollbar]:hidden overflow-hidden">
            <LogoLoop
              logos={partnerLogos}
              speed={80}
              direction="left"
              logoHeight={80}
              gap={40}
              pauseOnHover
              scaleOnHover
              fadeOut
              fadeOutColor="#111827"
              ariaLabel="Partner logos"
            />
          </div>
          
          <h2 className="text-4xl font-bold text-white text-center mb-8">Customers</h2>
          <div style={{ 
            height: '120px', 
            position: 'relative', 
            overflow: 'hidden !important',
            scrollbarWidth: 'none', /* Firefox */
            msOverflowStyle: 'none', /* Internet Explorer and Edge */
            WebkitOverflowScrolling: 'touch'
          }}
          className="[&::-webkit-scrollbar]:hidden overflow-hidden">
            <LogoLoop
              logos={customerLogos}
              speed={80}
              direction="right"
              logoHeight={80}
              gap={40}
              pauseOnHover
              scaleOnHover
              fadeOut
              fadeOutColor="#111827"
              ariaLabel="Customer logos"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;