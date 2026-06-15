import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Spinner from '../../components/Spinner/Spinner';
import './Contact.css';

const Contact = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Form states
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceWanted: 'General Inquiry',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Check if a specific service inquiry was forwarded via router state
  useEffect(() => {
    if (location.state && location.state.serviceWanted) {
      setFormData(prev => ({
        ...prev,
        serviceWanted: location.state.serviceWanted
      }));
    }
  }, [location.state]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear field-specific error as they type
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  // Basic validation rules
  const validateForm = () => {
    const tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = 'Full Name is required.';
    
    if (!formData.email.trim()) {
      tempErrors.email = 'Email address is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Please enter a valid email address.';
    }
    
    if (!formData.phone.trim()) {
      tempErrors.phone = 'Phone number is required.';
    } else if (!/^\+?[0-9\s-]{7,18}$/.test(formData.phone)) {
      tempErrors.phone = 'Please enter a valid phone number.';
    }
    
    if (!formData.message.trim()) {
      tempErrors.message = 'Inquiry message cannot be empty.';
    } else if (formData.message.trim().length < 10) {
      tempErrors.message = 'Message must be at least 10 characters long.';
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate async submission (e.g. API request) for 2 seconds
    setTimeout(() => {
      setIsSubmitting(false);
      // Navigate programmatically to thank-you route after success
      navigate('/thank-you');
    }, 2000);
  };

  if (isSubmitting) {
    return (
      <div className="contact-submitting-wrapper container text-center">
        <Spinner size="large" text="Sending your inquiry to Sumad Creatives..." />
      </div>
    );
  }

  return (
    <div className="contact-page container animate-fade-in">
      <section className="contact-header text-center">
        <span className="section-subtitle">Get in Touch</span>
        <h1 className="section-title">Let's Create Together</h1>
        <p className="section-lead">
          Have an inquiry, project proposal, or design brief? Send us a message and we'll reply within 24 hours.
        </p>
      </section>

      <div className="contact-grid">
        {/* Contact Info block */}
        <section className="contact-info-panel">
          <h2>Agency Hub</h2>
          <p className="panel-desc">We are always excited to discuss branding visual identities, video timelines, or website development requirements.</p>
          
          <div className="contact-cards-list">
            <div className="info-detail-card">
              <span className="card-icon">✉️</span>
              <div className="card-text">
                <h4>Email Inquiries</h4>
                <p>hello@sumadcreatives.com</p>
              </div>
            </div>
            
            <div className="info-detail-card">
              <span className="card-icon">📞</span>
              <div className="card-text">
                <h4>Phone Consultation</h4>
                <p>+252 61 234 5678</p>
              </div>
            </div>
            
            <div className="info-detail-card">
              <span className="card-icon">📍</span>
              <div className="card-text">
                <h4>Main Office</h4>
                <p>Maka Al-Mukarama Road, Hodan, Mogadishu, Somalia</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form block */}
        <section className="contact-form-panel">
          <form onSubmit={handleSubmit} noValidate>
            <div className="form-row-2col">
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className={`form-control ${errors.name ? 'input-error' : ''}`}
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                />
                {errors.name && <span className="error-message-text">{errors.name}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className={`form-control ${errors.email ? 'input-error' : ''}`}
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                />
                {errors.email && <span className="error-message-text">{errors.email}</span>}
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className={`form-control ${errors.phone ? 'input-error' : ''}`}
                value={formData.phone}
                onChange={handleChange}
                placeholder="+252 61 0000000"
              />
              {errors.phone && <span className="error-message-text">{errors.phone}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="serviceWanted">Interested Service</label>
              <select
                id="serviceWanted"
                name="serviceWanted"
                className="form-control"
                value={formData.serviceWanted}
                onChange={handleChange}
              >
                <option value="General Inquiry">General Inquiry</option>
                <option value="Video Editing">Video Editing</option>
                <option value="Graphic Design">Graphic Design</option>
                <option value="Motion Graphics">Motion Graphics</option>
                <option value="Web Design">Web Design</option>
                <option value="Web Development">Web Development</option>
                <option value="Mobile App Development">Mobile App Development</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="message">Your Message</label>
              <textarea
                id="message"
                name="message"
                className={`form-control ${errors.message ? 'input-error' : ''}`}
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your project timeline and specifications..."
                rows="5"
              ></textarea>
              {errors.message && <span className="error-message-text">{errors.message}</span>}
            </div>

            <button type="submit" className="btn-primary form-submit-btn">
              Send Inquiry
            </button>
          </form>
        </section>
      </div>
    </div>
  );
};

export default Contact;
