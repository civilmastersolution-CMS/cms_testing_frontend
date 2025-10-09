import React from 'react';
import Nav from '../Component/nav';
import NewsCards from '../Component/news_cards';
import ArticleRow from '../Component/article_row';
import Footer from '../Component/footer';

const NewArticle = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      <Nav />

      {/* Content Section */}
      <section className="py-8 bg-gray-900">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* News Section - Left Side */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-white">
                  Latest <span className="text-cyan-400">News</span>
                </h2>
              </div>
              
              {/* News Grid - 2x2 */}
              <div className="grid grid-cols-2 gap-3 mb-4">
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
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-white">
                  Technical <span className="text-cyan-400">Articles</span>
                </h2>
              </div>
              
              {/* Scrollable Articles List - Reduced height */}
              <div className="h-[465px] overflow-y-auto scrollbar-thin scrollbar-track-gray-800 scrollbar-thumb-cyan-400 space-y-3 pr-2">
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

      {/* Quote Section */}
      <section className="py-8 bg-gray-800">
        <div className="max-w-3xl mx-auto px-8 text-center">
          <div className="relative">
            {/* Quote Icon */}
            <div className="flex justify-center mb-4">
              <svg className="w-8 h-8 text-cyan-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-10zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
              </svg>
            </div>
            
            {/* Quote Text */}
            <blockquote className="text-lg md:text-xl font-light text-white mb-4 leading-relaxed">
              "Excellence in industrial flooring builds the foundation for success."
            </blockquote>
            
            {/* Author */}
            <div className="text-gray-300">
              <p className="text-sm font-medium text-cyan-400 mb-1">Who is who</p>
              <p className="text-xs">Chief Engineering Officer, CMS</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default NewArticle;