import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer" id="contact">
      <div className="container">
        <div className="footer-container">
          <div className="footer-column">
            <h3>Navigation</h3>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#portfolio">Portfolio</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Services</h3>
            <ul>
              <li><a href="#services">Website Design</a></li>
              <li><a href="#services">E-Commerce Solutions</a></li>
              <li><a href="#services">SEO Optimization</a></li>
              <li><a href="#services">Website Maintenance</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Contact</h3>
            <ul>
              <li>Email: your.email@example.com</li>
              <li>Phone: +00 123 456 789</li>
              <li>Address: Your City, Country</li>
            </ul>
          </div>
        </div>
        <div className="copyright">
          &copy; {currentYear} Your Name. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;