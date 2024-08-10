import {FC} from 'react';
import './AboutMe.css';

interface AboutMeEvent {
    year: string;
    description: string;
}

const aboutMeEvents: AboutMeEvent[] = [
    { year: '2018', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { year: '2019', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { year: '2020', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { year: '2021', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
];

const AboutMe: FC = () => {
    return (
        <div className="about-me">
            <h1 className="about-me__title">About me</h1>
            <div className="about-me__container">
                {aboutMeEvents.map((event, index) => {
                    const isFirst = index === 0;
                    const isLast = index === aboutMeEvents.length - 1;

                    return (
                        <div className="about-me__event" key={index}>
                            <h2 className="about-me__year">{event.year}</h2>
                            <div className="about-me__circle"></div>
                            <div className={`about-me__line ${isFirst ? 'about-me__line--first' : ''} ${isLast ? 'about-me__line--last' : ''}`}></div>
                            <div className="about-me__content">
                                <p className="about-me__description">{event.description}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default AboutMe;
