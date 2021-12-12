import { Link } from 'react-router-dom';
import './Register.css';
import * as authService from '../../services/authService';
import { useState } from 'react';

export default function Login() {

    const [err, setError] = useState(null);

    function onRegister(ev) {
        ev.preventDefault();
        const { email, username, password } = Object.fromEntries(new  FormData(ev.currentTarget));
        authService.register(email, username, password)
            .then(data => {
                console.log(data);
            })
            .catch(err => {
                setError(err.message);
                
            });
    }

    return (
        <>
            <section id="register">
                <article className="register-header">
                    <h1>Sign Up</h1>
                    <p>and start using full functionality</p>
                </article>

                { err != null 
                ? <article className="errorMsg">
                    <span>{err}</span>
                  </article>
                : ''
                }
                

                <article className='register-form-container'>
                    <form onSubmit={onRegister} className="registerForm">
                        <div className="formGroup">
                            <label htmlFor="email">Email:</label>
                            <i class="inputIcon fas fa-envelope"></i>
                            <input type="text" id="email" name="email" placeholder='email@example.com' />
                        </div>
                        <div className="formGroup">
                            <label htmlFor="username">Username:</label>
                            <i class="inputIcon fas fa-user"></i>
                            <input type="text" id="username" name="username" placeholder='username' />
                        </div>
                        <div className="formGroup">
                            <label htmlFor="password">Password:</label>
                            <i class="inputIcon fas fa-lock"></i>
                            <input type="password" id="password" name="password" placeholder="********" />
                        </div>
                        <div className="formGroup">
                            <button className="submitBtn">Sign up now <i class="fas fa-chevron-right"></i></button>
                        </div>
                    </form>
                </article>

                <article className="register-footer">
                    <p>Have an account? <Link className="signin-text" to="/login">Log in</Link></p>
                </article>
            </section>
        </>
    )
}