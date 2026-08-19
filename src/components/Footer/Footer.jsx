import React from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../../assets/logo.png';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-container">
      <div className="footer-content-mega container">
        {/* Top Section - Big CTA Row */}
        <div className="footer-cta-row">
          <div className="cta-left">
            <h2 className="footer-mega-headline">Let's craft something remarkable.</h2>
            <p className="footer-mega-sub">Have an idea? Let's collaborate and build your digital legacy.</p>
          </div>
          <div className="cta-right">
            <Link to="/contact" className="footer-start-btn">
              Start a Project <span className="btn-arrow">→</span>
            </Link>
          </div>
        </div>

        {/* Divider */}
        <hr className="footer-divider" />

        {/* Lower Row - Brand Info, Navigation, and Socials */}
        <div className="footer-navigation-row">
          <div className="nav-brand-col">
            <Link to="/" className="footer-logo">
              <img src={logoImg} alt="Sumad Creatives Logo" className="logo-icon" />
              <span className="logo-gold">Sumad</span>
              <span className="logo-burgundy">Creatives</span>
            </Link>
            <p className="footer-desc-text">
              Crafting premium digital brand guidelines, high-performance web systems, and engaging animations.
            </p>
            {/* Active Status Badge */}
            <div className="active-availability-badge">
              <span className="badge-pulse"></span>
              <span className="badge-label">Available for Q3/Q4 Projects</span>
            </div>
          </div>

          <div className="nav-links-col">
            <h4 className="nav-col-title">Navigation</h4>
            <div className="footer-links-horizontal">
              <Link to="/">Home</Link>
              <Link to="/about">About Us</Link>
              <Link to="/services">Services</Link>
              <Link to="/portfolio">Portfolio</Link>
              <Link to="/contact">Contact</Link>
            </div>
          </div>

          <div className="nav-social-col">
            <h4 className="nav-col-title">Follow Us</h4>
            <div className="footer-social-icons">
              <a href="https://www.linkedin.com" aria-label="LinkedIn" className="social-icon" target="_blank" rel="noreferrer">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a href="https://x.com" aria-label="Twitter" className="social-icon" target="_blank" rel="noreferrer">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a href="https://www.instagram.com" aria-label="Instagram" className="social-icon" target="_blank" rel="noreferrer">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0 3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="https://www.youtube.com" aria-label="YouTube" className="social-icon" target="_blank" rel="noreferrer">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.528 3.545 12 3.545 12 3.545s-7.528 0-9.388.508a3.003 3.003 0 0 0-2.11 2.11C0 8.022 0 12 0 12s0 3.978.502 5.837a3.003 3.003 0 0 0 2.11 2.11c1.86.508 9.388.508 9.388.508s7.528 0 9.388-.508a3.003 3.003 0 0 0 2.11-2.11C24 15.978 24 12 24 12s0-3.978-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright row */}
      <div className="footer-bottom">
        <div className="container footer-bottom-flex">
          <p>&copy; {currentYear} Sumad Creatives. All rights reserved.</p>
          <p>Designed with ❤️ for Digital Excellence</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
