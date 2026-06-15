import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import logoImg from '../../assets/logo.png';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  const getLinkClass = ({ isActive }) => 
    `nav-item-link ${isActive ? 'active' : ''}`;

  return (
    <header className="navbar-header">
      <div className="navbar-container container">
        <Link to="/" className="navbar-logo">
          <img src={logoImg} alt="Sumad Creatives Logo" className="logo-icon" />
          <span className="logo-gold">Sumad</span>
          <span className="logo-burgundy">Creatives</span>
        </Link>

        <div className="navbar-right-group">
          <nav className={`navbar-menu ${isOpen ? 'mobile-open' : ''}`}>
            <NavLink to="/" className={getLinkClass} end onClick={() => setIsOpen(false)}>
              Home
            </NavLink>
            <NavLink to="/about" className={getLinkClass} onClick={() => setIsOpen(false)}>
              About
            </NavLink>
            <NavLink to="/services" className={getLinkClass} onClick={() => setIsOpen(false)}>
              Services
            </NavLink>
            <NavLink to="/portfolio" className={getLinkClass} onClick={() => setIsOpen(false)}>
              Portfolio
            </NavLink>
            <NavLink to="/contact" className={getLinkClass} onClick={() => setIsOpen(false)}>
              Contact
            </NavLink>
          </nav>

          {/* Theme Toggle Button */}
          <button onClick={toggleTheme} className="theme-toggle-btn" aria-label="Toggle Dark Mode">
            {theme === 'light' ? '🌙' : '☀️'}
          </button>

          {/* Mobile menu trigger */}
          <button className={`menu-toggle ${isOpen ? 'open' : ''}`} onClick={toggleMenu} aria-label="Toggle Navigation Menu">
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
