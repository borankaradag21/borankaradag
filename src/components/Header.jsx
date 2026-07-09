import React from 'react';
import profilePic from '../assets/profile.jpeg';
import './Header.css';

const Header = () => {
  return (
    <header className="header animate-reveal">
      <div className="header-content">
        <div className="header-eyebrow animate-reveal delay-100">Mimar</div>
        <h1 className="header-title animate-reveal delay-200">Boran Karadağ</h1>
        <p className="header-tagline animate-reveal delay-300">
          Mekanların dilini çözüyor, işlevselliği zamansız ve minimal bir estetikle buluşturuyoruz. 
          Kurumsal mimari çözümler ve sürdürülebilir yaşam alanları tasarlıyoruz.
        </p>
        <div className="header-actions animate-reveal delay-400">
          <a href="#projects" className="btn-primary">Projelerimi İncele</a>
        </div>
      </div>
      <div className="header-image-container animate-reveal delay-300">
        <div className="image-wrapper">
          <img src={profilePic} alt="Boran Karadağ" className="profile-photo" />
        </div>
      </div>
    </header>
  );
};

export default Header;
