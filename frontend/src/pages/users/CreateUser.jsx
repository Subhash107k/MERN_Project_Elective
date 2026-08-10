import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createUserApi } from '../../services/api';
import Card from '../../components/Card';
import Input from '../../components/Input';
import Button from '../../components/Button';
import ErrorMessage from '../../components/ErrorMessage';

const CreateUser = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [nidNumber, setNidNumber] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);
        try {
            await createUserApi({ name, email, password, address, phone, nidNumber });
            navigate('/users');
        } catch (err) {
            setError(err.response?.data?.message || 'Failed to create user');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container" style={{ maxWidth: '560px' }}>
            <Card title="➕ Add New User">
                <ErrorMessage message={error} />
                <form onSubmit={handleSubmit}>
                    <Input label="Name" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
                    <Input label="Email" id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    <Input label="Password" id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                    <Input label="Address" id="address" value={address} onChange={(e) => setAddress(e.target.value)} required />
                    <Input label="Phone Number" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} required />
                    <Input label="NID Number (Optional)" id="nidNumber" value={nidNumber} onChange={(e) => setNidNumber(e.target.value)} />

                    <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
                        <Button type="submit" variant="primary" disabled={loading}>
                            {loading ? 'Saving...' : 'Create User'}
                        </Button>
                        <Button variant="secondary" onClick={() => navigate('/users')}>
                            Cancel
                        </Button>
                    </div>
                </form>
            </Card>
        </div>
    );
};

export default CreateUser;
