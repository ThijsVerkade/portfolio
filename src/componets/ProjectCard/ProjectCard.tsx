import {FC} from 'react';
import { RiReactjsFill } from '@remixicon/react';
import './ProjectCard.css';

interface ProjectCardProps {
    imageUrl: string;
    description: string;
    onButtonClick: () => void;
}

const ProjectCard: FC<ProjectCardProps> = ({ imageUrl, description, onButtonClick }) => {
    return (
        <div className="project-card">
            <div className="project-card__image-container">
                <img src={imageUrl} alt="Project" className="project-card__image" />
                <div className="project-card__icon">
                    <RiReactjsFill />
                </div>
            </div>
            <div className="project-card__content">
                <p className="project-card__description">{description}</p>
                <button className="project-card__button" onClick={onButtonClick}>
                    view-project
                </button>
            </div>
        </div>
    );
};

export default ProjectCard;
