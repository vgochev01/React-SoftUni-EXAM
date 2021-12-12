import { Link } from 'react-router-dom';
import './Header.css';

export default function Header() {
    return (
        <>
        <header>
            <Link to="/"><h1 className="header-title"><span className="hire">Hire</span> <i class="fas fa-business-time"></i> Hunters</h1></Link>
            <nav>
                <ul className="nav-items">
                    <li className="nav-item"><Link to="/">Home</Link></li>
                    <li className="nav-item"><Link to="/jobs">Jobs</Link></li>
                    {/* <li className="nav-item"><Link to="/new-offer">Add Offer</Link></li>
                    <li className="nav-item"><Link to="/profile">Profile</Link></li>
                    <li className="nav-item"><Link to="/logout">Logout</Link></li> */}
                    <li className="nav-item"><Link to="/login">Login</Link></li>
                    <li className="nav-item"><Link to="/register">Register</Link></li>
                    <li className="nav-item"><Link to="/about">About</Link></li>
                </ul>
            </nav>
            <div class="header-search">
                <form action="" method="GET">
                    <input type="text" placeholder="Search in jobs description..." name="search" />
                    <button type="submit"><i class="fas fa-search"></i></button>
                </form>
            </div>
        </header>
        </>
    )
}