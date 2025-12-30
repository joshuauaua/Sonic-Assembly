import React from 'react';
import './ClientLogos.css';

// Import logos directly
import logoEu from '../assets/logo_white_eu.png';
import logoFujifilm from '../assets/logo_white_fujifilm.png';
import logoGoethe from '../assets/logo_white_goethe.png';
import logoGoogle from '../assets/logo_white_google.png';
import logoMbb from '../assets/logo_white_mbb.png';
import logoMittuniversitet from '../assets/logo_white_mittuniversitet.png';
import logoPolar from '../assets/logo_white_polar.png';

const ClientLogos = () => {
    // Array of logo objects for easy mapping
    const logos = [
        { src: logoEu, alt: "European Union" },
        { src: logoFujifilm, alt: "Fujifilm" },
        { src: logoGoethe, alt: "Goethe Institut" },
        { src: logoGoogle, alt: "Google" },
        { src: logoMbb, alt: "Medienboard Berlin-Brandenburg" },
        { src: logoMittuniversitet, alt: "Mittuniversitetet" },
        { src: logoPolar, alt: "Polar Music Prize" }
    ];

    return (
        <div className="client-logos-container">
            <div className="logos-grid">
                {logos.map((logo, index) => (
                    <div key={index} className="logo-item">
                        <img src={logo.src} alt={logo.alt} loading="lazy" />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ClientLogos;
