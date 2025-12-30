import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

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
            backgroundColor: 'var(--bg-primary)',
            color: 'var(--text-primary)',
            transition: 'background-color 0.3s ease, color 0.3s ease',
            borderBottom: '1px solid var(--border-color)'
        }}>
            <Link to="/" style={{ 
                fontSize: '1.2rem', 
                fontWeight: 'bold', 
                textTransform: 'uppercase', 
                letterSpacing: '0.05em' 
            }}>
                Sonic Assembly
            </Link>
            
            <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
                <Link to="/work" style={{ textTransform: 'uppercase', fontSize: '0.9rem', letterSpacing: '0.05em' }}>Work</Link>
                <Link to="/about" style={{ textTransform: 'uppercase', fontSize: '0.9rem', letterSpacing: '0.05em' }}>About</Link>
                <ThemeToggle />
            </div>
        </nav>
    );
};

export default Navbar;
