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
At our core, we are identity shapers. Sonic Assembly was established with the belief that sound plays an essential role in evoking emotion and communicating information—the "special sauce" that transforms the mundane into the magical.


Since 2023, we have brought this vision to sonic life for clients ranging from Google to Mittuniversitet. But as the media landscape evolves, so do we. Sonic Assembly is a creative studio that merges the art of composition with the rigor of code. We specialize in tailored music and sound design, but we distinguish ourselves through technical innovation.





Today, we offer a comprehensive suite of services that spans linear media and interactive tech. From the final mix of a commercial to the Python code powering an audio-reactive installation, we approach every project with passion and fond curiosity.
                </p>
                
                <p style={{ 
                    fontSize: '1.2rem', 
                    lineHeight: '1.6', 
                    marginBottom: '4rem',
                    color: '#888'
                }}>
Our expertise include:
*Composing and scoring for a variety of media, including games and films
*Sound design and SFX for games and films, including foley work and synthesis
*Developing custom VSTs, plugins, and audio-focused software
*Game audio implementation using tools like Wwise, FMOD, Unity, PureData and Max/MSP
*Artistic research in the audio innovation and soundscape space
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
