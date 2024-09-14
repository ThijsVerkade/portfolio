import { FC } from 'react';
import {RemixiconComponentType} from '@remixicon/react'
import './VerticalSidebar.css';

interface ToolbarItem {
    icon: RemixiconComponentType;
    label?: string;
    onClick: () => void;
}

interface VerticalToolbarProps {
    toolbarItems: ToolbarItem[];
}

const VerticalSidebar:FC<VerticalToolbarProps> = ({ toolbarItems }) =>  {
    return (
        <div className="vertical-toolbar">
            {toolbarItems.map((item, index) => (
                <div
                    key={index}
                    className="toolbar-icon"
                    onClick={item.onClick}
                    title={item.label}
                >
                    <item.icon/>
                </div>
            ))}
        </div>
    );
};

export default VerticalSidebar;
