import React from "react";
import { FaFacebook, FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa'; 
import '../../assets/css/footer.css'

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        
        <div className="footer-section">
          <div className="footer-logo">
            <span className="logo-icon">🌱</span>
            <span className="logo-text">GroceryWale</span>
          </div>
          <div className="social-media-icons">
      <a href="https://facebook.com" className="social-icon"><FaFacebook /></a>
      <a href="https://twitter.com" className="social-icon"><FaTwitter /></a>
      <a href="https://youtube.com" className="social-icon"><FaYoutube /></a>
      <a href="https://instagram.com" className="social-icon"><FaInstagram /></a>
    </div>
        </div>

        
        <div className="footer-section">
          <h4 className="footer-title">GroceryWale</h4>
          <ul className="footer-links">
            <li><a href="#">About us</a></li>
            <li><a href="#">Conditions</a></li>
            <li><a href="#">Our Journals</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Affiliate Programme</a></li>
            <li><a href="#">Ultras Press</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4 className="footer-title">Quick Links</h4>
          <ul className="footer-links">
            <li><a href="#">Offers</a></li>
            <li><a href="#">Discount Coupons</a></li>
            <li><a href="#">Stores</a></li>
            <li><a href="#">Track Order</a></li>
            <li><a href="#">Shop</a></li>
            <li><a href="#">Info</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4 className="footer-title">Customer Service</h4>
          <ul className="footer-links">
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Returns & Refunds</a></li>
            <li><a href="#">Cookie Guidelines</a></li>
            <li><a href="#">Delivery Information</a></li>
          </ul>
        </div>

        
    <div className="footer-section">
      <h4 className="footer-title">Subscribe Us</h4>
      <p>Subscribe to our newsletter to get updates about our grand offers.</p>
      <div className="subscribe-form">
        <input type="email" placeholder="Email Address" className="subscribe-input" />
        <button className="subscribe-button">Subscribe</button>
      </div>

      
      <div className="contact-us">
        <h4 className="footer-title">Contact Us</h4>
        <p>Our team is ready to help! Reach us at:</p>
        <p className="phone-number">📞 +91 700 006 5931</p> 
      </div>
      
      
      
      </div>
      </div>



      <div className="footer-bottom">
        <p>© 2025 GroceryWale. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;