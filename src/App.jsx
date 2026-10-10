import React from 'react';
import profilePic from './assets/my-picture.jpg';
import resumePdf from '/Divya_Natekar_Resume.pdf';

export default function App() {
  return (
    <div className="portfolio-layout">
      {/* Left Sidebar */}
      <aside className="sidebar">
        <div className="sidebar-header">
          <h1>Divya Natekar</h1>
          <h2>Software Engineer Intern - AI/ML</h2>
          <p className="bio-text">
            I am a recent graduate from the Center for Urban Science + Progress department at New York University. I majored in the Urban Data Science program and have extensive experience across the Data Science & Analytics, Machine Learning, and Artificial Intelligence fields.
          </p>
          <p className="bio-text">
            Currently, I am an SWE (AI/ML) intern at Project Manager Accelerator, specializing in building scalable full-stack applications, voice-text memo capture engines, and LLM telemetry pipelines.
          </p>

          <div className="role-pills">
            <span className="pill">AI/ML Engineer</span>
            <span className="pill">Full Stack</span>
            <span className="pill">Geospatial Data</span>
            <span className="pill">LLM Agents</span>
          </div>
        </div>

        <nav className="sidebar-nav">
          <a href="#about">— ABOUT</a>
          <a href="#experience">— EXPERIENCE</a>
          <a href="#tech-stack">— TECH STACK</a>
          <a href="#projects">— PROJECTS & RESEARCH</a>
          <a href="#education">— EDUCATION</a>
        </nav>

        <div className="sidebar-actions">
          <a href={resumePdf} target="_blank" rel="noopener noreferrer" className="btn-sidebar">
            📄 View Resume
          </a>
          <a href="mailto:dyn2009@nyu.edu" className="btn-sidebar">
            ✉️ Contact Me
          </a>
        </div>
      </aside>

      {/* Right Content Area */}
      <main className="main-content">
        {/* About Section */}
        <section id="about" className="content-section">
          <h3 className="section-title">About Me</h3>
          <div className="about-card">
            <img src={profilePic} alt="Divya Natekar" className="about-photo" />
            <div className="about-info">
              <p>
                During my time at New York University, I worked with 3D geospatial datasets (LiDAR point clouds) and Agent-Based Modeling. I am also a CUSP Experiential 2025 Scholar for pursuing research in LiDAR.
              </p>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="content-section">
          <h3 className="section-title">Where I’ve Worked</h3>
          <div className="experience-list">
            
            {/* PM Accelerator */}
            <div className="exp-card">
              <div className="exp-header">
                <span className="exp-title">Software Engineer Intern (AI/ML) — Lead Engineer</span>
                <span className="exp-period">Aug 2026 – Oct 2026</span>
              </div>
              <div className="exp-company">PM Accelerator — Remote</div>
              <ul>
                <li>Worked as a Lead Engineer for YourVillage, a personal relationship management application that provides users with AI-powered nudges and suggestions remembered from past voice or text transcriptions.</li>
                <li>Engineered suggestions to be copy-paste only, ensuring nothing is transmitted without user approval.</li>
                <li>Built core components for the Voice-Text Memo capture team and connected key backend API endpoints with the Supabase engine.</li>
                <li>Utilized OpenAI’s Whisper model to deliver low-cost, high-accuracy voice-to-text transcription memos.</li>
                <li>Implemented contact identification features to detect referenced individuals in memos from seed data or prompt users to create new contacts.</li>
              </ul>
              <div className="tag-list">
                <span className="tag-item">Next.js</span>
                <span className="tag-item">Supabase</span>
                <span className="tag-item">PostgreSQL</span>
                <span className="tag-item">Langfuse</span>
                <span className="tag-item">TypeScript</span>
              </div>
              <div className="link-badge private">🔒 Company NDA</div>
            </div>

            {/* LTTS */}
            <div className="exp-card">
              <div className="exp-header">
                <span className="exp-title">Software Development Intern</span>
                <span className="exp-period">Jan 2023 – Jul 2023</span>
              </div>
              <div className="exp-company">L&T Technology Services (LTTS) — Airoli, India</div>
              <ul>
                <li>Designed backend components with Java Spring Boot to ingest healthcare data collected from connected wearable devices on the Philips HSDP Cloud server using Apache Kafka and REST APIs.</li>
                <li>Architected and deployed cloud infrastructure components using Microsoft Azure and Terraform.</li>
              </ul>
              <div className="tag-list">
                <span className="tag-item">Java Spring Boot</span>
                <span className="tag-item">Apache Kafka</span>
                <span className="tag-item">Terraform</span>
                <span className="tag-item">Azure</span>
                <span className="tag-item">Postman</span>
              </div>
              <div className="link-badge private">🏢 Internal Client Platform</div>
            </div>

          </div>
        </section>

        {/* Tech Stack Section */}
        <section id="tech-stack" className="content-section">
          <h3 className="section-title">Technical Stack</h3>
          <div className="tech-grid">
            <div className="tech-box">
              <h4>Languages</h4>
              <p>Python, TypeScript, Java, C++, SQL</p>
            </div>
            <div className="tech-box">
              <h4>Data Science & AI/ML</h4>
              <p>LLM, PyTorch, TensorFlow, Langfuse, LiDAR, RANSAC</p>
            </div>
            <div className="tech-box">
              <h4>Full-Stack & Cloud</h4>
              <p>Next.js, React.js, Spring Boot, Supabase, Azure, Kafka, Terraform</p>
            </div>
          </div>
        </section>

        {/* Projects & Research Section */}
        <section id="projects" className="content-section">
          <h3 className="section-title">Featured Projects & Research</h3>
          <div className="experience-list">

            {/* ToM */}
            <div className="exp-card">
              <div className="exp-header">
                <span className="exp-title">Thinking on the Move (ToM): An LLM-Agent Framework for Modeling Urban Consumption Choices from Mobility Traces</span>
                <span className="exp-period">Sept 2025 – May 2026</span>
              </div>
              <div className="exp-company">NYU Center for Urban Science + Progress & Downtown Brooklyn Partnership Group</div>
              <ul>
                <li>Developed an agent-based modeling (ABM) simulation framework as a capstone project to monitor urban mobility flows and multi-agent choice behavior.</li>
                <li>Utilized LLMs to model human personas categorized into regional clusters and developed restaurant POIs monitored through ABM simulation rounds to extract actionable mobility insights.</li>
              </ul>
              <div className="link-badge private">🔒 Company NDA</div>
            </div>

            {/* LiDAR */}
            <div className="exp-card">
              <div className="exp-header">
                <span className="exp-title">Transient Object Removal from Urban LiDAR Point Clouds</span>
                <span className="exp-period">Jun 2025 – Aug 2025</span>
              </div>
              <div className="exp-company">NYU Center for Urban Science + Progress</div>
              <ul>
                <li>Processed LiDAR point cloud datasets of the Jay St – Willoughby St intersection in Brooklyn, NY to isolate dynamic noise from permanent urban structures.</li>
                <li>Applied Machine Learning algorithms such as RANSAC to filter out transient objects (pedestrians, vehicles, birds) from static environment elements.</li>
                <li>Awarded the CUSP Experiential Scholars 2025 grant to support and conduct this research.</li>
              </ul>
              <a href="https://github.com/divyanatekar08" target="_blank" rel="noopener noreferrer" className="link-badge">
                🔗 View GitHub Repository →
              </a>
            </div>

          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="content-section">
          <h3 className="section-title">Education</h3>
          <div className="exp-card">
            <div className="exp-header">
              <span className="exp-title">M.S. in Urban Data Science</span>
              <span className="exp-period">Sept 2024 – May 2026</span>
            </div>
            <div className="exp-company">
              NYU Center for Urban Science + Progress — New York University, Tandon School of Engineering | GPA: 3.61 / 4.0
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}