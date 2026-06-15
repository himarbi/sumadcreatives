import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { servicesData } from '../../data/services';
import ServiceCard from '../../components/ServiceCard/ServiceCard';
import abstractBgImg from '../../assets/abstract_bg.png';
import ytRevampImg from '../../assets/yt_revamp.png';
import skincareDesignImg from '../../assets/skincare_design.png';
import paywiseWalletImg from '../../assets/paywise_wallet.png';
import clientMuna from '../../assets/client_muna.png';
import clientAbdirashid from '../../assets/client_abdirashid.png';
import clientHalima from '../../assets/client_halima.png';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();

  // Pick three services to feature on the homepage
  const featuredServices = servicesData.filter(s => 
    s.slug === 'video-editing' || s.slug === 'web-development' || s.slug === 'motion-graphics'
  );

  const handleConsultationClick = () => {
    navigate('/contact');
  };

  const testimonials = [
    {
      name: "Muna Omar",
      role: "Founder at Sagal Cosmetics",
      quote: "Sumad Creatives completely transformed our cosmetics brand identity. The logo, packaging, and visual guidelines they designed perfectly express our premium values. We couldn't be happier!",
      image: clientMuna
    },
    {
      name: "Abdirashid Ali",
      role: "Tech Content Creator",
      quote: "Working with their video editing team was a game-changer. The retention on my channel shot up by 20% in the first month because of their fast pacing, custom animations, and sound effects.",
      image: clientAbdirashid
    },
    {
      name: "Halima Yusuf",
      role: "Marketing Lead at Global Logistics",
      quote: "Their motion graphics team took an incredibly complex concept about hybrid routing and turned it into an exciting, easy-to-understand animated story. Customer signups increased instantly.",
      image: clientHalima
    }
  ];

  return (
    <div className="home-page animate-fade-in">
      {/* Hero Section */}
      <section className="hero-section text-center">
        {/* Blurry background image with breathe animation */}
        <div className="hero-blur-bg" style={{ backgroundImage: `url(${abstractBgImg})` }}></div>
        {/* Radial Dot Grid Mesh Layer */}
        <div className="hero-grid-mesh"></div>

        <div className="hero-content container">
          <span className="hero-subtitle animate-fade-in">Digital Design & Code Studio</span>
          <h1 className="hero-title-minimal animate-fade-in">
            We shape the future of <span className="highlight-text">design & code.</span>
          </h1>
          <p className="hero-desc-minimal animate-fade-in">
            We craft premium brand identities, secure high-performance web applications, and produce engaging cinematic video edits.
          </p>

          {/* Capability Pills */}
          <div className="hero-capability-pills animate-fade-in">
            <span className="pill-item">🎬 Video Production</span>
            <span className="pill-item">🎨 Brand Systems</span>
            <span className="pill-item">💻 Custom Development</span>
          </div>

          <div className="hero-actions-minimal animate-fade-in">
            <Link to="/services" className="btn-primary">
              Our Services
            </Link>
            <button onClick={handleConsultationClick} className="btn-secondary">
              Get in Touch
            </button>
          </div>

          {/* 3D Perspective Collage Deck */}
          <div className="perspective-deck-container animate-fade-in">
            <div className="perspective-deck">
              {/* Left Card - Video */}
              <div className="deck-card card-left">
                <div className="card-glass-header">
                  <span className="dot red"></span>
                  <span className="dot yellow"></span>
                  <span className="dot green"></span>
                  <span className="card-window-title">cinematic_edit.proj</span>
                </div>
                <div className="card-image-container">
                  <img src={ytRevampImg} alt="Video Editing Showcase" className="deck-card-image" />
                </div>
                <div className="card-glass-footer">
                  <span className="card-category-tag">Video Production</span>
                  <span className="card-metric-badge">+20% Ret.</span>
                </div>
              </div>

              {/* Center Card - Web App */}
              <div className="deck-card card-center">
                <div className="card-glass-header">
                  <span className="dot red"></span>
                  <span className="dot yellow"></span>
                  <span className="dot green"></span>
                  <span className="card-window-title">fintech_wallet.tsx</span>
                </div>
                <div className="card-image-container">
                  <img src={paywiseWalletImg} alt="Web Development Showcase" className="deck-card-image" />
                </div>
                <div className="card-glass-footer">
                  <span className="card-category-tag">Software Development</span>
                  <span className="card-metric-badge">99.8% Vitals</span>
                </div>
              </div>

              {/* Right Card - Design */}
              <div className="deck-card card-right">
                <div className="card-glass-header">
                  <span className="dot red"></span>
                  <span className="dot yellow"></span>
                  <span className="dot green"></span>
                  <span className="card-window-title">brand_identity.design</span>
                </div>
                <div className="card-image-container">
                  <img src={skincareDesignImg} alt="Graphic Design Showcase" className="deck-card-image" />
                </div>
                <div className="card-glass-footer">
                  <span className="card-category-tag">Graphic Design</span>
                  <span className="card-metric-badge">Premium Tier</span>
                </div>
              </div>
            </div>
            
            {/* Ambient Backlight Glow */}
            <div className="deck-ambient-backlight"></div>
          </div>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="intro-section container">
        <div className="intro-grid">
          <div className="intro-text">
            <span className="section-subtitle">Core Philosophy</span>
            <h2 className="section-title">We craft visual stories & code high-performance realities</h2>
            <p className="intro-lead-desc">
              At Sumad Creatives, we believe that the intersection of visual beauty and technical execution is where brands thrive. We don't just build websites, edit videos, or design logos — we design experiences.
            </p>
            
            <div className="intro-highlights">
              <div className="highlight-item-box">
                <span className="highlight-icon-badge">🎨</span>
                <div className="highlight-item-content">
                  <h4>Creative DNA</h4>
                  <p>Custom brand identities and motion videos built without generic cookie-cutter templates.</p>
                </div>
              </div>
              <div className="highlight-item-box">
                <span className="highlight-icon-badge">💻</span>
                <div className="highlight-item-content">
                  <h4>Technical Muscle</h4>
                  <p>Clean, modular React architectures designed to scale effortlessly and load in milliseconds.</p>
                </div>
              </div>
              <div className="highlight-item-box">
                <span className="highlight-icon-badge">⚡</span>
                <div className="highlight-item-content">
                  <h4>Cinematic Pace</h4>
                  <p>Engaging edits, high-fidelity mixing, and storytelling designed to double viewer retention.</p>
                </div>
              </div>
            </div>

            <Link to="/about" className="btn-secondary mt-10">
              Read Our Story <span className="arrow">→</span>
            </Link>
          </div>

          <div className="intro-visual-modern">
            {/* Interactive Glassmorphic Project Dashboard Mockup */}
            <div className="dashboard-mockup">
              <div className="dashboard-header">
                <div className="window-dots">
                  <span className="dot red"></span>
                  <span className="dot yellow"></span>
                  <span className="dot green"></span>
                </div>
                <span className="dashboard-title">sumad_sprint_board</span>
              </div>
              
              <div className="dashboard-body">
                <div className="dashboard-metric-row">
                  <div className="metric-mini-card">
                    <span className="metric-value">6+</span>
                    <span className="metric-label">Divisions</span>
                  </div>
                  <div className="metric-mini-card">
                    <span className="metric-value">99.8%</span>
                    <span className="metric-label">Vitals Score</span>
                  </div>
                </div>

                <div className="sprint-task-list">
                  <div className="sprint-task completed">
                    <span className="task-check">✓</span>
                    <span className="task-name">Branding Strategy & Guidelines</span>
                  </div>
                  <div className="sprint-task active-task">
                    <span className="task-spinner"></span>
                    <span className="task-name">React Codebase Optimization</span>
                  </div>
                  <div className="sprint-task pending">
                    <span className="task-bullet">○</span>
                    <span className="task-name">Cinematic Sound Mix & Render</span>
                  </div>
                </div>
              </div>

              {/* Floating Active Badge */}
              <div className="floating-sprint-badge">
                <span className="pulse-indicator"></span>
                <span className="badge-text">⚡ Agency Pulse: 12 Active Sprints</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="featured-section bg-alt">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-subtitle">What We Do Best</span>
            <h2 className="section-title">Featured Services</h2>
            <p className="section-lead">
              Discover how we can elevate your brand with our highly specialized service divisions.
            </p>
          </div>

          <div className="grid-3">
            {featuredServices.map(service => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>

          <div className="text-center mt-50">
            <Link to="/services" className="btn-primary">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-section container">
        <div className="section-header text-center">
          <span className="section-subtitle">Our Advantages</span>
          <h2 className="section-title">Why Choose Sumad Creatives?</h2>
          <p className="section-lead">
            We deliver result-oriented design and development solutions built upon solid engineering principles.
          </p>
        </div>

        <div className="why-grid">
          <div className="why-item">
            <div className="why-icon">💡</div>
            <h3 className="why-title">Bold Creativity</h3>
            <p className="why-desc">We avoid cookie-cutter designs and develop unique visual experiences tailored exactly to your brand ethos.</p>
          </div>
          <div className="why-item">
            <div className="why-icon">⚡</div>
            <h3 className="why-title">High Performance</h3>
            <p className="why-desc">We build fast-loading websites and responsive code systems optimized for speed, search engines, and UX.</p>
          </div>
          <div className="why-item">
            <div className="why-icon">🤝</div>
            <h3 className="why-title">Collaborative Style</h3>
            <p className="why-desc">You are kept in the loop at every stage, from low-fidelity wireframes to full production releases.</p>
          </div>
          <div className="why-item">
            <div className="why-icon">📈</div>
            <h3 className="why-title">Results Driven</h3>
            <p className="why-desc">We design layouts focused on boosting conversion rates, user engagement, and client revenue growth.</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials-section bg-alt">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-subtitle">Client Love</span>
            <h2 className="section-title">What Our Clients Say</h2>
          </div>

          <div className="grid-3">
            {testimonials.map((t, i) => (
              <div key={i} className="testimonial-card">
                <div className="testimonial-quote-icon">“</div>
                <p className="testimonial-quote">{t.quote}</p>
                <div className="testimonial-author">
                  <div className="author-image-wrapper">
                    <img src={t.image} alt={t.name} className="author-client-image" />
                  </div>
                  <div className="author-info">
                    <h4 className="author-name">{t.name}</h4>
                    <span className="author-role">{t.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-banner-section container">
        <div className="cta-banner">
          <h2 className="cta-banner-title">Ready to bring your ideas to life?</h2>
          <p className="cta-banner-text">
            Let's collaborate on your next design concept, video campaign, or custom software project.
          </p>
          <Link to="/contact" className="btn-primary btn-cta">
            Start Your Project Today
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
