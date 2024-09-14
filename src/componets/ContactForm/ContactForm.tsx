import {FC} from 'react';
import './ContactForm.css';

const ContactForm: FC = () => {
    return (
        <form className="contact-form">
            <div className="contact-form__group">
                <label htmlFor="name" className="contact-form__label">_name:</label>
                <input type="text" id="name" className="contact-form__input" placeholder="Jonathan Davis" />
            </div>
            <div className="contact-form__group">
                <label htmlFor="email" className="contact-form__label">_email:</label>
                <input type="email" id="email" className="contact-form__input" placeholder="Your Email" />
            </div>
            <div className="contact-form__group">
                <label htmlFor="message" className="contact-form__label">_message:</label>
                <textarea id="message" className="contact-form__textarea" placeholder="Your Message"></textarea>
            </div>
            <button type="submit" className="contact-form__button">submit-message</button>
        </form>
    );
};

export default ContactForm;
