import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Breadcrumb.css';

const Breadcrumb = () => {
  const location = useLocation();
  const { pathname } = location;

  // Split path into segments
  const pathnames = pathname.split('/').filter((x) => x);

  // Capitalize and format text nicely (e.g., 'video-editing' -> 'Video Editing')
  const formatSegment = (str) => {
    return str
      .split('-')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  // If we are on home page, we don't necessarily need extensive breadcrumbs
  // but we will still show the home indicator as specified.
  return (
    <div className="breadcrumb-container container animate-fade-in">
      <nav aria-label="breadcrumb">
        <ul className="breadcrumb-list">
          <li className="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          
          {pathnames.map((value, index) => {
            const last = index === pathnames.length - 1;
            const to = `/${pathnames.slice(0, index + 1).join('/')}`;

            return last ? (
              <li key={to} className="breadcrumb-item active" aria-current="page">
                {formatSegment(value)}
              </li>
            ) : (
              <li key={to} className="breadcrumb-item">
                <Link to={to}>{formatSegment(value)}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default Breadcrumb;
