import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getUserByIdApi, updateUserApi } from '../../services/api';
import Card from '../../components/Card';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Loading from '../../components/Loading';
import ErrorMessage from '../../components/ErrorMessage';

const EditUser = () => {
    const { id } = useParams();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [nidNumber, setNidNumber] = useState('');
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [error, setError] = useState('');

    const navigate = useNavigate();

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const res = await getUserByIdApi(id);
                const u = res.data.data;
                setName(u.name || '');
                setEmail(u.email || '');
                setAddress(u.address || '');
                setPhone(u.phone || '');
                setNidNumber(u.nidNumber || '');
            } catch (err) {
                setError(err.response?.data?.message || 'Failed to fetch user');
            } finally {
                setLoading(false);
            }
        };
        fetchUser();
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setSaving(true);
        try {
            await updateUserApi(id, { name, email, address, phone, nidNumber });
            navigate('/users');
        } catch (err) {
            setError(err.response?.data?.message || 'Failed to update user');
        } finally {
            setSaving(false);
        }
    };

    if (loading) return <Loading />;

    return (
        <div className="container" style={{ maxWidth: '560px' }}>
            <Card title="✏️ Edit User Details">
                <ErrorMessage message={error} />
                <form onSubmit={handleSubmit}>
                    <Input label="Name" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
                    <Input label="Email" id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    <Input label="Address" id="address" value={address} onChange={(e) => setAddress(e.target.value)} required />
                    <Input label="Phone Number" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} required />
                    <Input label="NID Number" id="nidNumber" value={nidNumber} onChange={(e) => setNidNumber(e.target.value)} />

                    <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
                        <Button type="submit" variant="primary" disabled={saving}>
                            {saving ? 'Updating...' : 'Update User'}
                        </Button>
                        <Button variant="secondary" onClick={() => navigate('/users')}>Cancel</Button>
                    </div>
                </form>
            </Card>
        </div>
    );
};

export default EditUser;
