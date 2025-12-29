import React from 'react';
import './mission-statement.css';

const MissionStatement = () => {
    return (
        <section className="mission-section" aria-label="Mission Statement">
            <div className="mission-container">
                <h2 className="mission-text">
                    We engineer digital experiences that <span className="mission-accent">resonate</span> with purpose and precision.
                </h2>
            </div>
        </section>
    );
};

export default MissionStatement;
