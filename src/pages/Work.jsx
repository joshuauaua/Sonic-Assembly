import { Link } from 'react-router-dom';
import projectDetails from '../data/project-details';

const Work = () => {
    return (
        <div style={{ paddingTop: '80px', paddingLeft: '3rem', paddingRight: '3rem', paddingBottom: '3rem' }}>
            <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fill, minmax(400px, 1fr))', 
                gap: '2rem' 
            }}>
                {projectDetails.map((work) => (
                    <Link to={`/work/${work.slug}`} key={work.id} style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
                        <div style={{ cursor: 'pointer', group: 'group' }}>
                            <div style={{ 
                                width: '100%', 
                                aspectRatio: '16/9', 
                                overflow: 'hidden',
                                marginBottom: '1rem'
                            }}>
                                <img 
                                    src={work.bannerImage} 
                                    alt={work.title} 
                                    style={{ 
                                        width: '100%', 
                                        height: '100%', 
                                        objectFit: 'cover',
                                        transition: 'transform 0.5s ease'
                                    }}
                                    onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                                    onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                                />
                            </div>
                            <h3 style={{ fontSize: '1.2rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                                {work.title}
                            </h3>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Work;
