import { Link } from 'react-router-dom';

import { useContext } from 'react/cjs/react.development';
import { AuthContext } from '../../contexts/AuthContext';

import './Home.css';


export default function Header() {
    
    const { user } = useContext(AuthContext);

    return (
        <>
        <section id="home">
            <article className="home-img-container">
                <img className="home-img" src="/images/home-img.jpg" alt="Image" />
            </article>

            <article className="home-right-container">
                <article className="right-container-textwrapper">
                    <h1 className="home-title">Find a Job You Love!</h1>
                    <p>Explore our job offers catalog or if you are an Employer create your own!</p>
                    <article className="homeButtons">
                        <Link to={user ? '/jobs' : `/login?returnurl=${encodeURIComponent('/jobs')}`} className="homeButton">Get Started</Link>
                    </article>
                </article>
            </article>
        </section>
        </>
    )
}