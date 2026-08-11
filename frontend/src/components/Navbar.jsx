import React, { useState, useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const Navbar = () => {
    const { user, logout } = useContext(AuthContext);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        setIsMenuOpen(false);
        navigate('/login');
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <nav className="navbar">
            <NavLink to="/" className="navbar-brand" onClick={closeMenu}>
                🚀 MERN Course App
            </NavLink>

            <button 
                className="navbar-toggle" 
                onClick={() => setIsMenuOpen(!isMenuOpen)} 
                aria-label="Toggle navigation menu"
            >
                {isMenuOpen ? '✕' : '☰'}
            </button>

            <ul className={`navbar-nav ${isMenuOpen ? 'active' : ''}`}>
                <li>
                    <NavLink to="/" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')} onClick={closeMenu}>
                        Dashboard
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/users" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')} onClick={closeMenu}>
                        Users
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/products" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')} onClick={closeMenu}>
                        Products
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/schools" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')} onClick={closeMenu}>
                        Schools
                    </NavLink>
                </li>

                {user ? (
                    <>
                        <li style={{ color: '#e2e8f0', fontSize: '0.875rem' }}>
                            👤 {user.name} ({user.role})
                        </li>
                        <li>
                            <button onClick={handleLogout} className="btn btn-secondary btn-sm">
                                Logout
                            </button>
                        </li>
                    </>
                ) : (
                    <>
                        <li>
                            <NavLink to="/login" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')} onClick={closeMenu}>
                                Login
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/register" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')} onClick={closeMenu}>
                                Register
                            </NavLink>
                        </li>
                    </>
                )}
            </ul>
        </nav>
    );
};

export default Navbar;

