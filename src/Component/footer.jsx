import React from 'react';
import { Link } from 'react-router-dom'; // Importing Link for navigation
import './footer.css'; // Importing a CSS file for font styles

const Footer = () => {
  return (
    <footer className="bg-white py-12 border-t-4 border-cyan-400 font-oswald">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div>
            <div className="flex items-center mb-4">
              <img src="/images/logo2.png" alt="CMS Logo" className="h-16 mr-3 mb-4" />
            </div>
            <p className="text-black text-sm">
              Your Trusted Partner in Industrial Floor Solutions.
            </p>
          </div>
          
          {/* Menu */}
          <div>
            <ul className="space-y-2 text-black text-sm mt-6">
              <li className="mb-5">
                <Link to="/">Home</Link>
              </li>
              <li style={{ marginBottom: '1.25rem' }}>
                <Link to="/product">Product</Link>
              </li>
              <li style={{ marginBottom: '1.25rem' }}>
                <Link to="/projects-reference">Projects Reference</Link>
              </li>
              <li>
                <Link to="/news-article">News & Articles</Link>
              </li>
            </ul>
          </div>
          
          {/* Map Section */}
          <div className="flex flex-col items-center">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3873.6542234567!2d100.6789012345678!3d13.8765432109876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDUyJzM1LjYiTiAxMDDCsDQwJzQ0LjEiRQ!5e0!3m2!1sen!2sth!4v1234567890123!5m2!1sen!2sth"
              width="100%" 
              height="250" 
              style={{ border: 0, borderRadius: '6px' }}
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="CMS Location"
              className="mb-4 w-full max-w-xs rounded"
            ></iframe>
          </div>
          
          {/* Contact */}
          <div className="w-96">
            <h4 className="text-black font-semibold mb-4">Contact</h4>
            <div className="text-black text-sm space-y-2">
              <p>16 Soi Nawamin 163, Intersection 6, Ram Inthra Subdistrict,
                 Khan Na Yao District, Bangkok 10230</p>
              <p>081-710-3444 / 062-479-1615</p>
              <p>narongkorn.m@civilmastersolution.com</p>
              <p>yanapol@civilmastersolution.com</p>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-gray-200 mt-8 pt-4 text-center">
          <p className="text-black text-sm">
            Civil Master Solution ©2024
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
