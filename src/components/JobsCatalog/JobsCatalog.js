import { Link, useNavigate } from 'react-router-dom';
import './JobsCatalog.css';

import Loader from '../Loader/';
import { useEffect, useState } from 'react';
import * as jobService from '../../services/jobsService';

import JobsCatalogCard from '../JobsCatalogCard/JobsCatalogCard';

export default function JobsCatalog() {
    const [jobs, setJobs] = useState(null);

    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            jobService.get()
            .then(data => setJobs(data))
            .catch((err) => {
                console.error(err);
                navigate('/');
            });
        }, 2000);
    }, []);

    let jobsTemplate = (
        <p className='empty-catalog'>Our catalog is empty. Be the first to post a job offer on our app!</p>
    );

    if(jobs != null && jobs.length > 0){
        jobsTemplate = (
            jobs.map(job => <JobsCatalogCard key={job._id} job={job} />)
        );
    }

    return (
        <>
            <section id="catalog">
                <article className="catalog-header">
                    <span>Let's make your next great hire. Fast.</span>
                    <p>You know who you're looking for. We'll help you find them.</p>
                    <Link to="/new-offer">Post a job <i className='fas fa-chevron-right'></i></Link>
                </article>

            <article className="catalog-container">
                { 
                !jobs ? 
                    <Loader />
                :
                    jobsTemplate
                }
            </article>
            </section>
        </>
    )
}