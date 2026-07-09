import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Skills from './components/Skills';
import './App.css';

function App() {
  return (
    <div className="portfolio-container">
      <Header />
      
      <main className="main-content">
        <About />
        <Projects />
        
        <div className="split-section">
          <Experience />
          <Skills />
        </div>
      </main>
      
      <footer className="footer">
        <p>© {new Date().getFullYear()} Boran Karadağ. Tüm hakları saklıdır.</p>
      </footer>
    </div>
  );
}

export default App;
