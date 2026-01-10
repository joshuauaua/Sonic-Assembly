import projectsData from '../data/projects.json';
import ProjectCard from '../components/common/ProjectCard';

import './Work.css';

const Work = () => {
    return (
        <div className="work-container">
            <div className="work-grid">
                {projectsData.filter(p => p.showInWork).map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </div>
    );
};

export default Work;
