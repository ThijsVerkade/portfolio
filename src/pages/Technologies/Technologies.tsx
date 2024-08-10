import { FC } from 'react';
import './Technologies.css';

export interface Technology {
    name: string;
    level: string;
    width: string;
}

interface TechnologiesProps {
    technologies: Technology[];
    additionalSkills: string[];
}

const Technologies: FC<TechnologiesProps> = ({technologies, additionalSkills}) => {
    return (
        <div className="technologies">
            <h1 className="technologies__title">Technologies</h1>
            <div className="technologies__list">
                {technologies.map((tech, index) => (
                    <div className="technology" key={index}>
                        <div className="technology__header">
                            <span className="technology__level-text">{tech.level}</span>
                            <span className="technology__name">{tech.name}</span>
                        </div>
                        <div className="technology__bar">
                            <div className="technology__level" style={{width: tech.width}}></div>
                        </div>
                    </div>
                ))}
            </div>
            <h2 className="technologies__subtitle">Additional technologies and skills</h2>
            <div className="technologies__skills">
                {additionalSkills.map((skill, index) => (
                    <span className="skill" key={index}>{skill}</span>
                ))}
            </div>
        </div>
    );
};

export default Technologies;
