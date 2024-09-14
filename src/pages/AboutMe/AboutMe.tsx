import {FC} from 'react';
import './AboutMe.css';
import { Helmet } from 'react-helmet';
import {
    RiTerminalBoxFill,
    RiUser4Fill,
    RiGamepadFill,
    RiPhoneFill,
    RiMailFill
} from '@remixicon/react';
import InfoSidebar from "../../componets/InfoSidebar/InfoSidebar";
import VerticalSidebar from "../../componets/VerticalSidebar/VerticalSidebar";
import TabBar from "../../componets/TabBar/TabBar";

const personalInfoMenuItems = [
    {
        title: 'bio',
        colorDir: '#E99287',
        subItems: ['Interests'],
    },
    {
        title: 'interests',
        colorDir: '#43D9AD',
        subItems: ['High School', 'University'],
    },
    {
        title: 'education',
        colorDir: '#3A49A4',
        subItems: ['user@gmail.com', '+3598246359'],
    },
];


const contactInfoMenuItems = [
    {
        title: 'user@gmail.com',
        colorDir: '#607B96',
        icon: <RiMailFill/>
    },
    {
        title: '+316123123123',
        colorDir: '#607B96',
        icon: <RiPhoneFill/>
    },
];


const toolbarItems = [
    {
        icon: RiTerminalBoxFill,
        label: 'Terminal',
        onClick: () => alert('Terminal clicked'),
    },
    {
        icon: RiUser4Fill,
        label: 'User Profile',
        onClick: () => alert('User Profile clicked'),
    },
    {
        icon: RiGamepadFill,
        label: 'Games',
        onClick: () => alert('Games clicked'),
    },
];

const tabs = [
    {
        id: '1',
        title: 'personal-info',
        onClick: () => console.log('Clicked personal-info'),
    },
    {
        id: '2',
        title: 'projects',
        onClick: () => console.log('Clicked projects'),
    },
    {
        id: '3',
        title: 'settings',
        onClick: () => console.log('Clicked settings'),
    },
];


const AboutMe: FC = () => {
    return (
        <>
            <Helmet>
                <title>About Me - Your Website Name</title>
                <meta name="description" content="Learn more about me, my experiences and milestones over the years." />

            </Helmet>
            <div className="about-me">
                <div className="about-me__sidebar">
                    <VerticalSidebar toolbarItems={toolbarItems}/>
                    <div className="about-me__info">
                        <InfoSidebar title="personal-info" menuItems={personalInfoMenuItems}/>
                        <InfoSidebar title="contacts" menuItems={contactInfoMenuItems}/>
                    </div>
                </div>
                <TabBar tabs={tabs}/>
            </div>
        </>
    );
};

export default AboutMe;
