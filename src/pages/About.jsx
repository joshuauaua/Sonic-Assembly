const About = () => {
    return (
        <div style={{ 
            height: '100vh', 
            display: 'flex', 
            flexDirection: 'column', 
            justifyContent: 'center', 
            padding: '0 3rem' 
        }}>
            <div style={{ maxWidth: '800px' }}>
                <p style={{ 
                    fontSize: '1.5rem', 
                    lineHeight: '1.6', 
                    marginBottom: '2rem' 
                }}>
                    Sonic Assembly is a creative sound studio based in Stockholm, founded by...
                </p>
                
                <p style={{ 
                    fontSize: '1.2rem', 
                    lineHeight: '1.6', 
                    marginBottom: '4rem',
                    color: '#888'
                }}>
                    We specialize in sound design, music composition, and audio post-production for film, television, and advertising.
                </p>

                <div>
                    <a href="mailto:hello@sonicassembly.se" style={{ 
                        fontSize: '2rem', 
                        textDecoration: 'underline',
                        textUnderlineOffset: '8px'
                    }}>
                        hello@sonicassembly.se
                    </a>
                </div>
                
                <div style={{ marginTop: '2rem' }}>
                    <p>Bondegatan 21</p>
                    <p>116 33 Stockholm</p>
                </div>
            </div>
        </div>
    );
};

export default About;
