import React from 'react';

const experiences = [
  {
    role: "Software Engineer Intern (AI/ML) — Lead Engineer",
    company: "PM Accelerator",
    period: "Aug 2026 – Oct 2026",
    bullets: [
      "Engineered Next.js API micro-routes (/api/people, /api/decisions) backed by Supabase and PostgreSQL for an AI personal relationship manager.",
      "Integrated Langfuse SDK telemetry across server boundaries to trace LLM execution flows and monitor prompt latencies.",
      "Optimized query safety and performance using ISO timestamp boundary filtering in Supabase."
    ]
  },
  {
    role: "Graduate Researcher (Agent-Based Urban Simulation)",
    company: "NYU CUSP & Downtown Brooklyn Partnership",
    period: "Sept 2025 – May 2026",
    bullets: [
      "Integrated LLMs with spatial interaction methods to build agent-based mobility decision engines.",
      "Processed high-dimensional mobility data and review embeddings to evaluate urban movement behavior."
    ]
  },
  {
    role: "Software Development Intern",
    company: "L&T Technology Services (LTTS)",
    period: "Jan 2023 – Jul 2023",
    bullets: [
      "Developed real-time data ingestion pipelines using Java Spring Boot, Apache Kafka, and Spring Vault.",
      "Provisioned and managed cloud infrastructure using Terraform and Microsoft Azure."
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="experience-section">
      <h2 className="section-title">Experience & Research</h2>
      <div className="timeline">
        {experiences.map((exp, idx) => (
          <div key={idx} className="timeline-item">
            <div className="timeline-header">
              <h3>{exp.role}</h3>
              <span className="period">{exp.period}</span>
            </div>
            <p className="company">{exp.company}</p>
            <ul>
              {exp.bullets.map((b, bIdx) => (
                <li key={bIdx}>{b}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}