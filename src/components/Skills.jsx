import React from 'react';
import './Skills.css';

const Skills = () => {
  const skills = [
    { name: 'AutoCAD', level: 90 },
    { name: 'Photoshop', level: 85 },
    { name: 'SketchUp', level: 95 },
    { name: 'Lumion', level: 88 },
    { name: '3ds Max', level: 80 },
    { name: 'Revit', level: 75 },
    { name: 'Archicad', level: 70 },
  ];

  return (
    <section className="skills-section animate-fade-in delay-400">
      <h2 className="section-title">Programlar</h2>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div key={index} className="skill-item">
            <div className="skill-info">
              <span className="skill-name">{skill.name}</span>
              <span className="skill-percentage">{skill.level}%</span>
            </div>
            <div className="progress-bar-bg">
              <div 
                className="progress-bar-fill" 
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
