import JobsCatalogCard from "../JobsCatalogCard/JobsCatalogCard";
import Loader from "../Loader";

import './CatalogContainer.css';

export default function CatalogContainer({ jobs }) {

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
            <article className="catalog-container">
                { 
                jobs == null ? 
                    <Loader />
                :
                    jobsTemplate
                }
            </article>
        </>
    )
}