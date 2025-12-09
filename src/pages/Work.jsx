const works = [
    { id: 1, title: 'Project One', image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2340&auto=format&fit=crop' },
    { id: 2, title: 'Project Two', image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=3374&auto=format&fit=crop' },
    { id: 3, title: 'Project Three', image: 'https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&w=3270&auto=format&fit=crop' },
    { id: 4, title: 'Project Four', image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=3270&auto=format&fit=crop' },
    { id: 5, title: 'Project Five', image: 'https://images.unsplash.com/photo-1593697972466-93033d596a5a?q=80&w=3270&auto=format&fit=crop' },
    { id: 6, title: 'Project Six', image: 'https://images.unsplash.com/photo-1506157786151-b8491531f063?q=80&w=3270&auto=format&fit=crop' },
];

const Work = () => {
    return (
        <div style={{ paddingTop: '80px', paddingLeft: '3rem', paddingRight: '3rem', paddingBottom: '3rem' }}>
            <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fill, minmax(400px, 1fr))', 
                gap: '2rem' 
            }}>
                {works.map((work) => (
                    <div key={work.id} style={{ cursor: 'pointer', group: 'group' }}>
                        <div style={{ 
                            width: '100%', 
                            aspectRatio: '16/9', 
                            overflow: 'hidden',
                            marginBottom: '1rem'
                        }}>
                            <img 
                                src={work.image} 
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
                ))}
            </div>
        </div>
    );
};

export default Work;
