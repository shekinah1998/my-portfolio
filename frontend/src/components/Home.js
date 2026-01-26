import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function Home() {
  return (
    <div className="home-container">
      {/* LEFT SIDE: Text & Navigation */}
      <div className="hero-text">
        <h5 className="sub-header">PORTFOLIO</h5>
        <h1 className="main-header">
          I build <br />
          <span className="serif-italic">Scalable</span> Cloud <br />
          Solutions.
        </h1>
        <p className="description">
          Hi, I'm Shekinah. A Software Engineer specializing in Java Full Stack, AWS, and DevOps.
        </p>
        
        {/* Navigation Buttons */}
        <div className="nav-grid">
          <Link to="/projects" className="nav-card">
            <span>Projects</span> <span>→</span>
          </Link>
          <Link to="/experience" className="nav-card">
            <span>Experience</span> <span>→</span>
          </Link>
          <Link to="/education" className="nav-card">
            <span>Education</span> <span>→</span>
          </Link>
          <Link to="/skills" className="nav-card">
            <span>Skills</span> <span>→</span>
          </Link>
        </div>
      </div>

      {/* RIGHT SIDE: Laptop & Coffee Image */}
      <div className="hero-image-container">
        <img 
          src="/assets/laptop-coffee.png" 
          alt="Workspace with laptop and coffee" 
          className="hero-image"
        />
      </div>
    </div>
  );
}

export default Home;