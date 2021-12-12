import { Link } from 'react-router-dom';
import './Register.css';

export default function Login() {
    return (
        <>
            <section id="register">
                <article className="register-header">
                    <h1>Sign Up</h1>
                    <p>and start using full functionality</p>
                </article>

                <article className='register-form-container'>
                    <form className="registerForm">
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