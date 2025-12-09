import React from 'react';
import './Footer.css'; 
// Import Social Media Icons (using Font Awesome for common icons)
import { FaFacebookF, FaInstagram, FaPinterestP } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-wrapper">
        <div className="footer-content-container">
          
          {/* Section 1: Brand & Mission */}
          <div className="footer-section brand-info">
            <h3>BRAVOKE</h3>
            <p>
              Bespoke furniture crafted for life. Designing and building custom pieces that elevate your home or office space.
            </p>
            <p className="footer-cta-text">
                <a href="/contact">Request a Custom Quote Today!</a>
            </p>
          </div>
          
          {/* Section 2: Quick Links */}
          <div className="footer-section quick-links">
            <h4>Navigation</h4>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/portfolio">Portfolio</a></li>
              <li><a href="/process">Our Process</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/contact">Contact & Quote</a></li>
            </ul>
          </div>
          
          {/* Section 3: Contact Information */}
          <div className="footer-section contact-info">
            <h4>Get In Touch</h4>
            <p>Email: <a href="mailto:info@bravoke.com">info@bravoke.com</a></p>
            <p>Phone: +254 722 784578(Sales)</p>
            <p>Address: First Avenue Eastleigh, Nairobi, Kenya</p>
          </div>
          
          {/* Section 4: Social Media */}
          <div className="footer-section social-media">
              <h4>Follow Our Journey</h4>
              <div className="social-icons">
                  <a href="https://facebook.com/bravoke" aria-label="Facebook"><FaFacebookF /></a> 
                  <a href="https://instagram.com/bravoke" aria-label="Instagram"><FaInstagram /></a>
                  <a href="https://pinterest.com/bravoke" aria-label="Pinterest"><FaPinterestP /></a>
              </div>
          </div>
        </div>
        
        {/* --- BRAVOKE Big Centered Text --- */}
        <div className="footer-giant-brand">
            BRAVOKE
        </div>

        {/* Copyright/Legal Bar */}
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Bravoke Furniture. All Rights Reserved.</p>
          <div className="legal-links">
              <a href="/privacy">Privacy Policy</a>
              <a href="/terms">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;