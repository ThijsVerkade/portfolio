import { FC } from 'react';
import './Home.css';
import { Helmet } from 'react-helmet';
import Intro from "../../componets/Intro/Intro";

const Home: FC = () => {
    return (
        <>
            <Helmet>
                <title>Home - Your Website Name</title>
                <meta name="description" content="Welcome to our website. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
            </Helmet>
            <div className="home">
                <Intro/>
            </div>
        </>
    );
};

export default Home;
