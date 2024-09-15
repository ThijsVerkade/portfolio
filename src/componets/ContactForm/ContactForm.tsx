import { FC, useEffect, useState } from 'react';
import './ContactForm.css';

interface ContactFormProps {
    updateFormMessage: (message: { name: string; email: string; message: string; date: string }) => void;
}

const ContactForm: FC<ContactFormProps> = ({ updateFormMessage }) => {
    const [formMessage, setFormMessage] = useState({
        name: '',
        email: '',
        message: '',
        date: '',
    });

    useEffect(() => {
        const button = document.querySelector('#sendBtn');

        const handleClick = () => {
            const messageObject = {
                ...formMessage,
                date: new Date().toLocaleDateString('en-GB', { weekday: 'short', day: '2-digit', month: 'short' }),
            };

            console.log('Sending message:', messageObject);
            setFormMessage(messageObject);
            updateFormMessage(messageObject);
        };

        if (button) {
            button.addEventListener('click', handleClick);
        }

        return () => {
            if (button) {
                button.removeEventListener('click', handleClick);
            }
        };
    }, [formMessage, updateFormMessage]);

    const handleInputChange = (field: string, value: string) => {
        const updatedMessage = {
            ...formMessage,
            [field]: value,
        };
        setFormMessage(updatedMessage);
        updateFormMessage(updatedMessage);
    };

    return (
        <form className="contact-form">
            <div className="contact-form__group">
                <label htmlFor="name" className="contact-form__label">_name:</label>
                <input
                    type="text"
                    id="name"
                    className="contact-form__input"
                    value={formMessage.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                />
            </div>
            <div className="contact-form__group">
                <label htmlFor="email" className="contact-form__label">_email:</label>
                <input
                    type="email"
                    id="email"
                    className="contact-form__input"
                    value={formMessage.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                />
            </div>
            <div className="contact-form__group">
                <label htmlFor="message" className="contact-form__label">_message:</label>
                <textarea
                    id="message"
                    className="contact-form__textarea"
                    value={formMessage.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                />
            </div>
            <button type="button" id="sendBtn" className="contact-form__button">submit-message</button>
        </form>
    );
};

export default ContactForm;
