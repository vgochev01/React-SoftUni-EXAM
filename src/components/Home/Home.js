import { Link } from 'react-router-dom';
import './Home.css';

export default function Header() {
    return (
        <>
        <section id="home">
            <article class="home-img-container">
                <img class="home-img" src="/images/home-img.jpg" alt="Image" />
            </article>

            <article class="home-right-container">
                <article class="right-container-textwrapper">
                    <h1 className="home-title">Find a Job You Love!</h1>
                    <p>Explore our job offers catalog or if you are an Employer create your own!</p>
                    <article className="homeButtons">
                        <Link to="/login" className="homeButton">Get Started</Link>
                    </article>
                </article>
            </article>
        </section>
        </>
    )
}