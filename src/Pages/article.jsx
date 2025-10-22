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
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  // Helper function to extract plain text from Slate JSON content
  const getPlainTextPreview = (content) => {
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

  useEffect(() => {
    setCurrentPage(1);
  }, [articlesData]);

  const totalPages = Math.ceil(articlesData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const displayedArticles = articlesData.slice(startIndex, startIndex + itemsPerPage);

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
    <div className="min-h-screen bg-[#000A14]">
      <Nav />
      {/* Content Section */}
      <section className="py-8 bg-[#000A14]">
        <div className="max-w-7xl mx-auto px-8">
          {/* Hero section (image + overlay + heading) */}


          {/* Small left accent + heading to match image */}
          <div className="flex items-center mb-6">
            <div className="w-10 h-px bg-cyan-400 mr-4" />
            <h3 className="text-xl text-white font-semibold tracking-wider">Articles</h3>
          </div>

          {/* Use selectedArticle if present */}
          {selectedArticle ? (
            (() => {
              const article = selectedArticle;
              const content = article.content || '';

              return (
                <div>
                  {/* Article image if available */}
                  {article.article_image && article.article_image.length > 0 && (
                    <div className="w-full h-64 md:h-72 bg-gray-700 mb-6 overflow-hidden rounded">
                      <img
                        src={article.article_image[0]}
                        alt={article.article_title}
                        className="w-full h-full object-cover"
                        onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex'; }}
                      />
                      <div className="w-full h-full flex items-center justify-center" style={{ display: 'none' }}>
                        <span className="text-gray-400">Image not available</span>
                      </div>
                    </div>
                  )}

                  {/* Centered title */}
                  <h1 className="text-6xl md:text-6xl font-bold text-white text-center mb-6">{article.article_title}</h1>
                  <p className="text-sm text-gray-400 text-left mb-3">Category: {article.category}</p>

                  {/* Full content display */}
                  <div className="text-white">
                    <ContentRenderer content={article.content} />
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
          ) : null}
        </div>
      </section>

      {/* Articles List Section */}
      <section className="py-8 bg-[#000A14]">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex items-center mb-6">
            <div className="w-10 h-px bg-cyan-400 mr-4" />
            <h3 className="text-xl text-white font-semibold tracking-wider">All Articles</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayedArticles.map((article, index) => (
              <ArticleRow
                key={article.id || index}
                title={article.article_title}
                description={getPlainTextPreview(article.content)}
                category={article.category}
                date={new Date(article.created_at).toLocaleDateString('en-US', {
                  month: 'short',
                  day: 'numeric'
                })}
                onClick={() => navigate(`?id=${article.id}`)}
              />
            ))}
          </div>
          {totalPages > 1 && (
            <div className="flex justify-center items-center mt-8 space-x-4">
              <button
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="text-cyan-400 hover:text-cyan-300 disabled:text-gray-500 text-lg font-semibold"
              >
                ← Previous
              </button>
              <span className="text-white text-lg">Page {currentPage} of {totalPages}</span>
              <button
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
                className="text-cyan-400 hover:text-cyan-300 disabled:text-gray-500 text-lg font-semibold"
              >
                Next →
              </button>
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

export default Article;