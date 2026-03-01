import React from 'react';
import { useInView } from 'react-intersection-observer';
import { FiGithub, FiExternalLink, FiCode } from 'react-icons/fi';
import { 
  SiNodedotjs, 
  SiReact, 
  SiPython, 
  SiHtml5,
  SiVercel
} from 'react-icons/si';
import './HobbyProjects.css';

const HobbyProjects = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const projects = [
    {
      id: 'telegram-bot',
      title: 'AI Telegram Chatbot',
      description: 'Real-time message handling with text and image support powered by Gemini AI.',
      tech: [
        { name: 'Node.js', icon: <SiNodedotjs size={16} /> },
        { name: 'Gemini API', icon: <FiCode size={16} /> }
      ],
      github: 'https://github.com/shyamprasath-arc',
      demo: null,
      status: null
    },
    {
      id: 'weather-app',
      title: 'Weather API App',
      description: 'Weather data visualization application with clean, intuitive interface.',
      tech: [
        { name: 'Python', icon: <SiPython size={16} /> },
        { name: 'HTML', icon: <SiHtml5 size={16} /> }
      ],
      github: 'https://github.com/shyamprasath-arc',
      demo: null,
      status: null
    },
    {
      id: 'analytics-sandbox',
      title: 'Privacy First Analytics Sandbox',
      description: 'Privacy-focused analytics dashboard with AI-powered insights using DuckDB.',
      tech: [
        { name: 'Node.js', icon: <SiNodedotjs size={16} /> },
        { name: 'React', icon: <SiReact size={16} /> },
        { name: 'Groq AI', icon: <FiCode size={16} /> },
        { name: 'DuckDB', icon: <FiCode size={16} /> }
      ],
      github: 'https://github.com/shyamprasath-arc',
      demo: 'https://presentation-antigravity.vercel.app/',
      status: null
    },
    {
      id: 'compliance-platform',
      title: 'Compliance Ops Platform',
      description: 'Workflow automation and dashboard for work allocation and status tracking.',
      tech: [
        { name: 'Workflow Automation', icon: <FiCode size={16} /> },
        { name: 'Dashboards', icon: <SiVercel size={16} /> }
      ],
      github: 'https://github.com/shyamprasath-arc',
      demo: null,
      status: 'In Development'
    }
  ];

  return (
    <section className="section section-alt hobby-projects" id="projects" ref={ref}>
      <div className="container">
        <h2 className={`section-title ${inView ? 'animate-fadeInUp' : ''}`}>
          Hobby Projects
        </h2>
        <p className={`section-subtitle ${inView ? 'animate-fadeInUp' : ''}`}>
          Personal projects exploring new technologies and solving interesting problems
        </p>

        <div className="projects-showcase">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`project-showcase-card ${inView ? 'animate-fadeInUp' : ''}`}
              style={{ animationDelay: `${(index + 1) * 0.15}s` }}
            >
              {/* Card Header */}
              <div className="project-showcase-header">
                <div className="project-icon">
                  <FiCode size={24} />
                </div>
                {project.status && (
                  <span className="project-status-badge">{project.status}</span>
                )}
              </div>

              {/* Content */}
              <h3 className="project-showcase-title">{project.title}</h3>
              <p className="project-showcase-description">{project.description}</p>

              {/* Tech Stack */}
              <div className="project-tech-stack">
                {project.tech.map((tech, tIndex) => (
                  <span key={tIndex} className="project-tech-badge">
                    {tech.icon}
                    <span>{tech.name}</span>
                  </span>
                ))}
              </div>

              {/* Actions */}
              <div className="project-actions">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-action-btn project-action-primary"
                  aria-label={`View ${project.title} on GitHub`}
                >
                  <FiGithub size={18} />
                  <span>GitHub</span>
                </a>
                
                {project.demo ? (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-action-btn project-action-secondary"
                    aria-label={`View live demo of ${project.title}`}
                  >
                    <FiExternalLink size={18} />
                    <span>Live Demo</span>
                  </a>
                ) : (
                  <button
                    className="project-action-btn project-action-disabled"
                    disabled
                    aria-label="No live demo available"
                  >
                    <FiExternalLink size={18} />
                    <span>No Demo</span>
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* More Projects CTA */}
        <div className={`more-projects ${inView ? 'animate-fadeInUp' : ''}`}>
          <p>Want to see more of my work?</p>
          <a
            href="https://github.com/shyamprasath-arc"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
          >
            <FiGithub size={18} />
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default HobbyProjects;
