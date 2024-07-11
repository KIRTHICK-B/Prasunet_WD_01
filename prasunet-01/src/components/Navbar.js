import React, { useState } from 'react';
import './Navbar.css';


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleCloseMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
        <div className="hamburger" onClick={handleToggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      <div className="navbar-container">
        <div className="nav-links">
          <ul className="nav-menu">
            <li><a href="#home" onClick={handleCloseMenu}>Home</a></li>
            <li><a href="#about" onClick={handleCloseMenu}>About</a></li>
            <li><a href="#services" onClick={handleCloseMenu}>Services</a></li>
            <li><a href="#contact" onClick={handleCloseMenu}>Contact</a></li>
          </ul>
        </div>
    
      </div>

      <div className={`nav-popup ${menuOpen ? 'active' : ''}`}>
        <ul>
          <li><a href="#home" onClick={handleCloseMenu}>Home</a></li>
          <li><a href="#about" onClick={handleCloseMenu}>About</a></li>
          <li><a href="#services" onClick={handleCloseMenu}>Services</a></li>
          <li><a href="#contact" onClick={handleCloseMenu}>Contact</a></li>
        </ul>
      </div>

      {menuOpen && <div className="menu-overlay" onClick={handleCloseMenu}></div>}
    </nav>
  );
};

export default Navbar;
