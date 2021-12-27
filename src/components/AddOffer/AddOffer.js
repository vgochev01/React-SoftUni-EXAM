import { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {AuthContext} from '../../contexts/AuthContext';
import * as jobsService from '../../services/jobsService';
import './AddOffer.css';

export default function AddOffer() {

    const [err, setError] = useState(null);
    const [categories, setCategories] = useState([]);

    const navigate = useNavigate();
    const { user } = useContext(AuthContext);

    useEffect(() => {
        if(user == null){
            navigate(`/login?returnurl=${encodeURIComponent('/new-offer')}`);
        } else {
            jobsService.getCategories()
            .then(data => setCategories(data));
        }
    }, [user]);

    function onAdd(ev) {
        ev.preventDefault();
        const inputData = Object.fromEntries(new FormData(ev.currentTarget));
        jobsService.postOffer(inputData, user.accessToken)
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
            <section id="create">
                <article className="create-header">
                    <h1>Add your Job Offer</h1>
                    <p>and find the best candidates</p>
                </article>

                { err != null 
                ? <article className="errorMsg">
                    <span>{err}</span>
                  </article>
                : ''
                }

                <article className='create-form-container'>
                    <form onSubmit={onAdd} className="createForm">
                        <div className="formGroup">
                            <label htmlFor="position">Position:</label>
                            <input type="text" id="position" name="positionName" />
                        </div>
                        <div className="formGroup">
                            <label htmlFor="company">Company:</label>
                            <input type="text" id="company" name="company" />
                        </div>
                        <div className="formGroup">
                            <label htmlFor="category">Category:</label>
                            <select id="category" name="category">
                                {categories ?
                                categories.map((category) => <option key={category[0].catId} value={category[0].value}>{category[1]}</option>)
                                : ''
                                }
                            </select>
                        </div>
                        <div className="formGroup">
                            <label htmlFor="jobDescription">Description:</label>
                            <textarea id="jobDescription" name="jobDescription">

                            </textarea>
                        </div>
                        <div className="formGroup">
                            <label htmlFor="location">Location:</label>
                            <input type="text" id="location" name="location" />
                        </div>
                        <div className="formGroup">
                            <label htmlFor="companyLogo">Company Logo URL:</label>
                            <input type="text" id="companyLogo" name="companyLogo" />
                        </div>
                        <div className="formGroup">
                            <label htmlFor="salary">Salary (EUR):</label>
                            <input type="number" id="salary" name="salary" />
                        </div>
                        <div className="formGroup">
                            <button className="submitBtn">Add now <i className="fas fa-chevron-right"></i></button>
                        </div>
                        <article className="create-footer">
                            <p>You can go to your <Link className="profile-link" to="/profile">Profile</Link> to see all your offers,</p>
                        </article>
                    </form>
                </article>
                
                
            </section>
        </>
    )
}