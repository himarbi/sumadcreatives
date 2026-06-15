import React from 'react';
import './Spinner.css';

const Spinner = ({ size = 'medium', text = 'Loading...' }) => {
  return (
    <div className="spinner-wrapper animate-fade-in">
      <div className={`spinner-circle spinner-${size}`}></div>
      {text && <p className="spinner-text">{text}</p>}
    </div>
  );
};

export default Spinner;
