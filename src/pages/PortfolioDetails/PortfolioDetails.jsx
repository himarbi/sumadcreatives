import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { projectsData } from '../../data/projects';
import './PortfolioDetails.css';

const PortfolioDetails = () => {
  const { projectId } = useParams();

  // Find project details matching the ID
  const project = projectsData.find(p => p.id === projectId);

  // If project is not found, display a descriptive error state
  if (!project) {
    return (
      <div className="portfolio-details-error container text-center animate-fade-in">
        <div className="error-icon">⚠️</div>
        <h2>Project Case Study Not Found</h2>
        <p>We couldn't locate a case study with project ID: "<strong>{projectId}</strong>". It might have been modified or archived.</p>
        <div className="error-actions">
          <Link to="/portfolio" className="btn-primary">
            Back to Portfolio
          </Link>
        </div>
      </div>
    );
  }

  const { title, category, description, client, challenge, solution, result, image } = project;

  return (
    <div className="portfolio-details-page container animate-fade-in">
      {/* Navigation Return */}
      <Link to="/portfolio" className="back-link">
        ← Back to Portfolio
      </Link>

      {/* Hero card showing project cover style */}
      <section className="project-details-hero" style={{ backgroundImage: `url(${image})` }}>
        <div className="project-hero-overlay">
          <span className="project-hero-category">{category}</span>
          <h1 className="project-hero-title">{title}</h1>
          <p className="project-hero-desc">{description}</p>
        </div>
      </section>

      {/* Meta Specs block */}
      <section className="project-meta-grid">
        <div className="meta-item">
          <span className="meta-label">Client Name</span>
          <span className="meta-val">{client}</span>
        </div>
        <div className="meta-item">
          <span className="meta-label">Project Classification</span>
          <span className="meta-val">{category}</span>
        </div>
        <div className="meta-item">
          <span className="meta-label">Agency Role</span>
          <span className="meta-val">Design & Implementation</span>
        </div>
      </section>

      {/* Main Study breakdowns */}
      <div className="study-content-grid">
        <div className="study-box challenge-box">
          <div className="study-icon-bubble">🚨</div>
          <h3>The Challenge</h3>
          <p>{challenge}</p>
        </div>

        <div className="study-box solution-box">
          <div className="study-icon-bubble">💡</div>
          <h3>Our Solution</h3>
          <p>{solution}</p>
        </div>

        <div className="study-box result-box">
          <div className="study-icon-bubble">📈</div>
          <h3>The Results</h3>
          <p className="result-metric">{result}</p>
        </div>
      </div>

      {/* Footer CTA */}
      <section className="portfolio-details-footer text-center">
        <h2>Want similar growth outcomes for your business?</h2>
        <p>Let's custom build a strategy matching your specifications.</p>
        <Link to="/contact" className="btn-primary">
          Let's Work Together
        </Link>
      </section>
    </div>
  );
};

export default PortfolioDetails;
