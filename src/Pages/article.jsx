import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import Nav from '../Component/nav';
import Footer from '../Component/footer';
import ArticleRow from '../Component/article_row';
import ContentRenderer from '../Component/ContentRenderer';
import ChatBot from '../Component/ChatBot';
import { apiService } from '../services/api';

const Article = () => {
  const [articlesData, setArticlesData] = useState([]);
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  // Helper function to extract plain text from Slate JSON content or HTML
  const getPlainTextPreview = (content, contentHtml) => {
    // If HTML content exists, strip tags for preview
    if (contentHtml) {
      const tmp = document.createElement('div');
      tmp.innerHTML = contentHtml;
      const text = tmp.textContent || tmp.innerText || '';
      return text.slice(0, 100) + (text.length > 100 ? '...' : '');
    }
    
    // Fallback to Slate JSON parsing
    if (typeof content === 'string') {
      return content.slice(0, 100) + (content.length > 100 ? '...' : '');
    }
    if (Array.isArray(content)) {
      const text = content.map(node => 
        node.children?.map(child => child.text).join('') || ''
      ).join(' ');
      return text.slice(0, 100) + (text.length > 100 ? '...' : '');
    }
    return '';
  };

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        setLoading(true);
        const response = await apiService.articles.getAll();
        console.log('Articles data:', response.data);
        setArticlesData(response.data);

        // Check for article ID in URL parameters
        const articleId = searchParams.get('id');
        if (articleId) {
          // First try to find by ID, then by index if ID is not found
          let article = response.data.find(item => item.id == articleId);
          if (!article) {
            // If not found by ID, try by index (for fallback)
            const index = parseInt(articleId);
            if (!isNaN(index) && index >= 0 && index < response.data.length) {
              article = response.data[index];
            }
          }
          setSelectedArticle(article || null);
        }
      } catch (err) {
        console.error('Error fetching articles:', err);
        setError('Failed to load articles');
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, [searchParams]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-900">
        <Nav />
        <div className="flex items-center justify-center h-64">
          <div className="text-white text-xl">Loading...</div>
        </div>
        <Footer />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-900">
        <Nav />
        <div className="flex items-center justify-center h-64">
          <div className="text-red-400 text-xl">{error}</div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#000A14]" style={{ fontFamily: "'Montserrat', sans-serif" }}>
      <Nav />
      {/* Content Section */}
      <section className="py-8 bg-[#000A14]">
        <div className="max-w-7xl mx-auto px-8">
          {/* Small left accent + heading to match image */}
          <div className="flex items-center mb-6">
            <div className="w-10 h-px bg-cyan-400 mr-4" />
            <h3 className="text-xl text-white font-semibold tracking-wider">Articles</h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Selected Article - Left Side */}
            <div className="lg:col-span-2">
              {selectedArticle ? (
                (() => {
                  const article = selectedArticle;
                  const content = article.content || '';

                  return (
                    <div>
                      {/* Centered title */}
                      <h1 className="text-4xl md:text-5xl font-bold text-white text-left mb-6">{article.article_title}</h1>
                      <p className="text-sm text-gray-400 text-left mb-2">Category: {article.category}</p>
                      {article.keyword && article.keyword.length > 0 && (
                        <p className="text-sm text-gray-400 text-left mb-6">
                          Keywords: {Array.isArray(article.keyword) ? article.keyword.join(', ') : article.keyword}
                        </p>
                      )}

                      {/* Full content display */}
                      <div className="text-white">
                        <style>
                          {`
                            @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap');
                            .article-content img {
                              height: auto;
                              display: block;
                              margin: 1rem auto;
                              border: 1px solid #374151;
                            }
                            .article-content table {
                              border-collapse: collapse;
                              width: 100%;
                              margin: 1rem 0;
                              background-color: #1f2937;
                            }
                            .article-content th, .article-content td {
                              border: 1px solid #4b5563;
                              padding: 0.5rem;
                              text-align: left;
                              color: white;
                            }
                            .article-content th {
                              background-color: #374151;
                              font-weight: bold;
                            }
                            .article-content p {
                              text-align: justify;
                              margin-bottom: 1rem;
                            }
                            .article-content * {
                              color: white !important;
                              font-family: 'Montserrat', sans-serif !important;
                            }
                            .article-content a {
                              color: #22d3ee !important;
                            }
                            .article-content a:hover {
                              color: #67e8f9 !important;
                            }
                          `}
                        </style>
                        {article.content_html ? (
                          <>
                            {(() => {
                              // Process HTML to fix relative image URLs
                              const processedHtml = article.content_html.replace(
                                /<img[^>]+src=([^ >]+)[^>]*>/gi,
                                (match, src) => {
                                  src = src.replace(/^["']|["']$/g, ''); // Remove quotes
                                  if (src.startsWith('http://') || src.startsWith('https://') || src.startsWith('data:')) {
                                    return match; // Already absolute or data URL
                                  }
                                  // Assume relative URLs are relative to media directory
                                  const fullSrc = `http://localhost:8000/media/${src.replace(/^\/+/, '')}`;
                                  return match.replace(src, fullSrc);
                                }
                              );
                              return (
                                <>
                                  {console.log('Rendering processed HTML content:', processedHtml.substring(0, 200))}
                                  <div 
                                    dangerouslySetInnerHTML={{ __html: processedHtml }} 
                                    className="prose prose-invert max-w-none article-content"
                                  />
                                </>
                              );
                            })()}
                          </>
                        ) : (
                          <ContentRenderer content={article.content} />
                        )}
                      </div>

                      {/* Back to all articles button */}
                      <div className="flex justify-end mt-8">
                        <button
                          onClick={() => navigate('/news-article')}
                          className="hover:text-cyan-300 text-white font-medium py-1 px-3 rounded text-sm transition-colors duration-200"
                        >
                          <span className="text-4xl mr-1">←</span> Back to All Articles
                        </button>
                      </div>
                    </div>
                  );
                })()
              ) : (
                <div className="text-center py-12">
                  <div className="text-gray-400 text-lg">Select an article to read</div>
                </div>
              )}
            </div>

            {/* Articles List - Right Side */}
            <div className="lg:col-span-1">
              <div className="flex items-center mb-6">
                <div className="w-10 h-px bg-cyan-400 mr-4" />
                <h4 className="text-lg text-white font-semibold tracking-wider">All Articles</h4>
              </div>
              <div className="space-y-2">
                {articlesData.map((article, index) => (
                  <div
                    key={article.id || index}
                    onClick={() => navigate(`?id=${article.id}`)}
                    className={`py-3 px-4 cursor-pointer transition-colors border-b border-gray-700 last:border-b-0 ${
                      selectedArticle && selectedArticle.id === article.id
                        ? 'bg-cyan-900 border-cyan-400'
                        : 'hover:bg-gray-700'
                    }`}
                  >
                    <h5 className="text-white font-medium text-sm leading-tight">{article.article_title}</h5>
                    <div className="flex items-center justify-between mt-1">
                      <p className="text-gray-400 text-xs">{article.category || 'Uncategorized'}</p>
                      <button className="text-cyan-400 hover:text-cyan-300 text-xs font-medium transition-colors">
                        Read More →
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />

      {/* ChatBot */}
      <ChatBot />
    </div>
  );
};

export default Article;