import React from 'react';
import './contact.css';
import { FiPhone, FiMail, FiMapPin } from 'react-icons/fi'; 

const Contact = () => {
    // 💡 Embed code from Google Maps (Use YOUR actual code here)
    const mapEmbedSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d791.4857175132196!2d36.85059956401879!3d-1.2702473560477479!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f17003580497b%3A0x320aac723766fdc5!2sYasmin%20Tower%203rd%20Street%20Eastleigh!5e0!3m2!1sen!2ske!4v1765317436092!5m2!1sen!2ske"; 
    
    return (
        <section className="contact-section">
            <div className="contact-wrapper">
                
                <div className="contact-header">
                    <span className="subtitle-tag">Let's Create Together</span>
                    <h1>Contact & Request a Quote</h1>
                    <p className="contact-intro">
                        Ready to begin your bespoke furniture project? Reach out to our team via phone, email, or use the form below to receive a personalized quote.
                    </p>
                </div>

                <div className="contact-container">
                    
                    {/* --- LEFT COLUMN: CONTACT DETAILS --- */}
                    <div className="contact-details">
                        <h2>Our Details</h2>

                        <div className="detail-item">
                            <FiMapPin size={24} className="detail-icon" />
                            <div className="detail-text">
                                <h4>Find Our Workshop</h4>
                                <p>First Avenue, Eastleigh, Nairobi, Kenya</p>
                            </div>
                        </div>
                        {/* ... (Other details unchanged) ... */}
                        <div className="detail-item">
                            <FiPhone size={24} className="detail-icon" />
                            <div className="detail-text">
                                <h4>Call Us Directly</h4>
                                <p>+254 722 784578(Sales)</p>
                            </div>
                        </div>

                        <div className="detail-item">
                            <FiMail size={24} className="detail-icon" />
                            <div className="detail-text">
                                <h4>Send An Email</h4>
                                <p>info@bravoke.com</p>
                            </div>
                        </div>


                        <div className="map-placeholder">
                            <iframe 
                                src={mapEmbedSrc}
                                // IMPORTANT: Remove width/height attributes to let CSS control size
                                style={{ border: 0 }} 
                                allowFullScreen="" 
                                loading="lazy" 
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Bravoke Workshop Location Map"
                            ></iframe>
                        </div>
                    </div>
                    
                    {/* ... (RIGHT COLUMN: CONTACT/QUOTE FORM unchanged) ... */}
                    <div className="contact-form-container">
                        <h2>Start Your Commission</h2>
                        <form className="quote-form">
                            <div className="form-group">
                                <label htmlFor="name">Full Name*</label>
                                <input type="text" id="name" name="name" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email Address*</label>
                                <input type="email" id="email" name="email" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="phone">Phone Number</label>
                                <input type="tel" id="phone" name="phone" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="project">Project Type*</label>
                                <select id="project" name="project" required>
                                    <option value="">Select a Category</option>
                                    <option value="Residential">Residential Furniture</option>
                                    <option value="Built-in">Custom Built-ins</option>
                                    <option value="Commercial">Commercial/Office</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>
                            <div className="form-group full-width">
                                <label htmlFor="message">Project Description*</label>
                                <textarea id="message" name="message" rows="5" required></textarea>
                            </div>
                            
                            <button type="submit" className="submit-btn">
                                Request Free Quote
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Contact;