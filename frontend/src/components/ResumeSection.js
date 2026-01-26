import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

// --- IMAGES FOR CAROUSEL (Experience Page) ---
const carouselImages = [
  "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200", // Coding / Laptop
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200", // Corporate Building (Capgemini Vibe)
  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200", // Teamwork / Internship
  "https://images.unsplash.com/photo-1504384308090-c54be3855833?q=80&w=1200"  // Tech Office
];

// --- IMAGES FOR CARDS ---
const eduImages = {
  "Campbellsville University": "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=600",
  "Jawaharlal Nehru Technological University": "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=600"
};

const skillImages = {
  "Cloud": "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=600",
  "DevOps": "/assets/devops.png",
  "Monitoring": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600",
  "Languages / Frameworks": "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=600",
  "Databases / Tools": "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?q=80&w=600"
};

function getSkillImage(name) {
  const lower = name.toLowerCase();
  if (lower.includes('cloud')) return skillImages["Cloud"];
  if (lower.includes('devops')) return skillImages["DevOps"];
  if (lower.includes('monitor')) return skillImages["Monitoring"];
  if (lower.includes('language')) return skillImages["Languages / Frameworks"];
  return skillImages["Databases / Tools"];
}

function ResumeSection({ section }) {
  const [data, setData] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    fetch('http://localhost:8080/api/resume')
      .then(res => res.json())
      .then(result => setData(result));
  }, []);

  // --- CAROUSEL LOGIC ---
  useEffect(() => {
    if (section === 'experience') {
      const interval = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % carouselImages.length);
      }, 4000); // Change image every 4 seconds
      return () => clearInterval(interval);
    }
  }, [section]);

  if (!data) return <div className="loading">Loading...</div>;

  return (
    <div className="page-container">
      
      {/* --- CAROUSEL (Only for Experience Page) --- */}
      {section === 'experience' && (
        <div className="carousel-container">
          {carouselImages.map((img, index) => (
            <img 
              key={index}
              src={img} 
              alt="Experience Slide" 
              className={`carousel-slide ${index === currentImageIndex ? "active" : ""}`}
            />
          ))}
          <div className="carousel-overlay">
            <h1>PROFESSIONAL EXPERIENCE</h1>
          </div>
        </div>
      )}

      {/* Standard Header for other pages */}
      {section !== 'experience' && <h1 className="page-title">{section.toUpperCase()}</h1>}
      
      {/* --- EXPERIENCE SECTION (Cards) --- */}
      {section === 'experience' && (
        <div className="experience-grid">
          {data.experience.map((job, i) => (
            <div key={i} className="experience-card">
              <div className="exp-header">
                <h3>{job.company}</h3>
                <span className="exp-role">{job.role}</span>
                <span className="exp-duration">{job.duration}</span>
              </div>
              <ul className="exp-details">
                {job.details.map((d, j) => <li key={j}>{d}</li>)}
              </ul>
            </div>
          ))}
        </div>
      )}

      {/* --- EDUCATION SECTION --- */}
      {section === 'education' && (
        <div className="project-grid">
          {data.education.map((edu, index) => (
            <div key={index} className="edu-card">
              <img 
                src={eduImages[edu.school] || "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=600"} 
                alt={edu.school} 
                className="edu-img"
              />
              <div className="edu-content">
                <h3 className="edu-title">{edu.school}</h3>
                <h4 style={{color: 'var(--accent)', marginBottom: '10px'}}>{edu.degree}</h4>
                <p className="edu-desc">{edu.year}</p>
                {edu.gpa && <p className="edu-desc">GPA: {edu.gpa}</p>}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* --- SKILLS SECTION --- */}
      {section === 'skills' && (
        <div className="skills-grid">
          {data.skills.map((skill, index) => (
            <div key={index} className="skill-card">
              <div className="skill-img-container">
                <img src={getSkillImage(skill.category)} alt={skill.category} className="skill-img"/>
              </div>
              <div className="skill-content">
                <h3 className="skill-title">{skill.category}</h3>
                <ul className="skill-list">
                  {skill.items.split(',').map((item, i) => <li key={i}>{item.trim()}</li>)}
                </ul>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ResumeSection;