import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ProjectCard.css';

const ProjectCard = ({ project }) => {
  const navigate = useNavigate();
  const { id, title, category, shortDescription, image } = project;

  const handleViewDetails = () => {
    // Navigate programmatically to the portfolio details route
    navigate(`/portfolio/${id}`);
  };

  return (
    <div className="project-card animate-fade-in">
      <div className="project-card-image" style={{ backgroundImage: `url(${image})` }}>
        <span className="project-card-category">{category}</span>
      </div>
      
      <div className="project-card-content">
        <h3 className="project-card-title">{title}</h3>
        <p className="project-card-desc">{shortDescription}</p>
        <button onClick={handleViewDetails} className="project-card-btn">
          View Case Study <span className="arrow">→</span>
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
