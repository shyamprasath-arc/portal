import React from 'react';
import { useInView } from 'react-intersection-observer';
import { FiBriefcase, FiCalendar, FiMapPin, FiCheckCircle } from 'react-icons/fi';
import './Experience.css';

const Experience = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const experiences = [
    {
      id: 'mindzen',
      company: 'Mindzen India Pvt Ltd',
      role: 'Senior Software Engineer',
      location: 'Coimbatore, Tamil Nadu',
      period: 'Present',
      type: 'Full-time',
      projects: [
        {
          name: 'Mzapp Insurance Broking Suite',
          description: 'Integrated multiple data sources and databases into unified system for streamlined operations.',
          achievements: [
            'Integrated multiple data sources and databases into unified system',
            'Implemented AES encryption and JWT authentication for enhanced security',
            'Enhanced system capabilities based on evolving client requirements'
          ]
        },
        {
          name: 'Eportal & HRportal',
          description: 'Employee portal and HR management system with secure authentication and caching.',
          achievements: [
            'Developed REST APIs for Angular frontend consumption',
            'Implemented JWT authentication and Redis Cache for concurrent logins',
            'Applied service-level encryption and secure coding practices'
          ]
        },
        {
          name: 'Laravel Business Application',
          description: 'Short-term project focused on optimizing legacy Laravel application.',
          achievements: [
            'Optimized database queries to reduce response times',
            'Modified business logic for evolving client needs',
            'Debugged and resolved application bugs for stability'
          ]
        }
      ]
    }
  ];

  return (
    <section className="section experience" id="experience" ref={ref}>
      <div className="container">
        <h2 className={`section-title ${inView ? 'animate-fadeInUp' : ''}`}>
          Professional Experience
        </h2>
        <p className={`section-subtitle ${inView ? 'animate-fadeInUp' : ''}`}>
          My journey as a Senior Software Engineer building enterprise solutions
        </p>

        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className={`experience-card ${inView ? 'animate-fadeInUp' : ''}`}
              style={{ animationDelay: `${(index + 1) * 0.15}s` }}
            >
              {/* Company Header */}
              <div className="experience-header">
                <div className="experience-company-badge">
                  <FiBriefcase size={24} />
                </div>
                <div className="experience-header-content">
                  <h3 className="experience-role">{exp.role}</h3>
                  <div className="experience-company">{exp.company}</div>
                  <div className="experience-meta">
                    <span className="experience-meta-item">
                      <FiCalendar size={14} />
                      {exp.period}
                    </span>
                    <span className="experience-meta-divider">•</span>
                    <span className="experience-meta-item">
                      <FiMapPin size={14} />
                      {exp.location}
                    </span>
                    <span className="experience-meta-divider">•</span>
                    <span className="experience-badge">{exp.type}</span>
                  </div>
                </div>
              </div>

              {/* Projects */}
              <div className="experience-projects">
                <h4 className="experience-projects-title">Key Projects</h4>
                <div className="projects-grid">
                  {exp.projects.map((project, pIndex) => (
                    <div
                      key={pIndex}
                      className="project-card"
                    >
                      <div className="project-card-header">
                        <h5 className="project-name">{project.name}</h5>
                      </div>
                      <p className="project-description">{project.description}</p>
                      <ul className="project-achievements">
                        {project.achievements.map((achievement, aIndex) => (
                          <li key={aIndex} className="achievement-item">
                            <FiCheckCircle size={16} className="achievement-icon" />
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
