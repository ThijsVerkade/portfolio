import { FC } from 'react';
import './Projects.css';
import { Helmet } from 'react-helmet';
import {
    RiReactjsFill,
    RiVuejsFill,
    RiCodeBlock,
    RiMailFill,
    RiPhoneFill,
    RiPuzzle2Fill,
    RiMailSendFill,
    RiCloudFill,
    RiCloudyFill, RiCloudyLine, RiSunCloudyFill, RiPencilFill,
} from '@remixicon/react';
// @ts-ignore
import AoCImage from '../../assets/projects/AoC.webp';
// @ts-ignore
import LaravelSqsProcessorImage from '../../assets/projects/laravel-sqs-processor.jpeg';
// @ts-ignore
import WeatherWebAppImage from '../../assets/projects/weather-web-app.jpeg';
// @ts-ignore
import DeveloperPortfolioImage from '../../assets/projects/developer-portfolio.jpeg';
// @ts-ignore
import ChessImage from '../../assets/projects/chess.jpeg';
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
    { title: 'Advent of Code Solver', description: 'This application automatically solves the daily puzzles from Advent of Code. It uses smart algorithms to quickly find the right answers, providing a fast and easy way to tackle each challenge. Perfect for anyone looking to simplify their Advent of Code experience!', picture: AoCImage},
    { title: 'Laravel SQS Listener', description: 'This application listens to AWS SQS queues in real-time, seamlessly integrating with your Laravel app. It automatically processes messages and background jobs, ensuring smooth and efficient handling of asynchronous tasks. Perfect for improving performance and offloading heavy processing in your Laravel application!', picture: LaravelSqsProcessorImage },
    { title: 'Weather web app', description: 'This web app provides weather updates. It features a clean interface, showing current conditions, forecasts, and more. Quickly check the weather anytime, anywhere with just a few clicks!', picture: WeatherWebAppImage },
    { title: 'Portfolio', description: 'This portfolio showcases my skills, projects, and experiences in a clean and interactive way. Explore my work, learn about my background, and get in touch easily. It\'s the perfect way to see what I can do!', picture: DeveloperPortfolioImage },
    { title: 'Chess backend', description: 'This backend application manages the logic for a chess game using event sourcing. Every move is recorded as an event, creating a complete history of the game that can be replayed, analyzed, or rolled back. It provides a robust and flexible way to track the game state, making it perfect for advanced chess analytics and real-time gameplay.', picture: ChessImage },
    { title: 'Chess frontend', description: 'The frontend for the Chess Backend offers an interactive and intuitive interface for playing and analyzing games. It connects seamlessly to the backend, displaying real-time updates and game history. Designed for smooth gameplay, it brings the power of event-sourced data to the user in a simple, user-friendly way.\n', picture: ChessImage },
];

const projectsItems = [
    { id: 'react', name: 'React', icon: <RiReactjsFill />, checked: true },
    { id: 'vue', name: 'Vue', icon: <RiVuejsFill />, checked: true },
    { id: 'php', name: 'PHP', icon: <RiCodeBlock />, checked: false },
];

const projectsMenuItems = [
    {
        title: 'Advent of Code',
        colorDir: '#607B96',
        icon: <RiPuzzle2Fill/>
    },
    {
        title: 'Laravel SQS Processor',
        colorDir: '#607B96',
        icon: <RiMailSendFill/>
    },
    {
        title: 'Weather web app',
        colorDir: '#607B96',
        icon: <RiSunCloudyFill/>
    },
    {
        title: 'Portfolio',
        colorDir: '#607B96',
        icon: <RiPencilFill/>
    },
    {
        title: 'Chess backend',
        colorDir: '#607B96',
        icon: <RiPuzzle2Fill/>
    },
    {
        title: 'Chess frontend',
        colorDir: '#607B96',
        icon: <RiPuzzle2Fill/>
    },
];


const tabs = [
    {
        id: '1',
        title: 'Projects',
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
                <InfoSidebar title="personal-info" menuItems={projectsMenuItems}/>
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
