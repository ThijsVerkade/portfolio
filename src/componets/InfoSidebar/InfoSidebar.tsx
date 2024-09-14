import { FC, JSX, useState } from 'react';
import {
    RiFolder3Fill,
    RiArrowRightSLine,
    RiArrowDownSLine,
    RiArrowDownSFill,
    RiArrowDropRightFill,
    RemixiconComponentType
} from '@remixicon/react'
import './InfoSidebar.css';

interface MenuItem {
    title: string;
    colorDir: string;
    subItems?: string[];
    icon?: JSX.Element;
}

interface SidebarMenuProps {
    title: string;
    menuItems: MenuItem[];
}

const InfoSidebar: FC<SidebarMenuProps> = ({ title, menuItems }) => {
    const [openSections, setOpenSections] = useState<{ [key: number]: boolean }>({});

    const toggleSection = (index: number) => {
        setOpenSections((prevState) => ({
            ...prevState,
            [index]: !prevState[index],
        }));
    };

    return (
        <div className="info-sidebar">
            <div className="info-sidebar__header"><span><RiArrowDownSFill/></span> {title}</div>

            {menuItems.map((item, index) => (
                <div key={index} className="info-sidebar__item">
                    <div
                        className="info-sidebar__title"
                        onClick={() => toggleSection(index)}
                    >
                        {
                            item.subItems
                                ? <span>{openSections[index] ? <RiArrowDownSLine/> : <RiArrowRightSLine/>}</span>
                                : ''
                        }
                        <span style={{color: item.colorDir}}>{item.icon ? item.icon : <RiFolder3Fill/>}</span> {item.title}
                    </div>
                    {openSections[index] && item.subItems && (
                        <div className="info-sidebar__content">
                            {item.subItems.map((subItem, subIndex) => (
                                <div key={subIndex} className="info-sidebar__sub-item">
                                    <span><RiArrowDropRightFill/></span>
                                    {subItem}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default InfoSidebar;
