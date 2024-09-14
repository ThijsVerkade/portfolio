import { FC } from 'react';
import './Contact.css';
import { Helmet } from 'react-helmet';
// @ts-ignore
import backgroundImage from '../../assets/background.svg';
import InfoSidebar from "../../componets/InfoSidebar/InfoSidebar";
import {RiLinkedinFill, RiMailFill, RiPhoneFill} from "@remixicon/react";
import TabBar from "../../componets/TabBar/TabBar";
import ContactForm from "../../componets/ContactForm/ContactForm";

const contactInfoMenuItems = [
    {
        title: 'user@gmail.com',
        colorDir: '#607B96',
        icon: <RiMailFill/>
    },
    {
        title: '+31 6123123123',
        colorDir: '#607B96',
        icon: <RiPhoneFill/>
    },
];
const findMeInfoMenuItems = [
    {
        title: 'LinkedIn profile',
        colorDir: '#607B96',
        icon: <RiLinkedinFill/>
    },
];
const tabs = [
    {
        id: '1',
        title: 'Contacts',
        onClick: () => console.log('Clicked projects'),
    },
];

const Contact: FC = () => {
    return (
        <>
            <Helmet>
                <title>Home - Your Website Name</title>
                <meta name="description"
                      content="Welcome to our website. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."/>
            </Helmet>
            <div className="contact">
                <div className="contact__sidebar">
                    <InfoSidebar title="contacts" menuItems={contactInfoMenuItems}/>
                    <InfoSidebar title="find-me-also-in" menuItems={findMeInfoMenuItems}/>
                </div>
                <section className="contact__content">
                    <TabBar tabs={tabs}/>
                    <ContactForm/>
                </section>
            </div>
        </>
    );
};

export default Contact;
