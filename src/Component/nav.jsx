import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Nav = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Get hero section height (approximately 100vh)
      const heroHeight = window.innerHeight;
      
      // Check if scrolled past hero section
      if (window.scrollY > heroHeight * 0.8) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Clean up the event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const isActive = (path) => {
    return location.pathname === path || (path === '/home' && location.pathname === '/');
  };

  return (
    <nav className={`flex items-center justify-between px-8 py-6 transition-all duration-300 ${
      isScrolled ? 'bg-gray-900/40 backdrop-blur-sm' : 'bg-transparent'
    }`}>
      {/* Logo */}
      <div className="flex items-center ml-4">
        <Link to="/" className="flex items-center">
          <img src="/images/logo.png" alt="CMS Logo" className="h-14" />
        </Link>
      </div>

      {/* Right Side - Menu and Language */}
      <div className="flex items-center space-x-8">
        {/* Navigation Items */}
        <div className="flex items-center space-x-8">
          <Link 
            to="/home" 
            className={`text-sm font-medium transition-colors uppercase tracking-wide ${
              isActive('/home') ? 'text-cyan-400' : 'text-white hover:text-cyan-400'
            }`}
          >
            HOME
          </Link>
          <Link 
            to="/product" 
            className={`text-sm font-medium transition-colors uppercase tracking-wide ${
              isActive('/product') ? 'text-cyan-400' : 'text-white hover:text-cyan-400'
            }`}
          >
            PRODUCT
          </Link>
          <Link 
            to="/projects-reference" 
            className={`text-sm font-medium transition-colors uppercase tracking-wide ${
              isActive('/projects-reference') ? 'text-cyan-400' : 'text-white hover:text-cyan-400'
            }`}
          >
            PROJECTS REFERENCE
          </Link>
          <Link 
            to="/news-article" 
            className={`text-sm font-medium transition-colors uppercase tracking-wide ${
              isActive('/news-article') ? 'text-cyan-400' : 'text-white hover:text-cyan-400'
            }`}
          >
            NEWS & ARTICLE
          </Link>
        </div>

        {/* Language/Globe Icon */}
        <button className="text-white hover:text-cyan-400 transition-colors">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0 3-4.03 3-9s-1.343-9-3-9m-9 9a9 9 0 919-9" />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Nav;
