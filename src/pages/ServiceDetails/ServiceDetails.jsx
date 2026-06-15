import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { servicesData } from '../../data/services';
import './ServiceDetails.css';

const ServiceDetails = () => {
  const { serviceSlug } = useParams();
  const navigate = useNavigate();

  // Find corresponding service
  const service = servicesData.find(s => s.slug === serviceSlug);

  // If service is not found, render a clean error state
  if (!service) {
    return (
      <div className="service-details-error container text-center animate-fade-in">
        <div className="error-icon">⚠️</div>
        <h2>Service Not Found</h2>
        <p>We couldn't find the service with slug: "<strong>{serviceSlug}</strong>". It might have been renamed or removed.</p>
        <div className="error-actions">
          <Link to="/services" className="btn-primary">
            View All Services
          </Link>
        </div>
      </div>
    );
  }

  const { title, icon, longDescription, benefits, process, ctaText } = service;

  const handleInquire = () => {
    // Navigate programmatically to contact with a query or just direct
    navigate('/contact', { state: { serviceWanted: title } });
  };

  return (
    <div className="service-details-page container animate-fade-in">
      {/* Back button */}
      <Link to="/services" className="back-link">
        ← Back to Services
      </Link>

      {/* Header and Hero details */}
      <section className="details-hero">
        <div className="details-hero-text">
          <div className="details-icon-badge">{icon}</div>
          <h1 className="details-title">{title}</h1>
          <p className="details-long-desc">{longDescription}</p>
          <button onClick={handleInquire} className="btn-primary mt-10">
            {ctaText} <span className="arrow">→</span>
          </button>
        </div>
      </section>

      {/* Grid of benefits & process */}
      <div className="details-grid-layout">
        {/* Benefits Section */}
        <section className="details-section-box benefits-box">
          <h2 className="box-title">Key Benefits & Outcomes</h2>
          <ul className="benefits-list-styled">
            {benefits.map((benefit, index) => (
              <li key={index} className="benefit-item-styled">
                <span className="check-icon">✓</span>
                <span className="benefit-text">{benefit}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Process Section */}
        <section className="details-section-box process-box">
          <h2 className="box-title">Our Working Process</h2>
          <div className="process-timeline">
            {process.map((stepItem, index) => (
              <div key={index} className="timeline-step">
                <div className="step-number-bubble">{stepItem.step}</div>
                <div className="step-content">
                  <h4 className="step-title">{stepItem.title}</h4>
                  <p className="step-desc">{stepItem.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* CTA Box */}
      <section className="service-cta-footer">
        <h3>Have a project in mind for {title}?</h3>
        <p>Let's map out your specifications and create a custom quote tailored for your timeline.</p>
        <button onClick={handleInquire} className="btn-primary btn-cta">
          Request a Quote
        </button>
      </section>
    </div>
  );
};

export default ServiceDetails;
