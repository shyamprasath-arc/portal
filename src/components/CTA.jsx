import React from 'react';
import { useInView } from 'react-intersection-observer';
import { FiDownload, FiMessageCircle, FiGithub, FiLinkedin } from 'react-icons/fi';
import './CTA.css';

const CTA = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <section className="cta-section" ref={ref}>
      <div className="container">
        <div className={`cta-container ${inView ? 'animate-fadeInUp' : ''}`}>
          {/* Background Gradient */}
          <div className="cta-bg-gradient"></div>
          
          <div className="cta-content">
            <h2 className="cta-title">
              Let&apos;s Work Together
            </h2>
            <p className="cta-description">
              I&apos;m always interested in hearing about new projects and opportunities. 
              Whether you have a question or just want to say hi, feel free to reach out!
            </p>

            {/* Primary Actions */}
            <div className="cta-actions">
              <a 
                href="/resume.pdf" 
                className="btn btn-primary btn-large"
                download
                aria-label="Download resume PDF"
              >
                <FiDownload size={20} />
                Download Resume
              </a>
              
              <a 
                href="#contact" 
                className="btn btn-secondary btn-large"
                aria-label="Navigate to contact form"
              >
                <FiMessageCircle size={20} />
                Contact Me
              </a>
            </div>

            {/* Social Follow */}
            <div className="cta-social">
              <span className="cta-social-label">Or find me on:</span>
              <div className="cta-social-links">
                <a
                  href="https://github.com/shyamprasath-arc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta-social-link"
                  aria-label="Follow on GitHub"
                >
                  <FiGithub size={20} />
                  <span>GitHub</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/shyamprasath-p-8b25991b7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta-social-link"
                  aria-label="Connect on LinkedIn"
                >
                  <FiLinkedin size={20} />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
