import React from 'react';
import profilePic from './assets/my-picture.jpg';
import './index.css';

export default function App() {
  return (
    <div className="portfolio-layout">
      {/* LEFT FIXED SIDEBAR */}
      <aside className="sidebar">
        <div>
          <div className="sidebar-header">
            <h1>Divya Natekar</h1>
            <h2>Software Engineer Intern (AI/ML) & Spatial Analytics Specialist</h2>
          </div>

          <p className="bio-text">
            I build scalable full-stack applications, spatial simulation decision engines, and real-time AI telemetry pipelines. Currently pursuing my M.S. in Urban Data Science at NYU Tandon.
          </p>

          <div className="role-pills">
            <span className="pill">AI/ML Engineer</span>
            <span className="pill">Full Stack</span>
            <span className="pill">Spatial Data Science</span>
            <span className="pill">Urban AI</span>
          </div>

          <nav className="sidebar-nav">
            <a href="#about">— About</a>
            <a href="#experience">— Experience</a>
            <a href="#skills">— Tech Stack</a>
            <a href="#projects">— Projects & Research</a>
            <a href="#education">— Education</a>
          </nav>
        </div>

        <div className="sidebar-actions">
          <a href="/Divya_Natekar_Resume.pdf" target="_blank" rel="noopener noreferrer" className="btn-sidebar">
            📄 View Resume
          </a>
          <a href="mailto:dyn2009@nyu.edu" className="btn-sidebar">
            ✉️ Contact Me
          </a>
        </div>
      </aside>

      {/* RIGHT SCROLLABLE CONTENT */}
      <main className="main-content">
        
        {/* ABOUT SECTION */}
        <section id="about" className="content-section">
          <h2 className="section-title">About Me</h2>
          <div className="about-card">
            <img src={profilePic} alt="Divya Natekar" className="about-photo" />
            <div className="about-info">
              <p>
                I hold an M.S. in Urban Data Science from <strong>NYU Tandon / CUSP</strong>. My focus lies at the intersection of AI decision models, high-performance web applications, and 3D spatial analytics.
              </p>
            </div>
          </div>
        </section>

        {/* EXPERIENCE SECTION */}
        <section id="experience" className="content-section">
          <h2 className="section-title">Where I've Worked</h2>
          <div className="experience-list">
            
            <div className="exp-card">
              <div className="exp-header">
                <span className="exp-title">Software Engineer Intern (AI/ML) — Lead Engineer</span>
                <span className="exp-period">Aug 2026 – Oct 2026</span>
              </div>
              <div className="exp-company">PM Accelerator — Remote</div>
              <ul>
                <li>Designed Next.js App Router API micro-routes backed by Supabase and PostgreSQL to power a real-time AI personal relationship manager.</li>
                <li>Integrated Langfuse SDK telemetry across Next.js API boundaries to trace LLM execution flows and monitor prompt latency.</li>
                <li>Refactored query logic using ISO timestamp boundary filtering in Supabase to enhance security and query efficiency.</li>
              </ul>
              <div className="tag-list">
                <span className="tag-item">Next.js</span>
                <span className="tag-item">Supabase</span>
                <span className="tag-item">PostgreSQL</span>
                <span className="tag-item">Langfuse</span>
                <span className="tag-item">TypeScript</span>
              </div>
              <div className="link-badge private">
                🔒 Enterprise NDA / Private Repository
              </div>
            </div>

            <div className="exp-card">
              <div className="exp-header">
                <span className="exp-title">Software Development Intern</span>
                <span className="exp-period">Jan 2023 – Jul 2023</span>
              </div>
              <div className="exp-company">L&T Technology Services (LTTS) — Airoli, India</div>
              <ul>
                <li>Built healthcare data components integrating connected wearable devices with the Philips HSDP cloud ecosystem.</li>
                <li>Engineered real-time data ingestion pipelines using Java Spring Boot, Apache Kafka, and Spring Vault.</li>
                <li>Provisioned cloud infrastructure using Terraform and Microsoft Azure.</li>
              </ul>
              <div className="tag-list">
                <span className="tag-item">Java Spring Boot</span>
                <span className="tag-item">Apache Kafka</span>
                <span className="tag-item">Terraform</span>
                <span className="tag-item">Azure</span>
                <span className="tag-item">Postman</span>
              </div>
              <div className="link-badge private">
                🏢 Internal Client Platform (Non-Public Source)
              </div>
            </div>

          </div>
        </section>

        {/* TECH STACK SECTION */}
        <section id="skills" className="content-section">
          <h2 className="section-title">Tech Stack</h2>
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
              <h4>AI / ML & Analytics</h4>
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
                <span className="tag-item">Azure</span>
                <span className="tag-item">Kafka</span>
                <span className="tag-item">Terraform</span>
              </div>
            </div>
          </div>
        </section>

        {/* PROJECTS & RESEARCH SECTION */}
        <section id="projects" className="content-section">
          <h2 className="section-title">Featured Projects & Research</h2>
          <div className="experience-list">

            <div className="exp-card">
              <div className="exp-header">
                <span className="exp-title">Thinking on the Move: Agent-Based Urban Simulation</span>
                <span className="exp-period">Sept 2025 – May 2026</span>
              </div>
              <div className="exp-company">NYU CUSP & Downtown Brooklyn Partnership</div>
              <ul>
                <li>Developed an agent-based simulation framework analyzing urban mobility flows and multi-agent choice behavior.</li>
                <li>Integrated LLMs, spatial interaction methods, and gravity-based preference engines to capture qualitative decision-making.</li>
              </ul>
              <div className="tag-list">
                <span className="tag-item">Agent-Based Modeling</span>
                <span className="tag-item">LLMs</span>
                <span className="tag-item">Spatial Analytics</span>
                <span className="tag-item">Python</span>
              </div>
              <a href="https://github.com/divyanatekar08" target="_blank" rel="noopener noreferrer" className="link-badge">
                🔗 View NYU Research Profile →
              </a>
            </div>

            <div className="exp-card">
              <div className="exp-header">
                <span className="exp-title">Transient Object Removal from Urban LiDAR Point Clouds</span>
                <span className="exp-period">Jun 2025 – Aug 2025</span>
              </div>
              <div className="exp-company">NYU CUSP Summer Guided Research</div>
              <ul>
                <li>Designed RANSAC filtering workflows and spatial clustering to strip transient objects from 3D LiDAR point clouds.</li>
                <li>Awarded NYU Tandon CUSP Experiential Learning Scholarship; presented at Fall Showcase.</li>
              </ul>
              <div className="tag-list">
                <span className="tag-item">3D LiDAR</span>
                <span className="tag-item">RANSAC</span>
                <span className="tag-item">Spatial Clustering</span>
                <span className="tag-item">Point Cloud Processing</span>
              </div>
              <a href="https://github.com/divyanatekar08" target="_blank" rel="noopener noreferrer" className="link-badge">
                🔗 View Research Presentation →
              </a>
            </div>

          </div>
        </section>

        {/* EDUCATION SECTION */}
        <section id="education" className="content-section">
          <h2 className="section-title">Education</h2>
          <div className="exp-card">
            <div className="exp-header">
              <span className="exp-title">M.S. Urban Data Science</span>
              <span className="exp-period">Sept 2024 – May 2026</span>
            </div>
            <div className="exp-company">New York University, Tandon School of Engineering | GPA: 3.61 / 4.0</div>
            <div className="tag-list">
              <span className="tag-item">Machine Learning</span>
              <span className="tag-item">Urban Computing & AI</span>
              <span className="tag-item">Advanced Spatial Analytics</span>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}