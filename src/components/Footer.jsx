
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
                    <p className="footer-tagline">Crafting Sonic Worlds that Resonate.</p>
                </div>
                
                <div className="footer-links">
                    <div className="footer-column">
                        <h4>Explore</h4>
                        <Link to="/work">Work</Link>
                        <Link to="/about">About</Link>
                        <Link to="https://sonicassembly.substack.com/" target="_blank">Blog</Link>
                        <Link to="/privacy">Privacy Policy</Link>
                    </div>

                    <div className="footer-column">
                        <h4>Connect</h4>
                        <a href="mailto:hej@sonicassembly.se">hej@sonicassembly.se</a>
                        <a href="https://se.linkedin.com/company/sonic-assembly" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                        <a href="https://www.instagram.com/sonicassembly/" target="_blank" rel="noopener noreferrer">Instagram</a>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; {currentYear} Sonic Assembly. All rights reserved.</p>
                <div className="footer-legal">
                    <Link to="/privacy">Privacy Policy</Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;