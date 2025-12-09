import React, { useState } from 'react';
import './Navbar.css'; 
import { FaBars, FaTimes } from 'react-icons/fa'; // Assuming you use react-icons or similar

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  // Close menu on link click (for a better mobile user experience)
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        
        {/* Company Logo/Brand Name */}
        <a href="/" className="navbar-brand">
          BRAVOKE
        </a>

        {/* Hamburger Menu Button (Visible on mobile only) */}
        <div className="menu-icon" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </div>
        
        {/* Navigation Links (State-controlled visibility) */}
        <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <li><a href="/" onClick={closeMenu}>Home</a></li>
          <li><a href="/process" onClick={closeMenu}>Our Process</a></li>
          <li><a href="/portfolio" onClick={closeMenu}>Portfolio</a></li>
          <li><a href="/about" onClick={closeMenu}>About Us</a></li>
          <li>
            <a href="/contact" className="nav-cta" onClick={closeMenu}>
              Contact & Quote
            </a>
          </li>
        </ul>
        
      </div>
    </nav>
  );
}

export default Navbar;