import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
  return (
    <div className="not-found-page container text-center animate-fade-in">
      <div className="not-found-card">
        <div className="not-found-graphic">404</div>
        <h1 className="not-found-title">Lost in Creative Space</h1>
        <p className="not-found-desc">
          The page you are looking for doesn't exist, has been moved, or is currently under technical development.
        </p>
        <p className="not-found-help">
          Don't worry, even the best creative processes have unexpected turns. Let's redirect you back to safety.
        </p>
        <div className="not-found-actions">
          <Link to="/" className="btn-primary">
            Back to Homepage
          </Link>
          <Link to="/services" className="btn-secondary">
            Our Services
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
