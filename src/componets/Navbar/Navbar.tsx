import { FC } from 'react';
import './Navbar.css';

const Navbar: FC = () => {
    return (
        <nav className="navbar">
            <div className="navbar__title">thijs-verkade</div>
            <ul className="navbar__list">
                <li className="navbar__item">
                    <a className="navbar__link" href="/">_hello</a>
                </li>
                <li className="navbar__item">
                    <a className="navbar__link" href="/projects">_about-me</a>
                </li>
                <li className="navbar__item">
                    <a className="navbar__link" href="/technologies">_projects</a>
                </li>
            </ul>
            <div className="navbar__contact">
                <a className="navbar__link" href="/about-me">_contact-me</a>
            </div>
        </nav>
    );
};

export default Navbar;
