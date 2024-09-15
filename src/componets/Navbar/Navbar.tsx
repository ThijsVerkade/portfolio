import { FC } from 'react';
import {Link, useLocation} from 'react-router-dom';
import './Navbar.css';

interface NavbarProps {
    onLinkClick: (path: string) => void; // Function to handle link clicks
}

const Navbar: FC<NavbarProps> = ({ onLinkClick }) => {
    const location = useLocation();

    const navItems = [
        { path: '/', label: '_hello' },
        { path: '/about-me', label: '_about-me' },
        { path: '/projects', label: '_projects' },
    ];

    return (
        <nav className="navbar">
            <div className="navbar__title">thijs-verkade</div>
            <ul className="navbar__list">
                {navItems.slice(0, 3).map((item) => (
                    <li key={item.path}
                        onClick={() => onLinkClick(item.path)}
                        className={`navbar__item ${location.pathname === item.path ? 'navbar__item--active' : ''}`}>
                        <a
                            className="navbar__link"
                        >
                            {item.label}
                        </a>
                    </li>
                ))}
            </ul>
            <div className={`navbar__contact ${location.pathname === '/contact' ? 'navbar__contact--active' : ''}`}
                 onClick={() => onLinkClick('/contact')}>
                <a
                    className="navbar__link"
                >
                    _contact-me
                </a>
            </div>
        </nav>
    );
};

export default Navbar;
