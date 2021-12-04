import { Link } from 'react-router-dom';
import './Header.css';

export default function Header() {
    return (
        <>
        <header>
            <Link to="/"><h1 className="header-title">Hire Hunters</h1></Link>
            <nav>
                <ul className="nav-items">
                    <li className="nav-item"><Link to="/">Home</Link></li>
                    <li className="nav-item"><Link to="/jobs">Jobs</Link></li>
                    <li className="nav-item"><Link to="/login">Login</Link></li>
                    <li className="nav-item"><Link to="/register">Register</Link></li>
                    <li className="nav-item"><Link to="/profile">Profile</Link></li>
                    <li className="nav-item"><Link to="/logout">Logout</Link></li>
                    <li className="nav-item"><Link to="/about">About</Link></li>
                </ul>
            </nav>
        </header>
        </>
    )
}