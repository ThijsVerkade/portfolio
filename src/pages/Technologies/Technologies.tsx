import { FC } from 'react';
import './Technologies.css';
import { Helmet } from 'react-helmet';

interface Technology {
    name: string;
    level: string;
    width: string;
}

const technologies: Technology[] = [
    { name: 'Html', level: 'Advanced', width: '80%' },
    { name: 'CSS, Sass & Bootstrap', level: 'Advanced', width: '75%' },
    { name: 'JavaScript, TypeScript, JQuery', level: 'Advanced', width: '75%' },
    { name: 'UI design in Figma', level: 'Regular', width: '60%' },
    { name: 'Angular', level: 'Beginner', width: '50%' },
    { name: 'React', level: 'Beginner', width: '45%' },
    { name: 'React Native', level: 'Beginner', width: '40%' },
];

const additionalSkills: string[] = [
    'Git', 'Quick learning', 'RWD', 'Wordpress', 'Engagement', 'Teamwork', 'B2 english'
];

const Technologies: FC = () => {
    return (
        <>
            <Helmet>
                <title>Technologies - Your Website Name</title>
                <meta name="description" content="Explore the various technologies and skills including HTML, CSS, JavaScript, and more that we excel in." />
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "ItemList",
                        "itemListElement": technologies.map((tech, index) => ({
                            "@type": "ListItem",
                            "position": index + 1,
                            "name": tech.name,
                            "description": tech.level
                        })).concat(additionalSkills.map((skill, index) => ({
                            "@type": "ListItem",
                            "position": technologies.length + index + 1,
                            "name": skill,
                            "description": "Additional Skill"
                        })))
                    })}
                </script>
            </Helmet>
            <div className="technologies">
                <header>
                    <h1 className="technologies__title">Technologies</h1>
                </header>
                <section className="technologies__list">
                    {technologies.map((tech, index) => (
                        <article className="technology" key={index}>
                            <header className="technology__header">
                                <span className="technology__level-text">{tech.level}</span>
                                <span className="technology__name">{tech.name}</span>
                            </header>
                            <div className="technology__bar">
                                <div className="technology__level" style={{ width: tech.width }}></div>
                            </div>
                        </article>
                    ))}
                </section>
                <h2 className="technologies__subtitle">Additional Technologies and Skills</h2>
                <section className="technologies__skills">
                    {additionalSkills.map((skill, index) => (
                        <span className="skill" key={index}>{skill}</span>
                    ))}
                </section>
            </div>
        </>
    );
};

export default Technologies;
