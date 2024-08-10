import { FC } from 'react';
import './Projects.css';

export interface Project {
    title: string;
    description: string;
    picture: string;
}

interface ProjectsProps {
    projects: Project[];
    className?: string;
}

const Projects: FC<ProjectsProps> = ({projects}) => {
    return (
        <div className="projects">
            <h1 className="projects__title">Projects</h1>
            <div className="projects__list">
                {projects.map((project, index) => (
                    <div className="project-card" key={index}>
                        <img src={project.picture} alt={project.title} className="project-card__image"/>
                        <h2 className="project-card__title">{project.title}</h2>
                        <div className="projects-card__line"></div>
                        <p className="project-card__description">{project.description}</p>
                        <button className="project-card__button">Look it up</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
