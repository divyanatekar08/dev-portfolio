import React from 'react';
import profilePic from "../assets/my-picture.png";

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <span className="badge">MS Urban Data Science @ NYU Tandon</span>
        <h1>
          Hi, I'm <span className="highlight">Divya Natekar</span> 👋
        </h1>
        <h2>Software Engineer Intern (AI/ML) & Spatial Data Specialist</h2>
        <p className="description">
          I specialize in Urban AI, Agent-Based Mobility Simulation, and Full-Stack Cloud Engineering.
          Bridging LLMs, spatial interaction modeling, and high-performance backend systems to build intelligent decision engines.
        </p>
        <div className="cta-buttons">
          <a href="#projects" className="btn btn-primary">View Projects</a>
          <a href="/Divya_Natekar_Resume.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
            View Resume 📄
          </a>
        </div>
      </div>
      <div className="hero-avatar-wrapper">
        <img src={profilePic} alt="Divya Natekar" className="hero-avatar" />
      </div>
    </section>
  );
}