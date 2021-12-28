import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react/cjs/react.development';
import { AuthContext } from '../../contexts/AuthContext';
import * as authService from '../../services/authService';
import CatalogContainer from '../CatalogContainer/';

import './Profile.scss';

export default function Profile() {

    const { user } = useContext(AuthContext);
    const [userData, setUserData] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        if(!user) {
            navigate('/');
            return null;
        }

        authService.getProfile(user.accessToken)
            .then(data => {
                setUserData(data);
            })
            .catch(err => {
                console.log(err);
                navigate('/');
            })
    }, [user]);

    const emptyMsgs = {
        offersCreated: 'You have not posted any job postings yet.',
        offersApplied: 'You have not applied to any jobs yet.'
    }

    return (
        <>
            <section id="profile">
                <article className="profile-header">
                    <h1>{user?.username}'s Profile</h1>
                </article>

                <article className="offers-container">
                    <div>
                        <span>Job Postings You Have Created</span>
                    </div>

                    {userData && <CatalogContainer emptyMsg={emptyMsgs.offersCreated} jobs={userData.offersCreated} />}

                    <div>
                        <span>Job Postings You Have Applied To</span>
                    </div>

                    {userData && <CatalogContainer emptyMsg={emptyMsgs.offersApplied} jobs={userData.offersApplied} />}
                </article>
            </section>
        </>
    )
}