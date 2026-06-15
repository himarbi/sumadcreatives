import React from 'react';
import { Link } from 'react-router-dom';
import './ThankYou.css';

const ThankYou = () => {
  return (
    <div className="thank-you-page container text-center animate-fade-in">
      <div className="thank-you-card">
        <div className="success-icon-badge">✓</div>
        <h1 className="thank-you-title">Thank You!</h1>
        <p className="thank-you-desc">
          Your inquiry has been successfully sent to the team at <strong>Sumad Creatives</strong>. We have received your specifications and will review them shortly.
        </p>
        <p className="thank-you-lead-time">
          One of our creative project managers will reach out to you via email within 24 business hours.
        </p>
        <div className="thank-you-actions">
          <Link to="/" className="btn-primary">
            Return to Home
          </Link>
          <Link to="/portfolio" className="btn-secondary">
            Browse Our Portfolio
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
