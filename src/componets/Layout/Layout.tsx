import { FC, useEffect, useState } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import './Layout.css';
import {k} from "vite/dist/node/types.d-aGj9QkWt";

const pages: string[] = ['/', '/about-me', '/projects', '/contact'];
const animationDuration = 800; // Duration in milliseconds

const Layout: FC = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [currentPage, setCurrentPage] = useState<number>(0);
    const [pendingPage, setPendingPage] = useState<number | null>(null);
    const [showContent, setShowContent] = useState(true);
    const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('down');

    // Function to handle link clicks
    const handleLinkClick = (path: string) => {
        const targetIndex = pages.indexOf(path);
        if (targetIndex !== -1 && targetIndex !== currentPage) {
            setPendingPage(targetIndex);
            setScrollDirection(targetIndex > currentPage ? 'down' : 'up'); // Determine direction based on target index
            setShowContent(false); // Trigger exit animation
        }
    };

    // Scroll handling
    useEffect(() => {
        const handleScroll = (event: WheelEvent) => {
            if (pendingPage !== null) return;

            if (event.deltaY > 0) {
                // Scroll down
                if (currentPage < pages.length - 1) {
                    setPendingPage(currentPage + 1);
                    setScrollDirection('down');
                    setShowContent(false);
                }
            } else if (event.deltaY < 0) {
                // Scroll up
                if (currentPage > 0) {
                    setPendingPage(currentPage - 1);
                    setScrollDirection('up');
                    setShowContent(false);
                }
            }
        };

        let scrollTimeout: ReturnType<typeof setTimeout> | null = null;
        const handleDebouncedScroll = (event: WheelEvent) => {
            if (scrollTimeout) {
                clearTimeout(scrollTimeout);
            }
            scrollTimeout = setTimeout(() => handleScroll(event), 100);
        };

        window.addEventListener('wheel', handleDebouncedScroll);

        return () => {
            window.removeEventListener('wheel', handleDebouncedScroll);
        };
    }, [currentPage, pendingPage]);

    // Handle pending page change
    useEffect(() => {
        if (pendingPage !== null) {
            const timer = setTimeout(() => {
                setCurrentPage(pendingPage);
                navigate(pages[pendingPage]);
                setPendingPage(null);
                setShowContent(true);
            }, animationDuration);

            return () => clearTimeout(timer);
        }
    }, [pendingPage, navigate]);

    return (
        <>
            <header>
                <Navbar onLinkClick={handleLinkClick} />
            </header>
            <main>
                <AnimatePresence mode="wait">
                    {showContent && (
                        <motion.div
                            key={location.pathname}
                            initial={{
                                opacity: 0,
                                x: scrollDirection === 'down' ? 50 : -50, // Adjust entry direction based on scroll direction
                            }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{
                                opacity: 0,
                                x: scrollDirection === 'down' ? -50 : 50, // Adjust exit direction based on scroll direction
                            }}
                            transition={{ duration: animationDuration / 1000, ease: 'easeInOut' }}
                        >
                            <Outlet />
                        </motion.div>
                    )}
                </AnimatePresence>
            </main>
            <Footer />
        </>
    );
};

export default Layout;
