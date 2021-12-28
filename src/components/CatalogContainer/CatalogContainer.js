import JobsCatalogCard from "../JobsCatalogCard/JobsCatalogCard";
import Loader from "../Loader";

import './CatalogContainer.css';

export default function CatalogContainer({ jobs, emptyMsg }) {

    let jobsTemplate = (
        <p className='empty-catalog'>{emptyMsg}</p>
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