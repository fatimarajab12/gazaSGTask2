// Footer.jsx
import React from 'react';
import './Footer.css'; // Import your CSS for styling

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section about">
                    <h4>About Us</h4>
                    <p>
                        We are an online store dedicated to providing the best products at competitive prices. 
                        Your satisfaction is our priority.
                    </p>
                </div>
                <div className="footer-section links">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href="#products">Products</a></li>
                        <li><a href="#about">About Us</a></li>
                        <li><a href="#contact">Contact Us</a></li>
                        <li><a href="#privacy">Privacy Policy</a></li>
                    </ul>
                </div>
                <div className="footer-section contact">
                    <h4>Contact Us</h4>
                    <p>Email: info@store.com</p>
                    <p>Phone: +123 456 7890</p>
                </div>
            </div>
            <div className="footer-bottom">
                &copy; 2024 | All Rights Reserved
            </div>
        </footer>
    );
};

export default Footer;
