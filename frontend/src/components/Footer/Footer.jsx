import React from 'react';
// 💡 KEY CHANGE: Import Link from react-router-dom
import { Link } from 'react-router-dom';
import './Footer.css'; 
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
                {/* Internal link uses Link */}
                <Link to="/contact">Request a Custom Quote Today!</Link>
            </p>
          </div>
          
          {/* Section 2: Quick Links */}
          <div className="footer-section quick-links">
            <h4>Navigation</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/portfolio">Portfolio</Link></li>
              <li><Link to="/process">Our Process</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact & Quote</Link></li>
            </ul>
          </div>
          
          {/* Section 3: Contact Information */}
          <div className="footer-section contact-info">
            <h4>Get In Touch</h4>
            <p>Email: <a href="mailto:info@bravoke.com">info@bravoke.com</a></p> {/* External link remains <a> */}
            <p>Phone: +254 722 784578(Sales)</p>
            <p>Address: First Avenue Eastleigh, Nairobi, Kenya</p>
          </div>
          
          {/* Section 4: Social Media (External links remain <a>) */}
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
        <div className="footer-giant-brand" >
            BRAVOKE
        </div>

        {/* Copyright/Legal Bar */}
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Bravoke Furniture. All Rights Reserved.</p>
          <div className="legal-links">
              {/* Internal links use Link */}
              <Link to="/privacy">Privacy Policy</Link>
              <Link to="/terms">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;