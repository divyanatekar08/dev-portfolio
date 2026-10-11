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
          <h2>Software Engineer Intern — AI/ML</h2>
          
          <div className="bio-text">
            <p>SWE (AI/ML) Intern at PM Accelerator</p>
            <p>M.S. Urban Data Science Graduate from NYU CUSP</p>
          </div>

          <p className="bio-text" style={{ marginTop: '1rem' }}>
            Specializing in building scalable full-stack applications, voice-text memo capture engines, LLM telemetry pipelines, and 3D geospatial AI systems.
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
                I am a recent graduate from the Center for Urban Science + Progress (CUSP) at New York University, holding an M.S. in Urban Data Science. My expertise spans Data Science & Analytics, Machine Learning, and Artificial Intelligence, with a strong focus on productionizing intelligent software systems.
              </p>
              <p style={{ marginTop: '0.75rem' }}>
                During my tenure at NYU, I specialized in processing high-dimensional 3D geospatial datasets (LiDAR point clouds) and developing multi-agent simulation frameworks. As a recipient of the prestigious CUSP Experiential Learning Scholarship 2025, I conducted grant-funded research on spatial noise filtering and 3D point cloud classification.
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
                <li>Served as Lead Engineer for <em>YourVillage</em>, an AI-powered personal relationship management platform that delivers contextual nudges based on user interaction history and transcriptions.</li>
                <li>Architected the Voice-Text Memo Capture engine, integrating OpenAI's Whisper model to enable cost-effective, high-accuracy speech-to-text processing for incoming user memos.</li>
                <li>Engineered backend micro-routes and API endpoints connecting core AI ingestion pipelines directly with Supabase and PostgreSQL database layers.</li>
                <li>Designed an automated contact identification module to parse entity references within transcribed memos, cross-referencing seed data to auto-link contacts or prompt new profile creation.</li>
                <li>Enforced strict privacy guardrails by designing copy-paste suggestion workflows, ensuring no user communications are automatically dispatched without explicit user authorization.</li>
              </ul>
              <div className="tag-list">
                <span className="tag-item">Next.js</span>
                <span className="tag-item">Supabase</span>
                <span className="tag-item">PostgreSQL</span>
                <span className="tag-item">Langfuse</span>
                <span className="tag-item">TypeScript</span>
                <span className="tag-item">OpenAI Whisper</span>
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
                <li>Architected backend Java Spring Boot microservices to ingest real-time biometric telemetry from connected wearable medical devices on the Philips HSDP Cloud server.</li>
                <li>Streamed distributed IoT data pipelines using Apache Kafka and designed RESTful endpoints to facilitate high-throughput healthcare data processing.</li>
                <li>Provisioned and managed cloud infrastructure resources across Microsoft Azure using Terraform infrastructure-as-code scripts.</li>
              </ul>
              <div className="tag-list">
                <span className="tag-item">Java Spring Boot</span>
                <span className="tag-item">Apache Kafka</span>
                <span className="tag-item">Terraform</span>
                <span className="tag-item">Microsoft Azure</span>
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
              <div className="tag-list">
                <span className="tag-item">Python</span>
                <span className="tag-item">TypeScript</span>
                <span className="tag-item">Java</span>
                <span className="tag-item">C++</span>
                <span className="tag-item">SQL</span>
              </div>
            </div>
            <div className="tech-box">
              <h4>Data Science & AI/ML</h4>
              <div className="tag-list">
                <span className="tag-item">LLMs</span>
                <span className="tag-item">PyTorch</span>
                <span className="tag-item">TensorFlow</span>
                <span className="tag-item">Langfuse</span>
                <span className="tag-item">3D LiDAR</span>
                <span className="tag-item">RANSAC</span>
              </div>
            </div>
            <div className="tech-box">
              <h4>Full-Stack & Cloud</h4>
              <div className="tag-list">
                <span className="tag-item">Next.js</span>
                <span className="tag-item">React.js</span>
                <span className="tag-item">Spring Boot</span>
                <span className="tag-item">Supabase</span>
                <span className="tag-item">Microsoft Azure</span>
                <span className="tag-item">Apache Kafka</span>
                <span className="tag-item">Terraform</span>
              </div>
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
                <li>Developed an LLM-driven Agent-Based Modeling (ABM) simulation framework as a capstone project to analyze urban mobility patterns and evaluate multi-agent decision-making behaviors.</li>
                <li>Constructed synthetic human personas clustered across 5–7 regional demographics and simulated agent choice dynamics against urban Points of Interest (POIs) to generate spatial behavioral insights.</li>
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
                <li>Processed dense 3D urban LiDAR point clouds capturing the Jay St – Willoughby St intersection in Brooklyn, NY to separate permanent architectural geometry from dynamic environmental noise.</li>
                <li>Designed machine learning filtering pipelines employing RANSAC and spatial clustering algorithms to isolate and strip transient objects (pedestrians, vehicles, moving clutter).</li>
                <li>Awarded the CUSP Experiential Learning Scholarship 2025 to support and present this spatial analytics research.</li>
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
            <div className="tag-list" style={{ marginTop: '0.75rem' }}>
              <span className="tag-item" style={{ background: 'var(--accent-tea-light)', color: 'var(--text-headers)', fontWeight: 700 }}>
                🏆 CUSP Experiential Scholar 2025
              </span>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}