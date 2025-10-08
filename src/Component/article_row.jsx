import React from 'react';

const ArticleRow = ({ title, date, category, readTime }) => {
  return (
    <div className="flex items-center justify-between py-4 px-6 bg-gray-800 hover:bg-gray-700 transition-colors duration-200 border-l-4 border-cyan-400">
      <div className="flex-1">
        <h3 className="text-white font-semibold text-lg mb-1 hover:text-cyan-400 cursor-pointer">
          {title}
        </h3>
        <div className="flex items-center space-x-4 text-sm text-gray-400">
          <span>{date}</span>
          <span>•</span>
          <span className="text-cyan-400">{category}</span>
          <span>•</span>
          <span>{readTime} min read</span>
        </div>
      </div>
      
      <div className="flex items-center space-x-4">
        <button className="text-cyan-400 hover:text-cyan-300 transition-colors">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ArticleRow;