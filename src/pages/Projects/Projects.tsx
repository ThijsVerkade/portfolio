import { FC } from 'react';
import './Projects.css';
import { Helmet } from 'react-helmet';
// @ts-ignore
import example from '../../assets/example.png';

export interface Project {
    title: string;
    description: string;
    picture: string;
}

const projects: Project[] = [
    { title: 'PROJECT 1', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', picture: example},
    { title: 'PROJECT 2', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', picture: example },
    { title: 'A bit longer title for 3rd project', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', picture: example },
    { title: 'PROJECT 4', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', picture: example },
    { title: 'PROJECT 4', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', picture: example },
    { title: 'PROJECT 4', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', picture: example },
    { title: 'PROJECT 4', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', picture: example },
];

const Projects: FC = () => {
    return (
        <>
            <Helmet>
                <title>Projects</title>
                <meta name="description" content="Browse through our various projects including PROJECT 1, PROJECT 2, and more. Each project is described in detail with images." />
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "ItemList",
                        "itemListElement": projects.map((project, index) => ({
                            "@type": "ListItem",
                            "position": index + 1,
                            "name": project.title,
                            "description": project.description,
                            "image": project.picture
                        }))
                    })}
                </script>
            </Helmet>
            <div className="projects">
                <header>
                    <h1 className="projects__title">Projects</h1>
                </header>
                <section className="projects__list">
                    {projects.map((project, index) => (
                        <article className="project-card" key={index}>
                            <img src={project.picture} alt={project.title} className="project-card__image"/>
                            <header>
                                <h2 className="project-card__title">{project.title}</h2>
                            </header>
                            <div className="projects-card__line"></div>
                            <p className="project-card__description">{project.description}</p>
                            <button className="project-card__button">Look it up</button>
                        </article>
                    ))}
                </section>
            </div>
        </>
    );
};

export default Projects;
