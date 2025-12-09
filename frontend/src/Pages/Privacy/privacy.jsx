import React from 'react';
import './privacy.css';

const Privacy = () => {
  return (
    <section className="privacy-section">
      <div className="privacy-wrapper">

        {/* --- Header --- */}
        <div className="privacy-header">
            <span className="subtitle-tag">Legal Statement</span>
            <h1>Privacy Policy</h1>
            <p className="last-updated">Last Updated: December 10, {new Date().getFullYear()}</p>
        </div>

        {/* --- Content Body --- */}
        <div className="privacy-content">
          
          <div className="policy-section">
            <h2>1. Introduction</h2>
            <p>
              Bravoke Furniture ("we," "our," or "us") is committed to protecting the privacy of our clients and website visitors. This Privacy Policy describes how we collect, use, and disclose your personal information when you visit our website, contact us, or engage our bespoke furniture services.
            </p>
          </div>

          <div className="policy-section">
            <h2>2. Information We Collect</h2>
            <p>We may collect personal information about you from various sources, including:</p>
            <ul>
              <li>**Contact Data:** Your name, email address, phone number, and mailing address provided when requesting a quote or contacting support.</li>
              <li>**Project Data:** Details about your commissioned project, including specifications, design preferences, and photographic evidence of the installation site.</li>
              <li>**Usage Data:** Information about how you access and use our website, such as IP address, browser type, and pages visited, collected through cookies and analytics.</li>
            </ul>
          </div>

          <div className="policy-section">
            <h2>3. How We Use Your Information</h2>
            <p>We use your personal data for the following purposes:</p>
            <ul>
              <li>To provide, operate, and maintain our bespoke furniture services.</li>
              <li>To process your custom orders, manage payments, and facilitate delivery and installation.</li>
              <li>To communicate with you regarding project updates, service announcements, and promotional offers (with your consent).</li>
              <li>To improve and personalize your experience on our website.</li>
            </ul>
          </div>

          <div className="policy-section">
            <h2>4. Sharing and Disclosure</h2>
            <p>We do not sell or rent your personal information to third parties. We may share information with:</p>
            <ul>
              <li>**Service Providers:** Third-party vendors who perform services on our behalf, such as delivery, installation, and payment processing, who are legally bound to protect your data.</li>
              <li>**Legal Compliance:** When required by law or in response to a valid legal process.</li>
            </ul>
          </div>
          
          <div className="policy-section">
            <h2>5. Your Choices and Rights</h2>
            <p>You have the right to access, update, or request the deletion of your personal information. If you wish to stop receiving marketing emails from us, please use the unsubscribe link provided in those emails or contact us directly.</p>
          </div>

          <div className="policy-section">
            <h2>6. Contact Us</h2>
            <p>If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at:</p>
            <p>Email: <a href="mailto:privacy@bravoke.com">privacy@bravoke.com</a></p>
            <p>Address: First Avenue Eastleigh, Legal Department, Nairobi, Kenya</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Privacy;