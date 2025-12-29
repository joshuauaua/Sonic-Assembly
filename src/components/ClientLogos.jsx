import React from 'react';
import './ClientLogos.css';

const ClientLogos = () => {
    return (
        <section className="client-logos-section">
            <div className="client-logos-container">
                <h3 className="client-logos-title">Trusted by Industry Leaders</h3>
                
                <div className="client-logos-grid">
                    {/* Logo 1: Spectra */}
                    <div className="client-logo" title="Spectra">
                        <svg viewBox="0 0 150 40" fill="currentColor">
                            <path d="M20,20 L10,35 L30,35 Z M25,10 L35,25 L15,25 Z" opacity="0.8"/>
                            <text x="45" y="28" fontFamily="Arial" fontWeight="bold" fontSize="20" letterSpacing="2">SPECTRA</text>
                        </svg>
                    </div>

                    {/* Logo 2: Vertex */}
                    <div className="client-logo" title="Vertex">
                        <svg viewBox="0 0 150 40" fill="currentColor">
                            <circle cx="20" cy="20" r="10" opacity="0.6"/>
                            <circle cx="35" cy="20" r="10" opacity="0.9"/>
                            <text x="55" y="28" fontFamily="Arial" fontWeight="bold" fontSize="20" letterSpacing="2">VERTEX</text>
                        </svg>
                    </div>

                    {/* Logo 3: Nexus */}
                    <div className="client-logo" title="Nexus">
                        <svg viewBox="0 0 150 40" fill="currentColor">
                            <rect x="10" y="10" width="20" height="20" rx="5" transform="rotate(45 20 20)" opacity="0.8"/>
                            <text x="45" y="28" fontFamily="Arial" fontWeight="bold" fontSize="20" letterSpacing="2">NEXUS</text>
                        </svg>
                    </div>

                    {/* Logo 4: Flux */}
                    <div className="client-logo" title="Flux">
                        <svg viewBox="0 0 150 40" fill="currentColor">
                            <path d="M10,20 Q20,5 30,20 T50,20" fill="none" stroke="currentColor" strokeWidth="4"/>
                            <text x="60" y="28" fontFamily="Arial" fontWeight="bold" fontSize="20" letterSpacing="2">FLUX</text>
                        </svg>
                    </div>

                    {/* Logo 5: Orbital */}
                    <div className="client-logo" title="Orbital">
                        <svg viewBox="0 0 150 40" fill="currentColor">
                            <ellipse cx="25" cy="20" rx="15" ry="5" transform="rotate(-30 25 20)" stroke="currentColor" strokeWidth="2" fill="none"/>
                            <circle cx="25" cy="20" r="4" />
                            <text x="50" y="28" fontFamily="Arial" fontWeight="bold" fontSize="20" letterSpacing="2">ORBITAL</text>
                        </svg>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ClientLogos;
