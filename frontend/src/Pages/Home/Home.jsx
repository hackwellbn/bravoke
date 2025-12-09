import React from 'react';
import './Home.css';
import Hero from './_Layouts/Hero/Hero.jsx';
import Features from './_Layouts/Features/Features.jsx';
import Services from './_Layouts/Services/Services.jsx';
import Gallery from './_Layouts/Gallery/Gallery.jsx';
import Testimonials from './_Layouts/Testimonials/Testimonials.jsx';
import ContactCTA from './_Layouts/ContactCTA/ContactCTA.jsx';
import Products from './_Layouts/Products/Products.jsx';

const Home = () => {
  return (
    <div>
      <Hero />
      <Features />
      <Services />
      {/* <Gallery /> */}
      <Testimonials />
      <Products />
      <ContactCTA />
    </div>
  );
};

export default Home;
