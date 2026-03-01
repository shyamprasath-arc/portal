/**
 * Google Analytics 4 Utility
 * 
 * This file contains helper functions for tracking events in Google Analytics 4.
 * Replace 'G-XXXXXXXXXX' in index.html with your actual GA4 Measurement ID.
 * 
 * Setup Instructions:
 * 1. Go to https://analytics.google.com/
 * 2. Create a new property or use existing one
 * 3. Go to Admin > Data Streams > Web
 * 4. Copy the Measurement ID (starts with G-)
 * 5. Replace 'G-XXXXXXXXXX' in index.html with your ID
 */

/**
 * Track a custom event in Google Analytics
 * @param {string} eventName - Name of the event
 * @param {Object} eventParams - Event parameters
 */
export const trackEvent = (eventName, eventParams = {}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, eventParams);
  }
};

/**
 * Track page views manually (useful for SPAs)
 * @param {string} pagePath - Path of the page
 * @param {string} pageTitle - Title of the page
 */
export const trackPageView = (pagePath, pageTitle) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', 'G-XXXXXXXXXX', {
      page_path: pagePath,
      page_title: pageTitle
    });
  }
};

/**
 * Predefined event tracking helpers
 */

// Track when user downloads resume
export const trackResumeDownload = () => {
  trackEvent('download_resume', {
    event_category: 'engagement',
    event_label: 'resume_pdf'
  });
};

// Track when user clicks on project links
export const trackProjectClick = (projectName, linkType) => {
  trackEvent('click_project_link', {
    event_category: 'engagement',
    event_label: `${projectName}_${linkType}`
  });
};

// Track when user clicks social links
export const trackSocialClick = (platform) => {
  trackEvent('click_social_link', {
    event_category: 'engagement',
    event_label: platform
  });
};

// Track contact form submission
export const trackContactSubmit = (status) => {
  trackEvent('contact_form_submit', {
    event_category: 'engagement',
    event_label: `form_${status}`
  });
};

// Track navigation clicks
export const trackNavigation = (section) => {
  trackEvent('navigate_to_section', {
    event_category: 'navigation',
    event_label: section
  });
};

// Track theme changes
export const trackThemeChange = (theme) => {
  trackEvent('change_theme', {
    event_category: 'preferences',
    event_label: theme
  });
};

export default {
  trackEvent,
  trackPageView,
  trackResumeDownload,
  trackProjectClick,
  trackSocialClick,
  trackContactSubmit,
  trackNavigation,
  trackThemeChange
};
