import React, { useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import Card from '../components/Card';
import Input from '../components/Input';
import Button from '../components/Button';
import ErrorMessage from '../components/ErrorMessage';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [nidNumber, setNidNumber] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const { register } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);
        try {
            await register({ name, email, password, address, phone, nidNumber });
            navigate('/');
        } catch (err) {
            setError(err.message || 'Registration failed');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container" style={{ maxWidth: '560px' }}>
            <Card title="📝 Create New Account">
                <ErrorMessage message={error} />
                <form onSubmit={handleSubmit}>
                    <Input label="Full Name" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
                    <Input label="Email Address" id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    <Input label="Password" id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                    <Input label="Address" id="address" value={address} onChange={(e) => setAddress(e.target.value)} required />
                    <Input label="Phone Number" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} required />
                    <Input label="NID Number (Optional)" id="nidNumber" value={nidNumber} onChange={(e) => setNidNumber(e.target.value)} placeholder="NID123456" />

                    <Button type="submit" variant="primary" disabled={loading} style={{ width: '100%', marginTop: '1rem' }}>
                        {loading ? 'Registering...' : 'Register Account'}
                    </Button>
                </form>
                <p style={{ marginTop: '1rem', textAlign: 'center', fontSize: '0.875rem' }}>
                    Already have an account? <Link to="/login">Login here</Link>
                </p>
            </Card>
        </div>
    );
};

export default Register;
