import {FC} from 'react';
import './Intro.css';

const Intro: FC = () => {
    return (
        <div className="intro">
            <p className="intro__text">Hi all, I am</p>
            <h1 className="intro__name">Thijs Verkade</h1>
            <p className="intro__role">&gt; Back-end developer</p>
            <div className="intro__code-snippet">
                <p className="intro__comment">
                    <span className="intro__comment-line">1</span>// complete the game to continue
                </p>
                <p className="intro__comment">
                    <span className="intro__comment-line">2</span>// you can also see it on my Github page
                </p>
                <p className="intro__code">
                    <span className="intro__comment-line">3</span>
                    <span className="intro__keyword">const</span> <span
                    className="intro__variable">githubLink</span> ={' '}
                    <span className="intro__string">"https://github.com/example/url"</span>
                </p>
            </div>
        </div>
    );
};

export default Intro;