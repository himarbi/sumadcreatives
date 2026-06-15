import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ServiceCard.css';

const ServiceCard = ({ service }) => {
  const navigate = useNavigate();
  const { slug, title, icon, description } = service;

  const handleLearnMore = () => {
    // Navigate programmatically to the service details route
    navigate(`/services/${slug}`);
  };

  return (
    <div className="service-card animate-fade-in">
      <div className="service-card-icon">{icon}</div>
      <h3 className="service-card-title">{title}</h3>
      <p className="service-card-desc">{description}</p>
      <button onClick={handleLearnMore} className="service-card-btn">
        Learn More <span className="arrow">→</span>
      </button>
    </div>
  );
};

export default ServiceCard;
