import React from 'react';
import Nav from '../Component/nav';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      <Nav />
      
      {/* Hero Section */}
      <section className="relative px-8 py-20 bg-gradient-to-r from-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Left Content */}
          <div className="flex-1 max-w-2xl">
            <h1 className="text-6xl font-bold text-white mb-6">
              CIVIL<br />
              MASTER<br />
              SOLUTION
            </h1>
            <p className="text-gray-300 text-lg mb-8 max-w-md">
              Leading specialist of industrial floor solution in Thailand
            </p>
            <button className="bg-cyan-400 text-gray-900 px-8 py-3 font-semibold hover:bg-cyan-300 transition-colors">
              VIEW OUR PRODUCTS
            </button>
          </div>

          {/* Right Content - Product Images */}
          <div className="flex-1 relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-700 h-32 w-32 rounded-lg"></div>
              <div className="bg-gray-700 h-32 w-32 rounded-lg"></div>
              <div className="bg-gray-700 h-32 w-32 rounded-lg"></div>
              <div className="bg-gray-700 h-32 w-32 rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="bg-gray-800 py-8">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex justify-around text-center">
            <div>
              <h3 className="text-cyan-400 text-2xl font-bold">MORE THAN 1 MILLION SQ M</h3>
              <p className="text-gray-400 text-sm">FLOORING AREA</p>
            </div>
            <div>
              <h3 className="text-cyan-400 text-2xl font-bold">130+ PROJECTS</h3>
              <p className="text-gray-400 text-sm">COMPLETED</p>
            </div>
            <div>
              <h3 className="text-cyan-400 text-2xl font-bold">+10 YEARS EXPERIENCES</h3>
              <p className="text-gray-400 text-sm">IN THE INDUSTRY</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">About Us</h2>
            <p className="text-gray-600 mb-6">
              CMS is a leading specialist in industrial flooring solutions in Thailand. 
              We deliver durable, safe, and high-performance flooring systems 
              trusted by leading factories, warehouses, logistics hubs, and commercial 
              facilities.
            </p>
            <p className="text-gray-600 mb-6">
              From top jute products, we provide comprehensive services 
              backed by world-class materials and experienced professionals who 
              ensure superior results.
            </p>
            <p className="text-gray-600">
              With custom-fit systems and a reputation built on trust, we 
              help industries build stronger, smarter, and more resilient 
              foundations for the future.
            </p>
          </div>
          
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Announcement</h2>
            <div className="flex items-center mb-4">
              <span className="text-cyan-400 font-bold text-2xl mr-4">DUCTIL</span>
            </div>
            <p className="text-gray-600">
              Through this collaboration, we are joining forces with Ductil GmbH, 
              a German company and by their local Wieenberg, who brings more than 
              50 years of expertise in the steel flooring sector. This partnership 
              combines CMS's deep understanding of the local market with Ductil's 
              cutting-edge German engineering and innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-gray-700 h-64 rounded-lg"></div>
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">CONSULTANCY TO ANSWER QUESTIONS</h2>
            <p className="text-gray-600 mb-6">
              Our specialists offer on-site supervision to guarantee that floor 
              installation and construction processes meet high quality standards. 
              We oversee every step to ensure quality, safety, and efficiency, 
              delivering results that exceed client expectations.
            </p>
            <p className="text-gray-600">
              We provide expert consultation to help clients select the most 
              suitable industrial floor solutions from assessing site conditions 
              to recommending materials and techniques, our team ensures every 
              project has the best strategy for long-lasting performance.
            </p>
          </div>
        </div>
      </section>

      {/* Project References Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">PROJECT REFERENCES</h2>
          <div className="relative">
            <div className="bg-gray-300 h-96 rounded-lg mb-8"></div>
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white bg-gray-900 inline-block px-8 py-4">
                THIS IS THE PROJECTS REFERENCES TITLES
              </h3>
              <button className="block mx-auto mt-4 border border-gray-900 text-gray-900 px-6 py-2 hover:bg-gray-900 hover:text-white transition-colors">
                REFERENCE DETAIL
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="bg-gray-900 py-16">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Partners & Customers</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-8">
            {/* Partner logos - placeholder boxes */}
            {[1,2,3,4,5].map((i) => (
              <div key={i} className="bg-gray-700 h-16 rounded flex items-center justify-center">
                <span className="text-gray-400">Logo {i}</span>
              </div>
            ))}
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {/* Customer logos - placeholder boxes */}
            {[1,2,3,4,5].map((i) => (
              <div key={i} className="bg-white h-20 rounded flex items-center justify-center">
                <span className="text-gray-600 text-sm">GrabLeaf</span>
              </div>
            ))}
            {[6,7,8,9,10].map((i) => (
              <div key={i} className="bg-white h-20 rounded flex items-center justify-center">
                <span className="text-gray-600 text-sm">GrabLeaf</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-12">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="text-white font-bold text-xl mb-4">
              <span className="text-cyan-400">CMS</span>
              <span className="text-xs ml-1">◆</span>
            </div>
            <p className="text-gray-400 text-sm">
              Your trusted Partner in Industrial Floor Solutions
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Menu</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>Home</li>
              <li>Product</li>
              <li>Project Reference</li>
              <li>News & Articles</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <div className="text-gray-400 text-sm space-y-2">
              <p>19 Soi Ramintra 109 Intersection 8, Khan Udom, Bueng Kum, Bangkok 10230</p>
              <p>081 712 3544 / 062 479 4215</p>
              <p>siamgrout@civilmastersolution.com</p>
              <p>export@civilmastersolution.com</p>
            </div>
          </div>
          
          <div className="bg-blue-900 p-6 rounded">
            <p className="text-white text-sm">
              Civil Master Solution © 2024
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;