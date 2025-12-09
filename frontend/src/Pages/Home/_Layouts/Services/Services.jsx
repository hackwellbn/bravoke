import React from 'react';
import './Services.css'; 
import { assets } from '../../../../assets/assets';

const CategoryShowcase = () => {
  const categoryAreas = [
    {
      title: "Chairs",
      items: ["Dining Chair", "Lounge Chair", "Folding Chair", "Office Chair", "Armchair", "Bar Stool"],
      count: "1500+ Items",
      image: assets.chair1, 
    },
    {
      title: "Sofa",
      items: ["Reception Sofa", "Sectional Sofa", "Armless Sofa", "Curved Sofa"],
      count: "750+ Items",
      image: assets.sofaset,
    },
   {
      title: "Tables",
      items: ["Dining Tables", "Coffee Tables", "Console Tables", "Side Tables", "Conference Tables"],
      count: "900+ Designs",
      // Placeholder image for a Table/Dining set
      image: assets.Tables, 
    }
  ];

  return (
    <section className="category-showcase-section">
      <div className="category-grid">
        {categoryAreas.map((area, index) => (
          <div 
            key={index} 
            // Use 'overlay-card' class for the new design
            className="category-card overlay-card"
          >
            {/* 1. Image background */}
            <img 
              src={area.image} 
              alt={`${area.title} category example`} 
              loading="lazy" 
              className="card-background-image"
            />
            
            {/* 2. Content Overlay */}
            <div className="card-content-overlay">
                <span className="item-count">{area.count}</span>
                <h3>{area.title}</h3>
                
                {/* Text list is now the main body of the overlay */}
                <ul className="category-list">
                    {/* Display all items as the overlay gives more space */}
                    {area.items.map((item, i) => <li key={i}>{item}</li>)}
                </ul>

                {/* Optional: Add a 'Shop Now' link/button */}
                <button className="shop-now-btn">Shop Now →</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CategoryShowcase;