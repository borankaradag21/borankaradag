import React from 'react';
import profilePic from '../assets/profile.jpeg';
import './Header.css';

const Header = () => {
  return (
    <header className="header animate-fade-in">
      <div className="header-content">
        <h1 className="header-title">Boran Karadağ</h1>
        <h2 className="header-subtitle">Mimarlık İşleri</h2>
        <p className="header-tagline">Modern, Sürdürülebilir ve Estetik Mekanlar Tasarlıyoruz.</p>
        <div className="header-actions">
          <a href="#projects" className="btn-primary">Projelerimi İncele</a>
        </div>
      </div>
      <div className="header-image-container">
        <img src={profilePic} alt="Boran Karadağ" className="profile-photo" />
      </div>
    </header>
  );
};

export default Header;
