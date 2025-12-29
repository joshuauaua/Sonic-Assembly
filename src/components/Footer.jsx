
import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-brand">
                    <h3 className="footer-logo">Sonic Assembly</h3>
                    <p className="footer-tagline">Building digital experiences that resonate.</p>
                </div>
                
                <div className="footer-links">
                    <div className="footer-column">
                        <h4>Explore</h4>
                        <Link to="/work">Work</Link>
                        <Link to="/about">About</Link>
                        <Link to="/process">Process</Link>
                    </div>

                    <div className="footer-column">
                        <h4>Connect</h4>
                        <a href="mailto:hello@sonicassembly.com">hello@sonicassembly.com</a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; {currentYear} Sonic Assembly. All rights reserved.</p>
                <div className="footer-legal">
                    <Link to="/privacy">Privacy Policy</Link>
                    <Link to="/terms">Terms</Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;