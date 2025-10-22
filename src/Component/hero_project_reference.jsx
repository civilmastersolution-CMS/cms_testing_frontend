import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { apiService } from '../services/api';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faCalendar, faChartArea } from '@fortawesome/free-solid-svg-icons';

const HeroProjectReference = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch favorite projects from API
  useEffect(() => {
    const fetchFavoriteProjects = async () => {
      try {
        setLoading(true);
        const response = await apiService.projectReferences.getFavorites();
        
        // Transform API data to match component format
        const transformedProjects = response.data.map((project) => ({
          id: project.id,
          title: project.project_name,
          image: project.project_image?.[0] || '/images/project-references/default.jpg', // Use first image
          description: `${project.location} - ${project.date_time}`,
          location: project.location,
          site_area: project.site_area,
          date_time: project.date_time,
          contractor: project.contractor,
          layout_type: project.layout_type,
          project_image: project.project_image
        }));

        setProjects(transformedProjects);
        
      } catch (err) {
        console.error('Error fetching favorite projects:', err);
        setError('Failed to load project references');
        setProjects([]);
      } finally {
        setLoading(false);
      }
    };

    fetchFavoriteProjects();
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const handleViewProjectReferences = () => {
    navigate('/projects-reference');
  };

  const currentProject = projects[currentSlide];

  if (loading) {
    return (
      <section className="bg-white py-8">
        <div className="max-w-[1370px] mx-auto px-4">
          <div className="mb-6">
            <h2 className="text-3xl font-bold text-gray-900 text-left">PROJECT REFERENCES</h2>
          </div>
          <div className="h-[600px] bg-gray-200 rounded-lg flex items-center justify-center">
            <div className="text-gray-500">Loading project references...</div>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="bg-white py-8">
        <div className="max-w-[1370px] mx-auto px-4">
          <div className="mb-6">
            <h2 className="text-3xl font-bold text-gray-900 text-left">PROJECT REFERENCES</h2>
          </div>
          <div className="h-[600px] bg-gray-100 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <div className="text-red-500 mb-2">⚠️ {error}</div>
              <div className="text-gray-500 text-sm">Please check your connection and try again</div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (projects.length === 0) {
    return (
      <section className="bg-white py-8">
        <div className="max-w-[1370px] mx-auto px-4">
          <div className="mb-6 mr-3">
            <h2 className="text-3xl font-bold text-gray-900 text-left">PROJECT REFERENCES</h2>
          </div>
          <div className="h-[600px] bg-gray-100 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <div className="text-6xl mb-4">💝</div>
              <div className="text-gray-600 text-lg font-medium mb-2">No Favorite Projects Selected</div>
              <div className="text-gray-500 text-sm">Please select up to 4 favorite project references from the admin panel to display here</div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-white py-8">
      <div className="max-w-[1370px] mx-auto px-4">
        {/* Header */}
        <div className="mb-6 flex justify-between items-center">
          <h2 className="text-3xl font-bold text-gray-900">PROJECT REFERENCES</h2>
           {/* See More Button - Right */}
            <div className="relative inline-flex items-center">
              <div className="absolute left-0 top-0 bottom-0 w-2 bg-cyan-400" />
              <button 
                onClick={handleViewProjectReferences}
                className="bg-[#000A14] hover:bg-blue-800 text-white px-4 py-2 pl-6 shadow-lg transition-all duration-300 flex items-center gap-2"
              >
                <span className="text-sm font-medium">See More Project References</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
        </div>

        {/* Main Card Container */}
        <div className="relative h-[600px] overflow-hidden shadow-lg">
          <div 
            className="w-full h-full bg-cover bg-center relative transition-all duration-500"
            style={{ backgroundImage: `url('${currentProject.image}')` }}
          >
           
            {/* Navigation Arrows */}
            <button 
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-75 transition-all duration-300 z-20 p-2 rounded-lg"
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button 
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-75 transition-all duration-300 z-20 p-2 rounded-lg"
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Content Overlay */}
            <div className="absolute bottom-4 left-6 right-6 z-10">
              <div className="max-w-4xl">
                <h3 className="text-2xl font-bold text-white bg-gray-900 inline-block px-6 py-3 mb-3 transition-all duration-500 mr-5">
                  {currentProject.title}
                </h3>
                {currentProject.location && (
                  <p className="text-white bg-black bg-opacity-50 inline-block px-4 py-2 mb- text-sm">
                    <FontAwesomeIcon icon={faLocationDot} /> {currentProject.location} | <FontAwesomeIcon icon={faCalendar} /> {currentProject.date_time} | <FontAwesomeIcon icon={faChartArea} /> {currentProject.site_area}
                  </p>
                )}
                <div className="flex justify-between items-end">
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Centered Dots Navigation */}
        <div className="flex justify-center mt-4">
          <div className="flex space-x-3">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-gray-900' : 'bg-gray-400 hover:bg-gray-600'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroProjectReference;