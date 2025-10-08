import React from 'react';
import Nav from '../Component/nav';
import NewsCards from '../Component/news_cards';
import ArticleRow from '../Component/article_row';

const NewArticle = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      <Nav />
      
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-8 text-center">
          <h1 className="text-4xl font-bold mb-8">
            <span className="text-cyan-400">News & Articles</span>
          </h1>
          <p className="text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Stay updated with the latest developments in industrial flooring technology and industry insights.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* News Section - Left Side */}
            <div>
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-3xl font-bold text-white">
                  Latest <span className="text-cyan-400">News</span>
                </h2>
              </div>
              
              {/* News Grid - 2x2 */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <NewsCards
                  title="New Industrial Flooring Technology Breakthrough"
                  description="Revolutionary synthetic fiber reinforcement technology achieves 40% stronger industrial floors."
                  date="October 5, 2025"
                />
                <NewsCards
                  title="CMS Expands Operations to Southeast Asia"
                  description="Civil Master Solution announces expansion plans across Thailand, Vietnam, and Malaysia markets."
                  date="September 28, 2025"
                />
                <NewsCards
                  title="Sustainable Flooring Solutions Initiative"
                  description="Introducing eco-friendly concrete solutions that reduce carbon footprint by 30%."
                  date="September 20, 2025"
                />
                <NewsCards
                  title="Award Recognition for Excellence"
                  description="CMS receives Industry Excellence Award for outstanding performance in industrial projects."
                  date="September 15, 2025"
                />
              </div>

              {/* Pagination */}
              <div className="flex items-center justify-center space-x-4">
                <button className="p-2 text-gray-400 hover:text-cyan-400 transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                
                <div className="flex space-x-2">
                  <button className="w-8 h-8 bg-cyan-400 text-gray-900 rounded-full text-sm font-medium">1</button>
                  <button className="w-8 h-8 bg-gray-700 text-white hover:bg-gray-600 rounded-full text-sm font-medium">2</button>
                  <button className="w-8 h-8 bg-gray-700 text-white hover:bg-gray-600 rounded-full text-sm font-medium">3</button>
                </div>
                
                <button className="p-2 text-gray-400 hover:text-cyan-400 transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Articles Section - Right Side */}
            <div>
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-white">
                  Technical <span className="text-cyan-400">Articles</span>
                </h2>
              </div>
              
              {/* Scrollable Articles List - Same height as news section */}
              <div className="h-[500px] overflow-y-auto scrollbar-thin scrollbar-track-gray-800 scrollbar-thumb-cyan-400 space-y-4 pr-2">
                <ArticleRow
                  title="Understanding Steel Fiber Reinforcement in Industrial Flooring"
                  date="October 1, 2025"
                  category="Technical Guide"
                  readTime="8"
                />
                <ArticleRow
                  title="Joint Systems and Load Distribution: A Comprehensive Analysis"
                  date="September 25, 2025"
                  category="Engineering"
                  readTime="12"
                />
                <ArticleRow
                  title="Concrete Grade Selection for Heavy-Duty Applications"
                  date="September 18, 2025"
                  category="Materials"
                  readTime="6"
                />
                <ArticleRow
                  title="Installation Best Practices for Large-Scale Projects"
                  date="September 10, 2025"
                  category="Installation"
                  readTime="10"
                />
                <ArticleRow
                  title="Maintenance Strategies for Industrial Flooring Systems"
                  date="September 5, 2025"
                  category="Maintenance"
                  readTime="7"
                />
                <ArticleRow
                  title="Future Trends in Industrial Flooring Technology"
                  date="August 28, 2025"
                  category="Innovation"
                  readTime="9"
                />
                <ArticleRow
                  title="Quality Control in Industrial Floor Construction"
                  date="August 20, 2025"
                  category="Quality"
                  readTime="11"
                />
                <ArticleRow
                  title="Cost-Effective Solutions for Large Scale Projects"
                  date="August 15, 2025"
                  category="Economics"
                  readTime="8"
                />
                <ArticleRow
                  title="Environmental Impact of Modern Flooring Systems"
                  date="August 10, 2025"
                  category="Environment"
                  readTime="9"
                />
                <ArticleRow
                  title="Advanced Surface Finishing Techniques"
                  date="August 5, 2025"
                  category="Techniques"
                  readTime="7"
                />
              </div>
            </div>
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

export default NewArticle;