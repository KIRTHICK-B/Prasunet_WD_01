import React, { useState, useEffect } from 'react';
import Navbar from "./components/Navbar";
import './App.css';
import Contact from './components/Contact';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';

const App = () => {
  const [bgColor, setBgColor] = useState('linear-gradient(to right, #eaafc8, #654ea3)');

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;
    const sectionHeight = windowHeight * 0.845; // 84.5% of window height

        const currentSectionIndex = Math.floor(scrollPosition / sectionHeight);

        const sectionColors = [
      'linear-gradient(to right, #eaafc8, #654ea3)',
      'linear-gradient(to right, #ffecd2, #fcb69f)',
      'linear-gradient(to right, #a1c4fd, #c2e9fb)',
      'linear-gradient(to right, #667eea, #764ba2)'
    ];

    
    setBgColor(sectionColors[currentSectionIndex]);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div style={{ background: bgColor }}>
      <Navbar />
      <Home />
      <About />
      <Services />
      <Contact />
    </div>
  );
};

export default App;
