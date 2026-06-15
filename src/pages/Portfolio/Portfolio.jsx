import React, { useState } from 'react';
import { projectsData } from '../../data/projects';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import './Portfolio.css';

const Portfolio = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Categories map to service groupings
  const categories = ['All', 'Video Editing', 'Graphic Design', 'Motion Graphics', 'Web Design', 'Web Development', 'Mobile App Development'];

  // Filter projects by category and search text
  const filteredProjects = projectsData.filter(project => {
    const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory;
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          project.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          project.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="portfolio-page container animate-fade-in">
      <section className="portfolio-header text-center">
        <span className="section-subtitle">Our Work</span>
        <h1 className="section-title">Case Studies & Projects</h1>
        <p className="section-lead">
          Explore our successful collaborations and see how we help businesses convert, grow, and captivate audiences.
        </p>
      </section>

      {/* Search and Category Filter section */}
      <section className="portfolio-filter-search">
        <div className="portfolio-search-box">
          <span className="search-icon">🔍</span>
          <input
            type="text"
            className="portfolio-search-input"
            placeholder="Search projects (e.g. YouTube, Skincare, wallet)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          {searchQuery && (
            <button className="clear-btn" onClick={() => setSearchQuery('')}>×</button>
          )}
        </div>

        <div className="portfolio-categories">
          {categories.map(cat => (
            <button
              key={cat}
              className={`portfolio-cat-btn ${selectedCategory === cat ? 'active' : ''}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Projects Grid */}
      {filteredProjects.length > 0 ? (
        <div className="grid-3 portfolio-grid">
          {filteredProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      ) : (
        <div className="no-results animate-fade-in">
          <div className="no-results-icon">📁</div>
          <h3>No projects found matching your filters.</h3>
          <p>Try clearing your search query or selecting a different category tab.</p>
          <button className="btn-secondary" onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}>
            Reset Filters
          </button>
        </div>
      )}
    </div>
  );
};

export default Portfolio;
