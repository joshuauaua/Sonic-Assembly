import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            padding: '2rem 3rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            zIndex: 100,
            mixBlendMode: 'difference', // Makes text visible on light/dark backgrounds
            color: 'white'
        }}>
            <Link to="/" style={{ 
                fontSize: '1.2rem', 
                fontWeight: 'bold', 
                textTransform: 'uppercase', 
                letterSpacing: '0.05em' 
            }}>
                Sonic Assembly
            </Link>
            
            <div style={{ display: 'flex', gap: '2rem' }}>
                <Link to="/work" style={{ textTransform: 'uppercase', fontSize: '0.9rem', letterSpacing: '0.05em' }}>Work</Link>
                <Link to="/about" style={{ textTransform: 'uppercase', fontSize: '0.9rem', letterSpacing: '0.05em' }}>About</Link>
            </div>
        </nav>
    );
};

export default Navbar;
