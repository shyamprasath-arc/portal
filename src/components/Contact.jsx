import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { FiSend, FiCheckCircle, FiAlertCircle, FiMail } from 'react-icons/fi';
import './Contact.css';

const Contact = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Update the FORM_ID below with your actual Formspree form ID
    // Get one at: https://formspree.io/
    const FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID';
    
    setStatus({ submitting: true, submitted: false, error: null });

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message
        })
      });

      if (response.ok) {
        setStatus({ submitting: false, submitted: true, error: null });
        setFormData({ name: '', email: '', message: '' });
        
        // Reset success message after 5 seconds
        setTimeout(() => {
          setStatus(prev => ({ ...prev, submitted: false }));
        }, 5000);
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      setStatus({ 
        submitting: false, 
        submitted: false, 
        error: 'Something went wrong. Please try again or email me directly.' 
      });
    }
  };

  return (
    <section className="section contact" id="contact" ref={ref}>
      <div className="container">
        <h2 className={`section-title ${inView ? 'animate-fadeInUp' : ''}`}>
          Get In Touch
        </h2>
        <p className={`section-subtitle ${inView ? 'animate-fadeInUp' : ''}`}>
          Have a project in mind or want to chat? I&apos;d love to hear from you.
        </p>

        <div className="contact-container">
          {/* Contact Info */}
          <div className={`contact-info ${inView ? 'animate-fadeInUp' : ''}`}>
            <div className="contact-info-card">
              <div className="contact-info-icon">
                <FiMail size={32} />
              </div>
              <h3 className="contact-info-title">Email Me</h3>
              <p className="contact-info-text">
                Prefer email? Reach out directly at{' '}
                <a href="mailto:prasathshyam448@gmail.com" className="contact-email-link">
                  prasathshyam448@gmail.com
                </a>
              </p>
              <p className="contact-info-note">
                I typically respond within 24-48 hours.
              </p>
            </div>

            <div className="contact-privacy-note">
              <FiCheckCircle size={16} />
              <span>Your information is secure and will never be shared.</span>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`contact-form-wrapper ${inView ? 'animate-fadeInUp' : ''}`} style={{ animationDelay: '0.2s' }}>
            <form onSubmit={handleSubmit} className="contact-form">
              {/* Name Field */}
              <div className="form-group">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                  className="form-input"
                  aria-required="true"
                />
              </div>

              {/* Email Field */}
              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your@email.com"
                  className="form-input"
                  aria-required="true"
                />
              </div>

              {/* Message Field */}
              <div className="form-group">
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Tell me about your project..."
                  className="form-textarea"
                  aria-required="true"
                  rows={5}
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="btn btn-primary btn-full"
                disabled={status.submitting}
                aria-label={status.submitting ? 'Sending message...' : 'Send message'}
              >
                {status.submitting ? (
                  <>
                    <span className="loading"></span>
                    Sending...
                  </>
                ) : (
                  <>
                    <FiSend size={18} />
                    Send Message
                  </>
                )}
              </button>

              {/* Status Messages */}
              {status.submitted && (
                <div className="form-status form-status-success" role="alert">
                  <FiCheckCircle size={20} />
                  <span>Message sent successfully! I&apos;ll get back to you soon.</span>
                </div>
              )}

              {status.error && (
                <div className="form-status form-status-error" role="alert">
                  <FiAlertCircle size={20} />
                  <span>{status.error}</span>
                </div>
              )}

              {/* Formspree Note */}
              <p className="form-note">
                <FiCheckCircle size={14} />
                Messages sent securely via Formspree
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
