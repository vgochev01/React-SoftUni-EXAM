import { Link } from 'react-router-dom';
import './JobsCatalogCard.css';

export default function JobsCatalogCard({ job }) {
    return (
        <>
            <Link to={`/jobs/${job._id}`}>
            <article className="job-card">
                <article className="job-card-leftside">
                    <h1>{job.positionName} <span>{job.category}</span></h1>
                    <article className='job-card-leftside-down'>
                        <p><i className="fas fa-map-marker-alt"></i> {job.location}</p>
                        <p><i className="fas fa-euro-sign"></i> Salary: {job.salary}</p>
                    </article>
                </article>
                <article className="job-card-rightside">
                    <article className="companylogo-container">
                        <img src={job.companyLogo} alt={job.company} />
                    </article>
                    <p>{job.company}</p>
                </article>
            </article>
            </Link>
        </>
    )
}