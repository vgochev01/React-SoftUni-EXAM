import './JobDetails.css';
import Loader from '../Loader/';

import * as jobsService from '../../services/jobsService';
import { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import DeleteModal from '../DeleteModal/DeleteModal';

export default function JobDetails() {
    const [job, setJob] = useState(null);
    const [isOwner, setIsOwner] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [deleteConfirmed, setDeleteConfirmed] = useState(false);

    const { user } = useContext(AuthContext);
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            jobsService.get(id)
            .then(data => {
                setJob(data);
                if(user) {
                    setIsOwner(user._id == data.owner._id)
                }
            })
            .catch(err => {
                console.error(err);
                navigate('/');
            })
        }, 1000);
    }, []);

    function onDelete(ev) {
        ev.preventDefault();
        setShowDeleteModal(true);
    }

    const ownerActionButtons = (
        <>
            <article>
                <p style={{marginBottom: '7px'}}>Manage Your Job Offer</p>
                <div className="ownerActionBtns">
                    <Link to={`/jobs/${id}/edit`}><button className="ownerActionBtn">Edit</button></Link>
                    <Link onClick={onDelete} to={`/jobs/${id}/delete`}><button className="ownerActionBtn">Delete</button></Link>
                </div>
            </article>
        </>
    )

    return (
        <>
            <section id="details">
                {showDeleteModal ? <DeleteModal setDeleteConfirmed={setDeleteConfirmed} setShowDeleteModal={setShowDeleteModal} /> : ''}
                <article className="details-container">
                    { !job ? <Loader /> : 
                    <>  
                        <article className="details-header">
                            <article className='companylogo-container'>
                                <img src={job.companyLogo} alt={job.company} />
                            </article>
                        </article>

                        <article className='job-infos'>
                            <article className="job-description">
                                <h1>{job.positionName}</h1>
                                <p>{job.jobDescription}</p>
                                <div>
                                    <Link to='/jobs'>Back</Link>
                                    {isOwner ? '' : <button className='applyBtn'>Apply</button> }
                                    
                                </div>
                            </article>
                            <aside>
                                <article>
                                    <p>{job.positionName}</p>
                                    <p>
                                        <i class="fas fa-industry"></i> <span>{job.category}</span>
                                    </p>
                                    <p>
                                        <i className="fas fa-map-marker-alt"></i><span>{job.location}</span>
                                    </p>
                                    <p>
                                        <i className="fas fa-euro-sign"></i><span>{job.salary}</span>
                                    </p>
                                    <p>
                                        <i className="fas fa-user-tie"></i><span>{job.company}</span>
                                    </p>
                                </article>
                                {isOwner ? ownerActionButtons : ''}
                            </aside>
                        </article>
                    </>
                    }
                    
                </article>
            </section>
        </>
    );
}