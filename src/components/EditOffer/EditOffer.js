import { useContext, useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import {AuthContext} from '../../contexts/AuthContext';
import * as jobsService from '../../services/jobsService';
import Loader from '../Loader';
import './EditOffer.css';

export default function EditOffer() {

    const [err, setError] = useState(null);
    const [job, setJob] = useState(null);
    const [isOwner, setIsOwner] = useState(false);
    const [categories, setCategories] = useState([]);

    const navigate = useNavigate();
    const { id } = useParams();
    const { user } = useContext(AuthContext);

    useEffect(() => {
        if(user == null){
            navigate('/');
        } else {
            jobsService.getCategories()
            .then(data => setCategories(data));

            jobsService.get(id)
            .then(data => {
                setJob(data);
                const isOwner = user._id == data.owner._id
                if(!isOwner){
                    navigate('/');
                }
                setIsOwner(user._id == data.owner._id)
            })
            .catch(err => {
                console.error(err);
                navigate('/');
            })
        }
    }, []);

    function onEdit(ev) {
        ev.preventDefault();

        if(!isOwner){
            return;
        }
        
        const inputData = Object.fromEntries(new FormData(ev.currentTarget));
        jobsService.edit(id, inputData, user.accessToken)
            .then(data => {
                navigate(`/jobs/${data._id}`);
            })
            .catch(err => {
                setError(err.message);
            });
        ;
    }

    return (
        <>
            <section id="edit">
                {job == null ? <Loader /> : 
                    <>
                        <article className="edit-header">
                            <h1>Edit your Job Offer</h1>
                            <p>and find the best candidates</p>
                        </article>

                        { err != null 
                        ? <article className="errorMsg">
                            <span>{err}</span>
                        </article>
                        : ''
                        }

                        <article className='edit-form-container'>
                            <form onSubmit={onEdit} className="editForm">
                                <div className="formGroup">
                                    <label htmlFor="position">Position:</label>
                                    <input type="text" id="position" name="positionName" defaultValue={job.positionName}/>
                                </div>
                                <div className="formGroup">
                                    <label htmlFor="company">Company:</label>
                                    <input type="text" id="company" name="company" defaultValue={job.company}/>
                                </div>
                                <div className="formGroup">
                                    <label htmlFor="category">Category:</label>
                                    <select id="category" name="category">
                                        {categories ?
                                        categories.map((category) => <option key={category[0].catId} value={category[0].value} selected={category[1] == job.category}>{category[1]}</option>)
                                        : ''
                                        }
                                    </select>
                                </div>
                                <div className="formGroup">
                                    <label htmlFor="jobDescription">Description:</label>
                                    <textarea id="jobDescription" name="jobDescription" defaultValue={job.jobDescription}>
                                        
                                    </textarea>
                                </div>
                                <div className="formGroup">
                                    <label htmlFor="location">Location:</label>
                                    <input type="text" id="location" name="location" defaultValue={job.location}/>
                                </div>
                                <div className="formGroup">
                                    <label htmlFor="companyLogo">Company Logo URL:</label>
                                    <input type="text" id="companyLogo" name="companyLogo" defaultValue={job.companyLogo}/>
                                </div>
                                <div className="formGroup">
                                    <label htmlFor="salary">Salary (EUR):</label>
                                    <input type="number" id="salary" name="salary" defaultValue={job.salary}/>
                                </div>
                                <div className="formGroup">
                                    <button className="submitBtn">Edit now <i className="fas fa-chevron-right"></i></button>
                                </div>
                                <article className="edit-footer">
                                    <p>You can go to your <Link className="profile-link" to="/profile">Profile</Link> to see all your offers,</p>
                                </article>
                            </form>
                        </article>
                    </>
                }
            </section>
        </>
    )
}