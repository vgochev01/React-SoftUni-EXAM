import { useContext, useEffect, useState } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import {AuthContext} from '../../contexts/AuthContext';
import * as authService from '../../services/authService';
import './Login.css';

export default function Login() {

    const [err, setError] = useState(null);

    const navigate = useNavigate();
    const { user, setUser } = useContext(AuthContext);
    const [searchParams, setSearchParams] = useSearchParams();

    const returnurl = searchParams.get('returnurl');

    useEffect(() => {
        if(user != null){
            navigate('/');
        }
    }, []);

    function onLogin(ev) {
        ev.preventDefault();
        const { email, password } = Object.fromEntries(new  FormData(ev.currentTarget));
        authService.login(email, password)
            .then(data => {
                setUser(data);
                navigate(returnurl ? decodeURIComponent(returnurl) : '/');
            })
            .catch(err => {
                setError(err.message);
            });
    }

    return (
        <>
            <section id="login">
                <article className="login-header">
                    <h1>Sign In</h1>
                    <p>and start using full functionality</p>
                </article>

                { err != null 
                ? <article className="errorMsg">
                    <span>{err}</span>
                  </article>
                : ''
                }

                <article className='login-form-container'>
                    <form onSubmit={onLogin} className="loginForm">
                        <div className="formGroup">
                            <label htmlFor="email">Email:</label>
                            <div><i className="inputIcon fas fa-user"></i><input type="text" id="email" name="email" placeholder='email@example.com' /></div>
                        </div>
                        <div className="formGroup">
                            <label htmlFor="password">Password:</label>
                            <div><i className="inputIcon fas fa-lock"></i><input type="password" id="password" name="password" placeholder="********" /></div>
                        </div>
                        <div className="formGroup">
                            <button className="submitBtn">Log in now <i className="fas fa-chevron-right"></i></button>
                        </div>
                    </form>
                </article>

                <article className="login-footer">
                    <p>Don't have an account? <Link className="signup-text" to="/register">Sign up</Link></p>
                </article>
            </section>
        </>
    )
}