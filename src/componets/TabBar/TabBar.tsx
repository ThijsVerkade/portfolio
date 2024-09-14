import { FC, useState } from 'react';
import './TabBar.css';

interface Tab {
    id: string;
    title: string;
    onClick: () => void; // Function to be called when this tab is clicked
}

interface TabBarProps {
    tabs: Tab[];
}

const TabBar: FC<TabBarProps> = ({ tabs }) => {
    const [activeTab, setActiveTab] = useState<string>(tabs[0]?.id || '');

    // Handle tab selection
    const handleTabClick = (tab: Tab) => {
        setActiveTab(tab.id);
        tab.onClick(); // Call the onClick function passed in props
    };

    return (
        <div className="tab-bar">
            {tabs.map((tab) => (
                <div
                    key={tab.id}
                    className={`tab-bar__tab ${tab.id === activeTab ? 'active' : ''}`}
                    onClick={() => handleTabClick(tab)}
                >
                    <span className="tab-bar__title">{tab.title}</span>
                    <button
                        className="tab-bar__close"
                        onClick={(e) => {
                            e.stopPropagation(); // Prevent triggering the tab click
                            console.log(`Close tab: ${tab.title}`);
                        }}
                    >
                        ✕
                    </button>
                </div>
            ))}
        </div>
    );
};

export default TabBar;
