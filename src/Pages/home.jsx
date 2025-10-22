import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Nav from '../Component/nav';
import Footer from '../Component/footer';
import LogoLoop from '../Component/LogoLoop';
import HeroProjectReference from '../Component/hero_project_reference';
import PartnerCard from '../Component/partner_card';
import CustomerCard from '../Component/customer_card';
import ChatBot from '../Component/ChatBot';
import { apiService } from '../services/api';
import './home.css';

const Home = () => {
  const navigate = useNavigate();
  const [partners, setPartners] = useState([]);
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch data from API
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const [partnersResponse, customersResponse] = await Promise.all([
          apiService.partnerships.getAll(),
          apiService.customers.getAll()
        ]);

        // Transform API data to match LogoLoop component format
        const partnerLogos = partnersResponse.data.map((partner, index) => {
          // Get image URL and provide fallback if empty
          const imageUrl = partner.partner_image?.[0];
          const fallbackImage = `https://via.placeholder.com/100x80/4B5563/FFFFFF?text=${encodeURIComponent(partner.partner_name || 'Partner')}`;
          const finalImage = imageUrl && imageUrl.trim() !== '' ? imageUrl : fallbackImage;
          
          console.log('Partner:', partner.partner_name, 'Image:', finalImage);
          
          return {
            node: <PartnerCard 
              key={`partner-${partner.id || index}`}
              name={partner.partner_name} 
              image={finalImage}
              type="partner" 
            />,
            title: partner.partner_name
          };
        });

        const customerLogos = customersResponse.data.map((customer, index) => {
          // Get image URL and provide fallback if empty
          const imageUrl = customer.customer_image?.[0];
          const fallbackImage = `https://via.placeholder.com/100x80/3B82F6/FFFFFF?text=${encodeURIComponent(customer.customer_name || 'Customer')}`;
          const finalImage = imageUrl && imageUrl.trim() !== '' ? imageUrl : fallbackImage;
          
          console.log('Customer:', customer.customer_name, 'Image:', finalImage);
          
          return {
            node: <CustomerCard 
              key={`customer-${customer.id || index}`}
              name={customer.customer_name} 
              image={finalImage}
              type="customer" 
            />,
            title: customer.customer_name
          };
        });

        setPartners(partnerLogos);
        setCustomers(customerLogos);
      } catch (err) {
        console.error('Error fetching data:', err);
        setError('Failed to load partner and customer data');
        
        // Fallback to empty arrays or you could use default data
        setPartners([]);
        setCustomers([]);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

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
            <h3 className="text-cyan-400 text-2xl md:text-5xl font-bold mb-3">&gt; 1,000,000</h3>
            <p className="text-gray-200 text-xs md:text-sm">SQ.M FLOORING AREA</p>
          </div>
          <div className="text-center">
            <h3 className="text-cyan-400 text-2xl md:text-5xl font-bold mb-3">&gt; 100</h3>
            <p className="text-gray-200 text-xs md:text-sm">PROJECTS COMPLETED</p>
          </div>
          <div className="text-center">
            <h3 className="text-cyan-400 text-2xl md:text-5xl font-bold mb-3">&gt; 10</h3>
            <p className="text-gray-200 text-xs md:text-sm">YEARS EXPERIENCES</p>
          </div>
        </div>
      </section>
      </hero>

      {/* About Us & Announcement Section */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-0">
        {/* About Us - Left Side */}
        <div className="py-16 px-12" style={{ backgroundColor: '#222E3B' }}>
          <div className="mt-8 ml-64">
            <div className="flex items-start gap-20 ">
            <h2 className="text-4xl font-bold text-white mb-12">About Us</h2>
            <img src="/images/logo.png" alt="DUCTIL" className="h-16 ml-52 mb-6 -mt-4" />
            </div>
            <div className="mb-4">
              <h3 className="text-white text-xl font-bold mb-2">
                CMS is a leading specialist in industrial flooring in Thailand.
              </h3>
            </div>
            <p className="text-white text-lg leading-relaxed text-justify">
              Founded with a vision to provide durable, safe, and high-performance flooring systems, we have grown into a trusted partner for factories, warehouses, logistics centers, and commercial facilities. our success comes from engineering smarter solutions, not just selling products. We deliver world-class, tested materials with expert guidance from design to on-site supervision. With custom-fit solutions and a reputation built on trust, we help industries build stronger foundations for the future.
            </p>
          </div>
        </div>
        
        {/* Announcement - Right Side */}
        <div className="py-16 px-12 mr-64" style={{ backgroundColor: 'white' }}>
          <div className="flex items-center gap-11 mb-6 ">
            <img src="/images/ductil-logo.png" alt="DUCTIL" className="h-24 mr-auto" />
            <h2 className="text-4xl font-bold text-gray-900 text-right">Announcement</h2>
          </div>
          <div className="mb-4">  
            <h3 className="text-xl font-bold text-gray-900 mb-2 text-right">CMS has officially partnered with Ductil GmbH.</h3>
          </div>
          <p className="text-gray-600 text-lg leading-relaxed text-justify">
            Through this collaboration, we are joining forces with Ductil GmbH, a German company led by Dr. Ralf Winterberg, who brings nearly 30 years of expertise in fiber technology. This partnership combines CMS's deep understanding of the local market with Ductil's cutting-edge German engineering and innovation.Together, we will deliver international-quality, next-generation steel fiber solutions tailored to the unique demands of Thailand's industrial sector.
          </p>
        </div>
      </section>  

      {/* Services Section */}
      <section className="py-16" style={{ backgroundColor: '#000A14' }}>
        <div className="max-w-[1370px] mx-auto px-8">
          <h2 className="text-4xl font-bold text-white mb-12">OUR SERVICES</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            {/* On-Site Supervision */}
            <div className="relative">
              <div className="h-96 bg-cover bg-center relative" style={{ backgroundImage: "url('/images/services/service2.png')" }}>
                <div className="absolute bottom-6 left-6">
                  <h3 className="text-3xl font-bold text-white -mb-4">ON-SITE SUPERVISION</h3>
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
                  <h3 className="text-3xl font-bold text-white -mb-4">CONSULTATION</h3>
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
      <section className="bg-gray-900 py-3" style={{ overflow: 'hidden' }}>
        <div className="max-w-[1330px] mx-auto px-8" style={{ overflow: 'hidden' }}>
          <h2 className="text-4xl font-bold text-white text-center mb-4">Partners</h2>
          
          {loading ? (
            <div className="text-center text-white mb-12">Loading partners...</div>
          ) : error ? (
            <div className="text-center text-red-400 mb-12">{error}</div>
          ) : (
            <div className="flex flex-wrap justify-center gap-8 mb-5">
              {partners.slice(0, 8).map((partner, index) => (
                <div key={index} className="flex justify-center">
                  {partner.node}
                </div>
              ))}
            </div>
          )}
          
            <h2 className="text-4xl font-bold text-white text-center mb-2">Customers</h2>
            
            {loading ? (
              <div className="text-center text-white">Loading customers...</div>
            ) : error ? (
              <div className="text-center text-red-400">{error}</div>
            ) : (
              <div>
                <div style={{ 
                  height: '100px', 
                  position: 'relative', 
                  overflow: 'hidden !important',
                  scrollbarWidth: 'none', /* Firefox */
                  msOverflowStyle: 'none', /* Internet Explorer and Edge */
                  WebkitOverflowScrolling: 'touch'
                }}
                className="[&::-webkit-scrollbar]:hidden overflow-hidden">
                  <LogoLoop
                    logos={customers}
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
                <div style={{ 
                  height: '100px', 
                  position: 'relative', 
                  overflow: 'hidden !important',
                  scrollbarWidth: 'none', /* Firefox */
                  msOverflowStyle: 'none', /* Internet Explorer and Edge */
                  WebkitOverflowScrolling: 'touch'
                }}
                className="[&::-webkit-scrollbar]:hidden overflow-hidden">
                  <LogoLoop
                    logos={customers}
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
            )}
          </div>
        </section>

      {/* Footer */}
      <Footer />

      {/* ChatBot */}
      <ChatBot />
    </div>
  );
};

export default Home;