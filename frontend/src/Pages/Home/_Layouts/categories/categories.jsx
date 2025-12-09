import React from "react";
import "./Categories.css";

const Categories = () => {
  return (
    <section className="categories">
      <h2>Shop by Category</h2>

      <div className="cat-grid">
        <div className="cat-item">Living Room</div>
        <div className="cat-item">Bedroom</div>
        <div className="cat-item">Office Furniture</div>
        <div className="cat-item">Outdoor Furniture</div>
        <div className="cat-item">Decor & Accessories</div>
      </div>
    </section>
  );
};

export default Categories;
