import React from 'react';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Skills from './components/Skills';

export default function App() {
  return (
    <div className="app-container">
      <nav className="navbar">
        <span className="logo">Divya Natekar</span>
        <div className="nav-links">
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#skills">Skills</a>
          <a href="mailto:dyn2009@nyu.edu">Contact</a>
        </div>
      </nav>
      <main>
        <Hero />
        <Projects />
        <Experience />
        <Skills />
      </main>
      <footer>
        <p>© {new Date().getFullYear()} Divya Natekar. Built with React & Vite.</p>
      </footer>
    </div>
  );
}