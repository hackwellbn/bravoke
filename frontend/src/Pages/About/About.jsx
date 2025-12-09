import React from "react";
import "./About.css";
// Re-using the icons from Features.jsx for consistency in the brand message
import { FiLayers, FiUsers, FiHeart, FiGlobe } from "react-icons/fi";
import { assets } from "../../assets/assets";

// Mock Data for the Philosophy Section
const philosophyData = [
  {
    title: "Material Integrity",
    description:
      "Sustainably-sourced hardwoods, natural stone, and premium leathers ensure every piece is ethically made and built to endure.",
    icon: FiGlobe,
  },
  {
    title: "Human-Centric Design",
    description:
      "Our design process starts and ends with the user, ensuring comfort, functionality, and timeless aesthetics in every curve.",
    icon: FiUsers,
  },
  {
    title: "Artisan Heritage",
    description:
      "Each item is crafted in-house by master artisans who blend traditional techniques with modern precision machinery.",
    icon: FiLayers,
  },
  {
    title: "Lasting Relationship",
    description:
      "We don't just sell furniture; we build lasting relationships, offering lifetime care advice and support for your bespoke pieces.",
    icon: FiHeart,
  },
];

const About = () => {
  return (
    <section className="about-section">
      <div className="about-wrapper">
        {/* --- 1. HERO/INTRODUCTION --- */}
        <div className="about-hero">
          <h1 className="about-title">The Art of Bespoke Living.</h1>
          <p className="about-tagline">
            Bravoke is not just a furniture maker; we are storytellers in wood,
            metal, and fabric, dedicated to translating your vision into
            enduring masterpieces.
          </p>
          {/* Placeholder for an inspiring brand image */}
          <div className="about-hero-image-placeholder">
              <img src={assets.workshop} alt="Inspiring Workshop/Interior Image" />
          </div>
        </div>

        {/* --- 2. OUR STORY & VISION --- */}
        <div className="about-story-block">
          <div className="story-content">
            <span className="subtitle-tag">Our Story</span>
            <h2>Crafted from a Vision for Timelessness</h2>
            <p>
              Founded in 2016 by master craftsman Kevin Oyamo. on the principle that
              furniture should be as unique as the life lived around it, Bravoke
              began in a small workshop with a singular focus: uncompromising
              quality. Today, we have grown into a leading name in bespoke
              furniture, but our values remain rooted in the precision of the
              hand, the honesty of the material, and the elegance of timeless
              design.
            </p>
            <p>
              We specialize in commissioned projects for discerning residential
              and commercial clients, offering a seamless journey from concept
              sketch to final installation. Our commitment is to create future
              heirlooms, not just fleeting trends.
            </p>
          </div>
          {/* Placeholder for a founder/workshop detail image */}
          <div className="story-image-placeholder">
            <img src={assets.founder} alt="" />
          </div>
        </div>

        {/* --- 3. PHILOSOPHY / CORE VALUES --- */}
        <div className="about-philosophy-block">
          <span className="subtitle-tag">Our Philosophy</span>
          <h2>The Bravoke Difference: Principles of Excellence</h2>

          <div className="philosophy-grid">
            {philosophyData.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div key={index} className="philosophy-card">
                  <div className="philosophy-icon">
                    {IconComponent && <IconComponent size={40} />}
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
