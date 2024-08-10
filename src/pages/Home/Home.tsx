import { FC } from 'react';
import './Home.css';
import { Helmet } from 'react-helmet';

const Home: FC = () => {
    return (
        <>
            <Helmet>
                <title>Home - Your Website Name</title>
                <meta name="description" content="Welcome to our website. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
            </Helmet>
            <div className="home">
                <header className="home__header">
                    <h1 className="home__title">Lorem ipsum dolor sit amet</h1>
                    <p className="home__description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <button className="home__button">Let's begin</button>
                </header>
            </div>
        </>
    );
};

export default Home;
