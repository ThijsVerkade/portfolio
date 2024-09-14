import {FC} from 'react';
import './Footer.css';
import {RiGithubFill, RiLinkedinFill} from "@remixicon/react";

const Footer: FC = () => {
    return (
        <footer className="footer">
            <div className="footer__social-label">find me in:</div>
            <div className="footer__social">
                <a href="#" className="footer__social-link"><RiLinkedinFill/></a>
                <a href="#" className="footer__social-link"><RiGithubFill/></a>
            </div>
            <div className="footer__contact">
                <div className="footer__contact-item">&copy; 2024 IT-Solutions by Thijs. All rights reserved.</div>
            </div>
        </footer>
    );
}

export default Footer;
