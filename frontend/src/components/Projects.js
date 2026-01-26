import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/api/projects')
      .then(res => res.json())
      .then(data => setProjects(data));
  }, []);

  return (
    <div className="page-container">
      <div className="page-header">
        <Link to="/" className="back-link">← Home</Link>
        <h1>Selected Works</h1>
      </div>
      <div className="project-grid">
        {projects.map((p, index) => (
          <div key={index} className="project-card">
            <img src={p.imageUrl} alt={p.title} className="project-img" />
            <div className="project-info">
              <h3>{p.title}</h3>
              <p>{p.description}</p>
              <a href={p.projectUrl} target="_blank" rel="noreferrer" className="project-link">View Code →</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Projects;