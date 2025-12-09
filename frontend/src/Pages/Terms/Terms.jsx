import React from 'react';
import './Terms.css';

const Terms = () => {
  return (
    <section className="terms-section">
      <div className="terms-wrapper">

        {/* --- Header --- */}
        <div className="terms-header">
            <span className="subtitle-tag">Legal Statement</span>
            <h1>Terms of Service</h1>
            <p className="last-updated">Last Updated: December 10, {new Date().getFullYear()}</p>
        </div>

        {/* --- Content Body --- */}
        <div className="terms-content">
          
          <div className="policy-section">
            <h2>1. Agreement to Terms</h2>
            <p>
              These Terms of Service ("Terms") constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you") and Bravoke Furniture ("we," "us," or "our"), concerning your access to and use of the Bravoke website and services. You agree that by accessing the Services, you have read, understood, and agreed to be bound by all of these Terms of Service.
            </p>
          </div>

          <div className="policy-section">
            <h2>2. Intellectual Property Rights</h2>
            <p>
              Unless otherwise indicated, all content on the Services, including source code, databases, functionality, website designs, audio, video, text, photographs, and graphics (collectively, the "Content"), and the trademarks, service marks, and logos contained therein (the "Marks"), are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws.
            </p>
            <p>
              Our custom furniture designs and technical specifications remain the intellectual property of Bravoke Furniture unless otherwise agreed upon in a separate written commission contract.
            </p>
          </div>

          <div className="policy-section">
            <h2>3. Bespoke Commission Terms</h2>
            <p>
              Custom furniture commissions are subject to a separate, detailed contract outlining:
            </p>
            <ul>
              <li>Design Approval: Final approval of all designs, materials, and finishes is required before production begins.</li>
              <li>Payment Schedule: Typically includes an initial non-refundable deposit to commence design work, a production payment, and a final payment upon delivery.</li>
              <li>Lead Times: All production and delivery lead times are estimates and are subject to change based on material availability and workshop scheduling.</li>
              <li>Cancellations: Due to the custom nature of our work, orders cannot be cancelled or refunded once production has begun.</li>
            </ul>
          </div>

          <div className="policy-section">
            <h2>4. Disclaimers and Warranties</h2>
            <p>
              Our furniture is warranted against defects in materials and workmanship for a period defined in your final sales contract. The warranty does not cover normal wear and tear, damage caused by misuse, improper maintenance, or natural variations in wood grain and color.
            </p>
            <p>
              The Services are provided on an as-is and as-available basis. We do not warrant that the Services will be uninterrupted, error-free, or secure.
            </p>
          </div>
          
          <div className="policy-section">
            <h2>5. Governing Law</h2>
            <p>
              These Terms and your use of the Services are governed by and construed in accordance with the laws of the Republic of Kenya, applicable to agreements made and to be entirely performed within the Republic of Kenya.
            </p>
          </div>

          <div className="policy-section">
            <h2>6. Contact Us</h2>
            <p>For questions regarding these Terms, please contact us at:</p>
            <p>Email: <a href="mailto:legal@bravoke.com">legal@bravoke.com</a></p>
            <p>Address: First Avenue Eastleigh, Legal Department, Nairobi, Kenya</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Terms;