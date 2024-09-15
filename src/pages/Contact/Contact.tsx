import { FC, useState } from 'react';
import './Contact.css';
import { Helmet } from 'react-helmet';
// @ts-ignore
import backgroundImage from '../../assets/background.svg';
import InfoSidebar from "../../componets/InfoSidebar/InfoSidebar";
import { RiLinkedinFill, RiMailFill, RiPhoneFill } from "@remixicon/react";
import TabBar from "../../componets/TabBar/TabBar";
import ContactForm from "../../componets/ContactForm/ContactForm";
import CodeSnippet from '../../componets/CodeSnippet/CodeSnippet'; // Import CodeSnippet

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
    const [formMessage, setFormMessage] = useState({
        name: 'Jonathan Davis',
        email: '',
        message: '',
        date: '',
    });

    // Handle form updates by passing this function to ContactForm
    const updateFormMessage = (newMessage: any) => {
        setFormMessage(newMessage);
    };

    const code = `
const button = document.querySelector('#sendBtn');

const message = {
    name: "${formMessage.name}",
    email: "${formMessage.email}",
    message: "${formMessage.message}",
    date: "${formMessage.date}"
}

button.addEventListener('click', () => {
    form.send(message);
})
`;

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
                    <div className="contact__form-container">
                        <div className="contact__form">
                            <ContactForm updateFormMessage={updateFormMessage} />
                        </div>
                        <CodeSnippet code={code} />
                    </div>
                </section>
            </div>
        </>
    );
};

export default Contact;
