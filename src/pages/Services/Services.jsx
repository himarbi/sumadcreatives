import React, { useState } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import { servicesData } from '../../data/services';
import ServiceCard from '../../components/ServiceCard/ServiceCard';
import './Services.css';

const Services = () => {
  const { serviceSlug } = useParams();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('All');

  // If a child slug is active, render Outlet to display the ServiceDetails page
  if (serviceSlug) {
    return <Outlet />;
  }

  // Categories map to services for filtering
  // Grouping mapping:
  // - Video: Video Editing, Motion Graphics
  // - Design: Graphic Design, Web Design
  // - Development: Web Development, Mobile App Development
  const filterGroup = (service, filter) => {
    if (filter === 'All') return true;
    if (filter === 'Design') {
      return service.slug === 'graphic-design' || service.slug === 'web-design';
    }
    if (filter === 'Development') {
      return service.slug === 'web-development' || service.slug === 'app-development';
    }
    if (filter === 'Video') {
      return service.slug === 'video-editing' || service.slug === 'motion-graphics';
    }
    return true;
  };

  // Filter services by category and search query
  const filteredServices = servicesData.filter(service => {
    const matchesFilter = filterGroup(service, selectedFilter);
    const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          service.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="services-page container animate-fade-in">
      <section className="services-header text-center">
        <span className="section-subtitle">Divisions of Excellence</span>
        <h1 className="section-title">Our Digital Services</h1>
        <p className="section-lead">
          From concept to completion, we deliver cohesive design layouts, visual edits, and production-ready applications.
        </p>
      </section>

      {/* Search & Filter Bar */}
      <section className="filter-search-container">
        <div className="search-bar-wrapper">
          <span className="search-icon">🔍</span>
          <input
            type="text"
            className="search-input"
            placeholder="Search services (e.g. React, logo, video)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          {searchQuery && (
            <button className="clear-btn" onClick={() => setSearchQuery('')}>×</button>
          )}
        </div>

        <div className="filter-buttons">
          {['All', 'Video', 'Design', 'Development'].map(category => (
            <button
              key={category}
              className={`filter-btn ${selectedFilter === category ? 'active' : ''}`}
              onClick={() => setSelectedFilter(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* Services Grid */}
      {filteredServices.length > 0 ? (
        <div className="grid-3 services-grid">
          {filteredServices.map(service => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      ) : (
        <div className="no-results animate-fade-in">
          <div className="no-results-icon">📂</div>
          <h3>No services match your search criteria.</h3>
          <p>Try checking your spelling or selecting a different filter category.</p>
          <button className="btn-secondary" onClick={() => { setSearchQuery(''); setSelectedFilter('All'); }}>
            Reset Filters
          </button>
        </div>
      )}
    </div>
  );
};

export default Services;
