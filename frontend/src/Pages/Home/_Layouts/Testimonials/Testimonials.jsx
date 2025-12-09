import React from "react";
import "./Testimonials.css";

// 📚 Enhanced Testimonial Data
const testimonialData = [
  {
    quote: "The quality is exceptional. My comfortable seat is stunning and arrived earlier than expected!",
    author: "Mary A.",
    rating: 5.0,
  },
  {
    quote: "Fast delivery and durable furniture. The modern sofa perfectly fits my aesthetic and the price was great.",
    author: "James M.",
    rating: 4.8,
  },
  {
    quote: "I've never seen such craftsmanship. The premium dining table is the centerpiece of my home now. Absolutely love it!",
    author: "Sarah P.",
    rating: 5.0,
  },
  {
    quote: "Outstanding service from start to finish. The classic wooden chair is both elegant and comfortable.",
    author: "David L.",
    rating: 4.9,
  },
];

const Testimonials = () => {
  const renderRatingStars = (rating) => {
    // Simple logic to display stars based on rating out of 5
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating - fullStars >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    
    return (
      <div className="rating-stars">
        {Array(fullStars).fill('★').join('')}
        {hasHalfStar && '½'}
        {Array(emptyStars).fill('☆').join('')}
      </div>
    );
  };

  return (
    <section className="testimonials_section">
      <div className="testimonials_wrapper">
        <h2>What Our Customers Say</h2>

        <div className="testi-box">
          {testimonialData.map((item, index) => (
            <div key={index} className="testi-item">
              <span className="quote-icon">“</span>
              <p className="testi-quote">{item.quote}</p>
              
              <div className="testi-footer">
                {renderRatingStars(item.rating)}
                <h4 className="testi-author"> — {item.author}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;