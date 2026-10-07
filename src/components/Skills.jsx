import React from 'react';

const skillsData = [
  {
    category: "Languages & Frameworks",
    items: ["Python", "TypeScript", "Java", "C++", "SQL", "Next.js", "React.js", "Java Spring Boot"]
  },
  {
    category: "AI / ML & Spatial Analytics",
    items: ["LLMs & RAG", "PyTorch", "TensorFlow", "Scikit-Learn", "Langfuse Telemetry", "3D LiDAR (RANSAC)", "Agent-Based Modeling"]
  },
  {
    category: "Cloud, Infrastructure & DevOps",
    items: ["Supabase", "PostgreSQL", "Microsoft Azure", "Apache Kafka", "Terraform", "Docker", "REST APIs"]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="skills-section">
      <h2 className="section-title">Technical Expertise</h2>
      <div className="skills-grid">
        {skillsData.map((sk, idx) => (
          <div key={idx} className="skill-category">
            <h3>{sk.category}</h3>
            <div className="tags">
              {sk.items.map((item, iIdx) => (
                <span key={iIdx} className="tag">{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}