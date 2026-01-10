import React, { useState } from 'react';
import './project-gallery.css';
import projectsData from '../../../data/projects.json';
import ProjectCard from '../../common/ProjectCard';

// Filter only selected projects for the gallery
const projects = projectsData.filter(project => project.selected);

export default function ProjectGallery() {
  const [startIndex, setStartIndex] = useState(0);
  
  const cardsToShow = 3; 

  const nextSlide = () => {
    if (startIndex < projects.length - cardsToShow) {
      setStartIndex(prev => prev + 1);
    } else {
        setStartIndex(0);
    }
  };

  const prevSlide = () => {
    if (startIndex > 0) {
      setStartIndex(prev => prev - 1);
    } else {
        setStartIndex(projects.length - cardsToShow);
    }
  };

  return (
    <div className="project-gallery-container">
      <div className="gallery-content-wrapper">

        <div className="slider-container">
          <div className="slider-track-container">
            <div 
              className="slider-track"
              style={{
                transform: `translateX(calc(-${startIndex} * ((100% + 40px) / ${cardsToShow})))`
              }}
            >
              {projects.map((project) => (
                <div key={project.id} style={{ flex: `0 0 calc((100% - 80px) / ${cardsToShow})` }}> 
                   {/* Note: Inlined flex style here to match calculator logic slightly adjusted for gap 40px */}
                  <ProjectCard project={project} />
                </div>
              ))}
            </div>
          </div>

          <div className="controls-container">
            <button onClick={prevSlide} className="nav-button prev" aria-label="Previous projects">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
            </button>
            <button onClick={nextSlide} className="nav-button next" aria-label="Next projects">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
