import React from 'react';

const projects = [
  {
    title: "Thinking on the Move: Agent-Based Urban Simulation",
    subtitle: "NYU CUSP & Downtown Brooklyn Partnership",
    description: "Developed an agent-based simulation framework modeling urban mobility flows and multi-agent choice behavior using LLMs, spatial interaction methods, and gravity preference engines.",
    tags: ["Python", "LLMs", "Agent-Based Modeling", "Spatial Analytics"],
    link: "https://github.com/divyanatekar08"
  },
  {
    title: "AI Personal Relationship Manager API Engine",
    subtitle: "PM Accelerator",
    description: "Architected Next.js App Router API micro-routes backed by Supabase and PostgreSQL. Integrated Langfuse SDK telemetry for real-time LLM execution tracing and prompt evaluation pipelines.",
    tags: ["Next.js", "Supabase", "PostgreSQL", "Langfuse", "TypeScript"],
    link: "https://github.com/divyanatekar08"
  },
  {
    title: "Transient Object Removal from Urban LiDAR Point Clouds",
    subtitle: "NYU CUSP Guided Research",
    description: "Designed RANSAC filtering workflows and spatial clustering algorithms to strip transient objects (vehicles/pedestrians) from 3D LiDAR point clouds for high-fidelity urban modeling.",
    tags: ["3D LiDAR", "RANSAC", "Spatial Clustering", "Python"],
    link: "https://github.com/divyanatekar08"
  },
  {
    title: "Healthcare Data Ingestion & Cloud Platform",
    subtitle: "L&T Technology Services",
    description: "Built real-time healthcare data pipelines integrating wearable devices with Philips HSDP cloud using Java Spring Boot, Apache Kafka, Terraform, and Azure infrastructure.",
    tags: ["Java Spring Boot", "Apache Kafka", "Terraform", "Azure"],
    link: "https://github.com/divyanatekar08"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title">Featured Projects & Research</h2>
      <div className="projects-grid">
        {projects.map((proj, idx) => (
          <div key={idx} className="project-card">
            <span className="project-subtitle">{proj.subtitle}</span>
            <h3>{proj.title}</h3>
            <p>{proj.description}</p>
            <div className="tags">
              {proj.tags.map((tag, tIdx) => (
                <span key={tIdx} className="tag">{tag}</span>
              ))}
            </div>
            <a href={proj.link} target="_blank" rel="noopener noreferrer" className="project-link">
              View Repository →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}