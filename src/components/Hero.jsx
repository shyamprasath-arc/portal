import React from 'react';
import { FiGithub, FiLinkedin, FiMail, FiPhone, FiMapPin, FiDownload, FiMessageCircle } from 'react-icons/fi';
import './Hero.css';

const Hero = () => {
  const socialLinks = [
    {
      icon: <FiMail size={20} />,
      href: 'mailto:prasathshyam448@gmail.com',
      label: 'Email',
      ariaLabel: 'Send email to Shyamprasath'
    },
    {
      icon: <FiGithub size={20} />,
      href: 'https://github.com/shyamprasath-arc',
      label: 'GitHub',
      ariaLabel: 'View GitHub profile'
    },
    {
      icon: <FiLinkedin size={20} />,
      href: 'https://www.linkedin.com/in/shyamprasath-p-8b25991b7/',
      label: 'LinkedIn',
      ariaLabel: 'View LinkedIn profile'
    },
    {
      icon: <FiPhone size={20} />,
      href: 'tel:+919655703847',
      label: 'Phone',
      ariaLabel: 'Call Shyamprasath'
    }
  ];

  const scrollToContact = (e) => {
    e.preventDefault();
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero" id="hero">
      {/* Background Elements */}
      <div className="hero-bg">
        <div className="hero-gradient"></div>
        <div className="hero-grid"></div>
      </div>

      <div className="container hero-container">
        <div className="hero-content">
          {/* Location Badge */}
          <div className="hero-location">
            <FiMapPin size={14} />
            <span>Coimbatore, Tamil Nadu</span>
          </div>

          {/* Main Heading */}
          <h1 className="hero-title">
            <span className="hero-greeting">Hello, I&apos;m</span>
            <span className="hero-name">
              Shyamprasath P
              <span className="hero-name-accent"></span>
            </span>
          </h1>

          {/* Title */}
          <h2 className="hero-role">
            Senior Software Engineer
          </h2>

          {/* Tagline */}
          <p className="hero-tagline">
            Building secure, scalable web applications with{' '}
            <span className="text-accent">4+ years of experience</span>
          </p>

          {/* Social Links */}
          <div className="hero-social">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="hero-social-link"
                aria-label={link.ariaLabel}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              >
                {link.icon}
                <span className="sr-only">{link.label}</span>
              </a>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hero-cta">
            <a 
              href="/shyamprasath-p-senior-software-engineer.pdf" 
              className="btn btn-primary"
              download
              aria-label="Download resume PDF"
            >
              <FiDownload size={18} />
              Download Resume
            </a>
            <button 
              onClick={scrollToContact}
              className="btn btn-secondary"
              aria-label="Navigate to contact form"
            >
              <FiMessageCircle size={18} />
              Contact Me
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="hero-stats">
          <div className="stat-item">
            <span className="stat-number">4+</span>
            <span className="stat-label">Years Experience</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <span className="stat-number">10+</span>
            <span className="stat-label">Projects Completed</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <span className="stat-number">5+</span>
            <span className="stat-label">Technologies</span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="scroll-indicator">
        <div className="scroll-mouse">
          <div className="scroll-wheel"></div>
        </div>
        <span>Scroll to explore</span>
      </div>
    </section>
  );
};

export default Hero;
