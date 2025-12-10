import React, { useState, useEffect } from 'react';
import { FiArrowUp } from 'react-icons/fi'; // Icon for the button
import './ScrollToTop.css';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Function to scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Smooth scroll effect
    });
  };

  // Logic to show/hide the button
  useEffect(() => {
    // Function to check scroll position
    const toggleVisibility = () => {
      // Show button if page is scrolled down more than 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Add event listener
    window.addEventListener('scroll', toggleVisibility);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []); // Empty dependency array ensures this runs once on mount

  // Render the button only when isVisible is true
  return (
    <div className="scroll-to-top-container">
      {isVisible && (
        <button 
          onClick={scrollToTop} 
          className="scroll-to-top-btn"
          aria-label="Scroll to top"
        >
          <FiArrowUp size={24} />
        </button>
      )}
    </div>
  );
};

export default ScrollToTop;