import React from "react";
import "./Gallery.css";

const Gallery = () => {
  return (
    <section className="gallery">
      <h2>Our Work</h2>

      <div className="gallery-grid">
        <img src="/images/g1.jpg" alt="Furniture" />
        <img src="/images/g2.jpg" alt="Furniture" />
        <img src="/images/g3.jpg" alt="Furniture" />
        <img src="/images/g4.jpg" alt="Furniture" />
      </div>
    </section>
  );
};

export default Gallery;
