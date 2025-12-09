import React from "react";
import "./Features.css";
import { assets } from "../../../../assets/assets";

// 💡 WORKAROUND: Import all icons from 'react-icons/fi' and assign them
// This often forces Vite to use the correct module structure.
import * as FeatherIcons from "react-icons/fi";

const FiRuler = FeatherIcons.FiRuler;
const FiTool = FeatherIcons.FiTool;
const FiTruck = FeatherIcons.FiTruck;
const FiCheckSquare = FeatherIcons.FiCheckSquare;

const Features = () => {
  const featuresData = [
    {
      title: "Bespoke Design Process",
      description:
        "Every piece starts with your unique vision. We collaborate closely to draft designs that fit your space, style, and functional needs perfectly.",
      icon: FiRuler, // Now using the assigned component
    },
    {
      title: "Master Craftsmanship",
      description:
        "Our furniture is built by experienced artisans using time-honored techniques and the highest quality, sustainably-sourced materials.",
      icon: FiTool,
    },
    {
      title: "Seamless Installation",
      description:
        "We manage the entire process from workshop to your location. Our team ensures flawless delivery and professional installation.",
      icon: FiTruck,
    },
    {
      title: "Premium Quality Guarantee",
      description:
        "Every product undergoes strict quality checks to ensure durability, comfort, and timeless beauty—built to last for generations.",
      icon: FiCheckSquare,
    },
  ];

  return (
    <section className="features-section">
      <div className="features-wrapper">
        <div className="features_container">
          {/* LEFT COLUMN: Header & Features Grid */}
          <div className="features_content features_text_side">
            <div className="features-header">
              <span className="features-subtitle">Our Promise to You</span>
              <h2>Why We Are The Best In Town</h2>
              <p>
                Crafting excellence with a focus on personalized service,
                superior materials, and lasting quality for your dream space.
              </p>
            </div>

            <div className="features-grid">
              {featuresData.map((feature, index) => {
                const IconComponent = feature.icon;

                return (
                  <div key={index} className="feature-card">
                    <div className="feature-icon">
                      {IconComponent && <IconComponent />}
                    </div>
                    <h3>{feature.title}</h3>
                    <p>{feature.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* RIGHT COLUMN: Image */}
          <div className="features_content features_image_side">
            <div className="features_img_container">
              <img
                src={assets.beds}
                alt="Showcasing high-quality custom furniture"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
