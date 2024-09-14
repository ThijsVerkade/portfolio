import { FC, JSX, useState } from 'react';
import { RiArrowDownSFill} from '@remixicon/react';
import './ProjectSidebar.css';

interface Project {
    id: string;
    name: string;
    icon: JSX.Element;
    checked: boolean;
}

interface SidebarMenuProps {
    projects: Project[];
}

const SidebarMenu: FC<SidebarMenuProps> = ({ projects: initialProjects }) => {
    const [projects, setProjects] = useState<Project[]>(initialProjects);

    const handleCheckboxChange = (id: string) => {
        setProjects((prevProjects) =>
            prevProjects.map((project) =>
                project.id === id ? { ...project, checked: !project.checked } : project
            )
        );
    };

    return (
        <div className="sidebar-menu">
            <div className="sidebar-menu__header">
                <span><RiArrowDownSFill/></span> projects
            </div>

            <div className="sidebar-menu__content">
                {projects.map((project) => (
                    <div key={project.id} className="sidebar-menu__item">
                        <input
                            type="checkbox"
                            checked={project.checked}
                            onChange={() => handleCheckboxChange(project.id)}
                        />
                        <span className="sidebar-menu__icon">{project.icon}</span>
                        <span className="sidebar-menu__text">{project.name}</span>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default SidebarMenu;
