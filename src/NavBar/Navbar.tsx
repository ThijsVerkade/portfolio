import { FC } from 'react';
import './Navbar.css';

const Navbar: FC = () => {
    return (
        <nav className="navbar">
            <div className="navbar__title">My Website</div>
            <ul className="navbar__list">
                <li className="navbar__item">
                    <a className="navbar__link" href="/">Home</a>
                </li>
                <li className="navbar__item">
                    <a className="navbar__link" href="/projects">Projects</a>
                </li>
                <li className="navbar__item">
                    <a className="navbar__link" href="/technologies">Technologies</a>
                </li>
                <li className="navbar__item">
                    <a className="navbar__link" href="/about-me">About me</a>
                </li>
            </ul>
            <div className="navbar__icons">
                <i className="fab fa-linkedin"></i>
            </div>
        </nav>
    );
};

export default Navbar;
