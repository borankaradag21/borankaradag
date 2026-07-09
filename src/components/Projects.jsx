import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    { id: 1, title: 'Modern Konut Projesi', category: 'Mimari Tasarım' },
    { id: 2, title: 'Şehir Merkezi Ofis', category: 'İç Mimari & Uygulama' },
    { id: 3, title: 'Doğa İçi Villa', category: 'Konsept & 3D Modelleme' },
    { id: 4, title: 'Ticari Kompleks', category: 'Mimari Proje' },
  ];

  return (
    <section id="projects" className="projects-section animate-fade-in delay-200">
      <h2 className="section-title">Projelerim</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <div className="project-image-placeholder">
              <span>Proje Görseli</span>
            </div>
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.category}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
