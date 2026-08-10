import React, { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const Navbar = () => {
    const { user, logout } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    return (
        <nav className="navbar">
            <NavLink to="/" className="navbar-brand">
                🚀 MERN Course App
            </NavLink>

            <ul className="navbar-nav">
                <li>
                    <NavLink to="/" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
                        Dashboard
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/users" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
                        Users
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/products" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
                        Products
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/schools" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
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
                            <NavLink to="/login" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
                                Login
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/register" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
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
