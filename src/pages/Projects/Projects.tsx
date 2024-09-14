import { FC } from 'react';
import './Projects.css';
import { Helmet } from 'react-helmet';
import {
    RiReactjsFill,
    RiHtml5Fill,
    RiCss3Fill,
    RiVuejsFill,
    RiAngularjsFill,
    RiGatsbyFill,
    RiFlutterFill, RiTerminalBoxFill, RiUser4Fill, RiGamepadFill,
} from '@remixicon/react';
// @ts-ignore
import example from '../../assets/example.png';
import InfoSidebar from "../../componets/InfoSidebar/InfoSidebar";
import ProjectsSidebar from "../../componets/ProjectsSidebar/ProjectsSidebar";
import TabBar from "../../componets/TabBar/TabBar";
import ProjectCard from "../../componets/ProjectCard/ProjectCard";

export interface Project {
    title: string;
    description: string;
    picture: string;
}

const projects: Project[] = [
    { title: 'PROJECT 1', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', picture: example},
    { title: 'PROJECT 2', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', picture: example },
    { title: 'A bitt', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', picture: example },
    { title: 'PROJECT 4', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', picture: example },
    { title: 'PROJECT 4', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', picture: example },
    { title: 'PROJECT 4', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', picture: example },
];

const projectsItems = [
    { id: 'react', name: 'React', icon: <RiReactjsFill />, checked: true },
    { id: 'html', name: 'HTML', icon: <RiHtml5Fill />, checked: false },
    { id: 'css', name: 'CSS', icon: <RiCss3Fill />, checked: false },
    { id: 'vue', name: 'Vue', icon: <RiVuejsFill />, checked: true },
    { id: 'angular', name: 'Angular', icon: <RiAngularjsFill />, checked: false },
    { id: 'gatsby', name: 'Gatsby', icon: <RiGatsbyFill />, checked: false },
    { id: 'flutter', name: 'Flutter', icon: <RiFlutterFill />, checked: false },
];

const tabs = [
    {
        id: '1',
        title: 'React; Vue',
        onClick: () => console.log('Clicked projects'),
    },
];


const Projects: FC = () => {
    return (
        <>
            <Helmet>
                <title>Projects</title>
                <meta name="description"
                      content="Browse through our various projects including PROJECT 1, PROJECT 2, and more. Each project is described in detail with images."/>
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
                <ProjectsSidebar projects={projectsItems}/>
                <section className="projects__content">
                    <TabBar tabs={tabs}/>
                    <div className="projects__list">
                        {projects.map((project, index) => (
                            <div key={index} className="projects__list-item">
                                <p className="projects__list-item-title">
                                    <span className="projects__list-item-title-label">Project 3</span> <span className="projects__list-item-title-name">// {project.title}</span>
                                </p>
                                <div className="projects__list-item-content">
                                <ProjectCard
                                    imageUrl={project.picture}
                                    description={project.description}
                                    onButtonClick={() => console.log('View project')}
                                />
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>

        </>
    );
};

export default Projects;
