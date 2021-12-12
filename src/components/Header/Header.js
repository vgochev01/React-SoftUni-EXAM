import { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../../contexts/AuthContext';
import './Header.css';

export default function Header() {

    const { user, setUser } = useContext(AuthContext);

    const onLogout = (ev) => {
        ev.preventDefault();
        setUser(null);
    }

    const userNav = (
        <>
        <li className="nav-item"><Link to="/new-offer">Add Offer</Link></li>
        <li className="nav-item"><Link to="/profile">Profile</Link></li>
        <li className="nav-item"><Link onClick={onLogout} to="/logout">Logout</Link></li>
        </>
    );

    const guestNav = (
        <>
        <li className="nav-item"><Link to="/login">Login</Link></li>
        <li className="nav-item"><Link to="/register">Register</Link></li>
        </>
    )

    return (
        <>
        <header>
            <Link to="/"><h1 className="header-title"><span className="hire">Hire</span> <i className="fas fa-business-time"></i> Hunters</h1></Link>
            <nav>
                <ul className="nav-items">
                    <li className="nav-item"><Link to="/">Home</Link></li>
                    <li className="nav-item"><Link to="/jobs">Jobs</Link></li>
                    {
                        user ? userNav : guestNav
                    }
                    
                    <li className="nav-item"><Link to="/about">About</Link></li>
                </ul>
            </nav>
            <div className="header-search">
                <form action="" method="GET">
                    <input type="text" placeholder="Search in jobs description..." name="search" />
                    <button type="submit"><i className="fas fa-search"></i></button>
                </form>
            </div>
        </header>
        </>
    )
}