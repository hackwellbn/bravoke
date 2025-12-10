import React, { useState } from 'react';
// 💡 KEY CHANGE: Import Link from react-router-dom
import { Link } from 'react-router-dom';
import './Navbar.css'; 
import { FaBars, FaTimes } from 'react-icons/fa'; 

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
        <Link to="/" className="navbar-brand">
          BRAVOKE
        </Link>

        {/* Hamburger Menu Button (Visible on mobile only) */}
        <div className="menu-icon" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </div>
        
        {/* Navigation Links (State-controlled visibility) */}
        <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <li><Link to="/" onClick={closeMenu}>Home</Link></li>
          <li><Link to="/process" onClick={closeMenu}>Our Process</Link></li>
          <li><Link to="/portfolio" onClick={closeMenu}>Portfolio</Link></li>
          <li><Link to="/about" onClick={closeMenu}>About Us</Link></li>
          <li>
            <Link to="/contact" className="nav-cta" onClick={closeMenu}>
              Contact & Quote
            </Link>
          </li>
        </ul>
        
      </div>
    </nav>
  );
}

export default Navbar;