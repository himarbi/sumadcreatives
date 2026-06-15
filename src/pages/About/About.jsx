import React from 'react';
import teamIbrahim from '../../assets/team_ibrahim.png';
import teamFaduma from '../../assets/team_faduma.png';
import teamAbdirahman from '../../assets/team_abdirahman.png';
import teamLeyla from '../../assets/team_leyla.png';
import './About.css';

const About = () => {
  const teamMembers = [
    {
      name: "Ibrahim Abukar Ahmed",
      role: "Creative Director & Founder",
      bio: "An industry veteran with 12+ years of experience in digital storytelling, video editing, and brand systems.",
      image: teamIbrahim
    },
    {
      name: "Faduma Mohamed",
      role: "Lead UI/UX Designer",
      bio: "Crafts intuitive web and mobile interfaces. Believes that user experience is the heart of digital interaction.",
      image: teamFaduma
    },
    {
      name: "Abdirahman Warsame",
      role: "Principal Frontend Engineer",
      bio: "Specializes in high-performance React and Next.js applications with pixel-perfect responsive execution.",
      image: teamAbdirahman
    },
    {
      name: "Leyla Dahir",
      role: "Lead Animator",
      bio: "Breathes life into static vectors. Master of keyframes, transitions, and character kinematics.",
      image: teamLeyla
    }
  ];

  return (
    <div className="about-page container animate-fade-in">
      {/* Header */}
      <section className="about-header text-center">
        <span className="section-subtitle">Our Journey</span>
        <h1 className="section-title">About Sumad Creatives</h1>
        <p className="section-lead">
          We bridge the gap between imagination and technology, crafting premium digital solutions.
        </p>
      </section>

      {/* Company Story */}
      <section className="story-section grid-2">
        <div className="story-text">
          <h2>Our Story</h2>
          <p>
            Sumad Creatives was founded in 2020 with a simple yet powerful mission: to help companies express their ideas through premium visual designs and custom technical engineering. We realized that many agencies either focused solely on graphics or solely on programming. We chose to combine both.
          </p>
          <p>
            What started as a two-person freelance collective has grown into a multi-disciplinary team of creatives, engineers, and animators. We have partnered with startups and global brands alike, creating customized workflows that produce tangible business outcomes.
          </p>
        </div>
        <div className="story-stats-grid">
          <div className="stat-box">
            <span className="stat-number">5+</span>
            <span className="stat-label">Years of Operation</span>
          </div>
          <div className="stat-box">
            <span className="stat-number">120+</span>
            <span className="stat-label">Projects Completed</span>
          </div>
          <div className="stat-box">
            <span className="stat-number">18+</span>
            <span className="stat-label">Industry Awards</span>
          </div>
          <div className="stat-box">
            <span className="stat-number">30M+</span>
            <span className="stat-label">Video Views Generated</span>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="mission-vision bg-mv-grid">
        <div className="mv-box mission">
          <div className="mv-icon">🎯</div>
          <h3>Our Mission</h3>
          <p>
            To empower companies by developing high-end, responsive websites, engaging motion animations, and bespoke branding guidelines that capture attention, convey value, and drive growth.
          </p>
        </div>
        <div className="mv-box vision">
          <div className="mv-icon">👁️</div>
          <h3>Our Vision</h3>
          <p>
            To be globally recognized as the leading creative agency where artistic design is backed by rigorous software engineering and optimized marketing strategies.
          </p>
        </div>
      </section>

      {/* Team Members */}
      <section className="team-section">
        <div className="section-header text-center">
          <span className="section-subtitle">The Brains</span>
          <h2>Meet Our Team</h2>
          <p className="section-lead">
            A small, highly synchronized team of digital craftsmen dedicated to your brand success.
          </p>
        </div>

        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-card">
              <div className="team-image-wrapper">
                <img src={member.image} alt={member.name} className="team-member-image" />
              </div>
              <h3 className="team-name">{member.name}</h3>
              <span className="team-role">{member.role}</span>
              <p className="team-bio">{member.bio}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
