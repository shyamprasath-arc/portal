import React from 'react';
import { FiHeart, FiGithub, FiCode } from 'react-icons/fi';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* Main Footer */}
          <div className="footer-main">
            <div className="footer-brand">
              <span className="footer-logo">SP</span>
              <p className="footer-tagline">
                Building secure, scalable web applications
              </p>
            </div>

            <div className="footer-links">
              <a href="#skills" className="footer-link">Skills</a>
              <a href="#experience" className="footer-link">Experience</a>
              <a href="#projects" className="footer-link">Projects</a>
              <a href="#contact" className="footer-link">Contact</a>
            </div>
          </div>

          {/* Divider */}
          <div className="footer-divider"></div>

          {/* Footer Bottom */}
          <div className="footer-bottom">
            <p className="footer-copyright">
              © {currentYear} Shyamprasath P. All rights reserved.
            </p>

            <div className="footer-meta">
              <span className="footer-built-with">
                <FiCode size={14} />
                Built with React + GitHub Pages
              </span>
              
              <span className="footer-badge" title="Built with AI assistance">
                <FiHeart size={12} />
                Vibe-coded
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
