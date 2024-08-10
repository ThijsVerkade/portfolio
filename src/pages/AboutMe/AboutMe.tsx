import {FC} from 'react';
import './AboutMe.css';
import { Helmet } from 'react-helmet';

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
        <>
            <Helmet>
                <title>About Me - Your Website Name</title>
                <meta name="description" content="Learn more about me, my experiences and milestones over the years." />
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Person",
                        "name": "Your Name",
                        "description": "Brief description about yourself.",
                        "mainEntityOfPage": {
                            "@type": "WebPage",
                            "@id": "https://www.yourwebsite.com/about-me"
                        },
                        "event": aboutMeEvents.map(event => ({
                            "@type": "Event",
                            "startDate": event.year,
                            "description": event.description
                        }))
                    })}
                </script>
            </Helmet>
            <div className="about-me">
                <header>
                    <h1 className="about-me__title">About Me</h1>
                </header>
                <section className="about-me__container">
                    {aboutMeEvents.map((event, index) => {
                        const isFirst = index === 0;
                        const isLast = index === aboutMeEvents.length - 1;

                        return (
                            <article className="about-me__event" key={index}>
                                <h2 className="about-me__year">{event.year}</h2>
                                <div className="about-me__circle"></div>
                                <div className={`about-me__line ${isFirst ? 'about-me__line--first' : ''} ${isLast ? 'about-me__line--last' : ''}`}></div>
                                <div className="about-me__content">
                                    <p className="about-me__description">{event.description}</p>
                                </div>
                            </article>
                        );
                    })}
                </section>
            </div>
        </>
    );
};

export default AboutMe;
