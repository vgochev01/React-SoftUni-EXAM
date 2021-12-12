import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthContext from '../../contexts/AuthContext';
import * as authService from '../../services/authService';
import './Login.css';

export default function Login() {

    const [err, setError] = useState(null);

    const navigate = useNavigate();
    const { setUser } = useContext(AuthContext);

    function onLogin(ev) {
        ev.preventDefault();
        const { email, password } = Object.fromEntries(new  FormData(ev.currentTarget));
        authService.login(email, password)
            .then(data => {
                setUser(data);
                navigate('/');
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
                            <i className="inputIcon fas fa-user"></i>
                            <input type="text" id="email" name="email" placeholder='email@example.com' />
                        </div>
                        <div className="formGroup">
                            <label htmlFor="password">Password:</label>
                            <i className="inputIcon fas fa-lock"></i>
                            <input type="password" id="password" name="password" placeholder="********" />
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