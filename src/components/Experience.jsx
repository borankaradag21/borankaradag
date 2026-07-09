import React, { useState } from 'react';
import './Experience.css';

const Experience = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const experiences = [
    {
      id: 1,
      company: 'Berko İnşaat',
      role: 'Mimar',
      details: 'Büyük ölçekli konut projelerinde konsept tasarımların hazırlanması ve uygulama çizimlerinin yapılması.'
    },
    {
      id: 2,
      company: 'Bak Yapı',
      role: 'Proje Mimarı',
      details: 'Şantiye ve ofis koordinasyonunun sağlanması, ince işler detay çözümleri ve malzeme seçimleri.'
    },
    {
      id: 3,
      company: 'Gültekin Mimarlık',
      role: 'Mimar / 3D Uzmanı',
      details: 'Müşteri sunumları için iç ve dış mekan 3D görselleştirme, ruhsat projelerinin çizimi ve takibi.'
    }
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="experience-section animate-fade-in delay-300">
      <h2 className="section-title">Deneyim</h2>
      <div className="accordion">
        {experiences.map((exp, index) => (
          <div 
            key={exp.id} 
            className={`accordion-item ${activeIndex === index ? 'active' : ''}`}
          >
            <button 
              className="accordion-header" 
              onClick={() => toggleAccordion(index)}
            >
              <div className="accordion-title">
                <h3>{exp.company}</h3>
                <span className="role">{exp.role}</span>
              </div>
              <div className="accordion-icon">
                {activeIndex === index ? '−' : '+'}
              </div>
            </button>
            <div 
              className="accordion-content"
              style={{ maxHeight: activeIndex === index ? '200px' : '0' }}
            >
              <p>{exp.details}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
