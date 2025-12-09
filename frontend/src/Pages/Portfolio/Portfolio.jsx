import React, { useState, useMemo } from 'react';
import './Portfolio.css'; 
import { assets } from '../../assets/assets';



// --- MOCK DATA ---
const portfolioItems = [
  {
    id: 1,
    title: "The Oak Library",
    category: "Built-ins",
    description: "A custom-built, floor-to-ceiling library in solid European Oak with integrated lighting and ladder system.",
    imageUrl: assets.Library,
    client: "Residential - Upper Hill",
  },
  {
    id: 2,
    title: "Minimalist Executive Desk",
    category: "Commercial",
    description: "A large, floating executive desk made of black walnut and brushed steel for a modern CEO office.",
    imageUrl:assets.office,
    client: "Corporate - CBD",
  },
  {
    id: 3,
    title: "Curved Sectional Sofa",
    category: "Residential",
    description: "A luxurious velvet sectional sofa with a bespoke curve designed to fit a panoramic living room view.",
    imageUrl: assets.Curvedsofa,
    client: "Residential - Kitisuru",
  },
  {
    id: 4,
    title: "Retail Display System",
    category: "Commercial",
    description: "Modular retail shelving and counter system in light maple and glass for a high-end jewelry boutique.",
    imageUrl:assets.retail,
    client: "Retail - Westlands",
  },
  {
    id: 5,
    title: "Walnut Dining Set",
    category: "Residential",
    description: "A ten-seater dining table with matching upholstered chairs, celebrating the natural grain of American Walnut.",
    imageUrl: assets.walnut,
    client: "Residential - Karen",
  },
  {
    id: 6,
    title: "Master Closet System",
    category: "Built-ins",
    description: "A fully custom walk-in closet with cedar drawers, integrated vanity, and glass shelving.",
    imageUrl: assets.walkshelve,
    client: "Residential - Muthaiga",
  },
];
// --- END MOCK DATA ---


const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  // 1. Get unique categories for filters
  const uniqueCategories = useMemo(() => {
    const categories = portfolioItems.map(item => item.category);
    return ["All", ...new Set(categories)];
  }, []);

  // 2. Filter the items based on the selected category
  const filteredItems = useMemo(() => {
    if (selectedCategory === "All") {
      return portfolioItems;
    }
    return portfolioItems.filter(item => item.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <section className="portfolio-section">
      <div className="portfolio-wrapper">

        {/* --- PORTFOLIO HEADER / HERO --- */}
        <div className="portfolio-header">
            <span className="portfolio-subtitle">Our Finest Work</span>
            <h1>A Showcase of Bespoke Craftsmanship</h1>
            <p>Explore our latest custom projects, from sophisticated residential furniture to high-impact commercial installations.</p>
        </div>

        {/* --- FILTER BUTTONS --- */}
        <div className="portfolio-filters">
            {uniqueCategories.map(cat => (
                <button
                    key={cat}
                    className={`filter-btn ${selectedCategory === cat ? "active" : ""}`}
                    onClick={() => setSelectedCategory(cat)}
                >
                    {cat}
                </button>
            ))}
        </div>

        {/* --- PORTFOLIO GRID --- */}
        <div className="portfolio-grid">
            {filteredItems.length > 0 ? (
                filteredItems.map(item => (
                    <div key={item.id} className="portfolio-card">
                        <div className="card-image-container">
                            <img src={item.imageUrl} alt={item.title} loading="lazy" />
                            <div className="card-category-tag">{item.category}</div>
                        </div>
                        <div className="card-info">
                            <h3 className="card-title">{item.title}</h3>
                            <p className="card-description">{item.description}</p>
                            <div className="card-footer">
                                <span className="card-client">{item.client}</span>
                                <button className="view-project-btn">View Project →</button>
                            </div>
                        </div>
                    </div>
                ))
            ) : (
                <p className="no-projects">No projects found in the "{selectedCategory}" category.</p>
            )}
        </div>

      </div>
    </section>
  );
}

export default Portfolio;