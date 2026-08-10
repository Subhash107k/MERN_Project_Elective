import React, { useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import Card from '../components/Card';
import Input from '../components/Input';
import Button from '../components/Button';
import ErrorMessage from '../components/ErrorMessage';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const { login } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);
        try {
            await login(email, password);
            navigate('/');
        } catch (err) {
            setError(err.message || 'Failed to login');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container" style={{ maxWidth: '480px' }}>
            <Card title="🔐 Login to Account">
                <ErrorMessage message={error} />
                <form onSubmit={handleSubmit}>
                    <Input label="Email Address" id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="john@example.com" required />
                    <Input label="Password" id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="••••••••" required />
                    <Button type="submit" variant="primary" disabled={loading} style={{ width: '100%', marginTop: '1rem' }}>
                        {loading ? 'Logging in...' : 'Sign In'}
                    </Button>
                </form>
                <p style={{ marginTop: '1rem', textAlign: 'center', fontSize: '0.875rem' }}>
                    Don't have an account? <Link to="/register">Register here</Link>
                </p>
            </Card>
        </div>
    );
};

export default Login;
