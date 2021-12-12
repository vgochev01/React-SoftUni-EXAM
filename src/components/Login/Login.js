import { Link } from 'react-router-dom';
import './Login.css';

export default function Login() {
    return (
        <>
            <section id="login">
                <article className="login-header">
                    <h1>Sign In</h1>
                    <p>and start using full functionality</p>
                </article>

                <article className='login-form-container'>
                    <form className="loginForm">
                        <div className="formGroup">
                            <label htmlFor="email">Email:</label>
                            <i class="inputIcon fas fa-user"></i>
                            <input type="text" id="email" name="email" placeholder='email@example.com' />
                        </div>
                        <div className="formGroup">
                            <label htmlFor="password">Password:</label>
                            <i class="inputIcon fas fa-lock"></i>
                            <input type="password" id="password" name="password" placeholder="********" />
                        </div>
                        <div className="formGroup">
                            <button className="submitBtn">Log in now <i class="fas fa-chevron-right"></i></button>
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