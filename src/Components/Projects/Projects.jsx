import React, { useState } from 'react';
import './Projects.css';

const projects = [
  {
    id: 1,
    title: 'UBS Online Banking',
    image: '/public/images/bank.jpg',
    description: 'UBS Banking Application for managing financial services.',
    details: 'Developed and maintained UI for Infosys client (UBS Banking Project) using React.js, TypeScript, Redux, and Zustand. - Designed reusable components, optimizing application performance and reducing load times. - Collaborated with teams for seamless API integration and responsive design. - Conducted user research to inform design decisions.',
  },
  
   {
    id: 2,
    title: 'Westpac Digital Banker',
    image: '/public/images/bank.jpg',
    description: 'Westpac Banking Application for managing financial services.',
    details: 'Developed and maintained UI for Infosys client (Westpac Banking Project) using React.js, TypeScript, Redux, and Bootstrap. - Designed reusable components, optimizing application performance and reducing load times. - Collaborated with teams for seamless API integration and responsive design. - Conducted user research to inform design decisions.',
  },
  {
    id: 3,
    title: 'Danata Airlines Project',
    image: '/public/images/folder.jpg',
    description: 'Ticket booking and management system for Danata Airlines',
    details: 'Developed and maintained UI for Coforge client (Danata Airlines Project) using React.js, TypeScript, Redux, and Bootstrap. - Contributed to UI development projects focusing on responsiveness and enhancing user experience. - Actively participated in Agile Scrum processes for timely delivery.',
  },
  {
    id: 4,
    title: 'WeGiver',
    image: '/public/images/folder.jpg',
    description: 'WeGiver Platform for managing charitable donations.',
    details: 'Developed and maintained UI WeGiver Project using React.js, TypeScript, Redux. - Designed reusable components, optimizing application performance and reducing load times. - Collaborated with other teams. - Conducted user research to inform design decisions.',
  },
  {
    id: 5,
    title: 'Portfolio Website',
    image: '/public/images/portfolio-.jpg',
    description: 'A modern portfolio website built with React and Tailwind CSS.',
    details: 'This project showcases my personal portfolio, including my skills, projects, and contact information. Built with React, Tailwind CSS, and deployed on Vercel.',
  }
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section className="projects-section" id='projects'>
      <h2 className="projects-title" >My Projects</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <div
            className="project-card"
            key={project.id}
            onClick={() => setSelectedProject(project)}
          >
            <img src={project.image} alt={project.title} className="project-image" />
            <h3 className="project-name">{project.title}</h3>
            <p className="project-desc">{project.description}</p>
          </div>
        ))}
      </div>

      {/* Modal for project details */}
      {selectedProject && (
        <div className="project-modal" onClick={() => setSelectedProject(null)}>
          <div className="project-modal-content" onClick={e => e.stopPropagation()}>
            <img src={selectedProject.image} alt={selectedProject.title} className="project-modal-image" />
            <h3>{selectedProject.title}</h3>
            <p>{selectedProject.details}</p>
            <button className="close-btn" onClick={() => setSelectedProject(null)}>Close</button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;