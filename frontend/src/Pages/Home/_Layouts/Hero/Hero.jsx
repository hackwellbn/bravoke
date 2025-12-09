// Hero.jsx

import React from 'react';
// This component should ideally be wrapped in a layout component that includes Navbar and Footer,
// but here it is as a standalone Hero section.
import { Link } from 'react-router-dom'
import './Hero.css'
import { assets } from '../../../../assets/assets';

const Hero = () => {
  return (
    <header className="hero-section">
      <div className="hero-content-container">
        
        {/* Strong, compelling headline for custom furniture */}
        <h1>
          Your Space. Your Design. Our Master Craftsmanship.
        </h1>
        
        {/* Subheading emphasizing personalization and quality */}
        <p>
          Bravoke transforms your unique vision into bespoke, high-quality furniture pieces. From initial concept to final installation, we build custom living experiences.
        </p>

        {/* Call-to-Action Buttons */}
        <div className="hero-cta-buttons">
          <button className="cta-primary">
            Start Your Custom Project
          </button>
          <button className="cta-secondary">
            Explore The Portfolio
          </button>
        </div>
      </div>
      
      {/* Placeholder for the main visual - essential for a furniture site! */}
      <div className="hero-visual-area">
        <img src={assets.HeroImage2} alt="Bravoke Furniture Workshop" />

      </div>
    </header>
  );
}

export default Hero;