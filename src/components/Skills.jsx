import React from 'react';
import { useInView } from 'react-intersection-observer';
import { 
  FiServer, 
  FiLayout, 
  FiDatabase, 
  FiShield,
  FiCode,
  FiBox,
  FiLayers,
  FiCpu
} from 'react-icons/fi';
import { 
  SiPhp, 
  SiNodedotjs, 
  SiPython, 
  SiJavascript, 
  SiJquery, 
  SiReact,
  SiMysql,
  SiPostgresql,
  SiRedis,
  SiLinux,
  SiApache
} from 'react-icons/si';
import './Skills.css';

const Skills = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const skillCategories = [
    {
      id: 'backend',
      title: 'Backend Development',
      description: 'Server-side technologies and frameworks',
      icon: <FiServer size={28} />,
      skills: [
        { name: 'PHP', icon: <SiPhp size={18} />, level: 'Expert' },
        { name: 'Node.js', icon: <SiNodedotjs size={18} />, level: 'Advanced' },
        { name: 'Python', icon: <SiPython size={18} />, level: 'Intermediate' }
      ]
    },
    {
      id: 'frontend',
      title: 'Frontend Development',
      description: 'Client-side technologies and UI frameworks',
      icon: <FiLayout size={28} />,
      skills: [
        { name: 'JavaScript', icon: <SiJavascript size={18} />, level: 'Expert' },
        { name: 'jQuery', icon: <SiJquery size={18} />, level: 'Advanced' },
        { name: 'React', icon: <SiReact size={18} />, level: 'Beginner' }
      ]
    },
    {
      id: 'database',
      title: 'Databases',
      description: 'Data storage and management systems',
      icon: <FiDatabase size={28} />,
      skills: [
        { name: 'MySQL', icon: <SiMysql size={18} />, level: 'Expert' },
        { name: 'PostgreSQL', icon: <SiPostgresql size={18} />, level: 'Advanced' },
        { name: 'MariaDB', icon: <FiDatabase size={18} />, level: 'Advanced' },
        { name: 'Redis', icon: <SiRedis size={18} />, level: 'Advanced' }
      ]
    },
    {
      id: 'security',
      title: 'Security & DevOps',
      description: 'Security implementations and infrastructure',
      icon: <FiShield size={28} />,
      skills: [
        { name: 'AES Encryption', icon: <FiShield size={18} />, level: 'Expert' },
        { name: 'JWT Auth', icon: <FiCode size={18} />, level: 'Expert' },
        { name: 'Apache', icon: <SiApache size={18} />, level: 'Advanced' },
        { name: 'Linux', icon: <SiLinux size={18} />, level: 'Advanced' }
      ]
    }
  ];

  const additionalSkills = [
    { name: 'REST APIs', icon: <FiLayers size={16} /> },
    { name: 'Git', icon: <FiBox size={16} /> },
    { name: 'Laravel', icon: <SiPhp size={16} /> },
    { name: 'CI/CD', icon: <FiCpu size={16} /> },
    { name: 'Docker', icon: <FiBox size={16} /> },
    { name: 'Agile', icon: <FiLayers size={16} /> }
  ];

  return (
    <section className="section skills" id="skills" ref={ref}>
      <div className="container">
        <h2 className={`section-title ${inView ? 'animate-fadeInUp' : ''}`}>
          Skills & Expertise
        </h2>
        <p className={`section-subtitle ${inView ? 'animate-fadeInUp' : ''}`}>
          Technologies and tools I use to build secure, scalable applications
        </p>

        {/* Main Skill Categories */}
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div
              key={category.id}
              className={`skill-card ${inView ? 'animate-fadeInUp' : ''}`}
              style={{ animationDelay: `${(index + 1) * 0.1}s` }}
            >
              <div className="skill-card-header">
                <div className="skill-card-icon">
                  {category.icon}
                </div>
                <div className="skill-card-title-group">
                  <h3 className="skill-card-title">{category.title}</h3>
                  <p className="skill-card-description">{category.description}</p>
                </div>
              </div>

              <div className="skill-tags">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="skill-tag"
                    title={`${skill.name} - ${skill.level}`}
                  >
                    <span className="skill-tag-icon">{skill.icon}</span>
                    <span className="skill-tag-name">{skill.name}</span>
                    <span className="skill-tag-level">{skill.level}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills */}
        <div className={`additional-skills ${inView ? 'animate-fadeInUp' : ''}`}>
          <h3 className="additional-skills-title">Additional Expertise</h3>
          <div className="additional-skills-grid">
            {additionalSkills.map((skill, index) => (
              <div key={index} className="additional-skill-badge">
                {skill.icon}
                <span>{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
