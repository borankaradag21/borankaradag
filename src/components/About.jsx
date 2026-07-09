import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section animate-fade-in delay-100">
      <div className="glass-panel">
        <h2 className="section-title">Hakkımda</h2>
        <div className="about-content">
          <p>
            Merhaba, ben Boran Karadağ. Yenilikçi ve estetik mekanlar tasarlamayı hedefleyen tutkulu bir mimarım. 
            İşlevselliği sanatla buluşturarak, insanların içinde bulunmaktan keyif alacağı, sürdürülebilir ve modern 
            yapılar üretmek temel prensibimdir.
          </p>
          <p>
            Farklı ölçeklerdeki projelerde edindiğim deneyimlerle, konsept tasarımdan uygulama aşamasına kadar 
            sürecin her adımında titizlikle çalışıyorum. Teknolojiyi ve güncel tasarım trendlerini yakından takip ederek, 
            her projeye özgün bir karakter katmayı amaçlıyorum.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
