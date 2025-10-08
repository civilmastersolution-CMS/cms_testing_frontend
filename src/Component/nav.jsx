import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Nav = () => {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path || (path === '/home' && location.pathname === '/');
  };

  return (
    <nav className="flex items-center justify-between px-8 py-6 bg-gray-900/90 backdrop-blur-sm">
      {/* Logo */}
      <div className="flex items-center">
        <Link to="/" className="text-white font-bold text-xl">
          <span className="text-cyan-400">CMS</span>
          <span className="text-xs ml-1">◆</span>
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
