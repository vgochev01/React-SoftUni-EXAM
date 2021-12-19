import { Link } from 'react-router-dom';
import './JobsCatalog.css';

export default function JobsCatalog() {
    return (
        <>
            <section id="catalog">
                <article className="catalog-header">
                    <span>Let's make your next great hire. Fast.</span>
                    <p>You know who you're looking for. We'll help you find them.</p>
                    <Link to="/new-offer">Post a job <i className='fas fa-chevron-right'></i></Link>
                </article>
            </section>
        </>
    )
}