import {FC} from 'react';
import './Footer.css';

const Footer: FC = () => {
    return (
        <footer className="footer">
            <div className="footer__contact-info">
                <div className="footer__contact-item">&copy; 2024 IT-Solutions by Thijs. All rights reserved.
                </div>
            </div>
            <div className="footer__social-icons">
                <a href="https://your-other-profile.com" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-linkedin"></i>
                </a>
            </div>
        </footer>
    );
}

export default Footer;
