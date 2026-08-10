import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { getUserByIdApi } from '../../services/api';
import Card from '../../components/Card';
import Loading from '../../components/Loading';
import ErrorMessage from '../../components/ErrorMessage';
import Button from '../../components/Button';

const UserDetail = () => {
    const { id } = useParams();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const res = await getUserByIdApi(id);
                setUser(res.data.data);
            } catch (err) {
                setError(err.response?.data?.message || 'Failed to load user details');
            } finally {
                setLoading(false);
            }
        };
        fetchUser();
    }, [id]);

    if (loading) return <Loading />;
    if (error) return <div className="container"><ErrorMessage message={error} /></div>;
    if (!user) return <div className="container"><Card><p>User not found</p></Card></div>;

    return (
        <div className="container" style={{ maxWidth: '560px' }}>
            <Card title={`👤 User Profile: ${user.name}`}>
                <div style={{ display: 'grid', gap: '0.75rem', marginBottom: '1.5rem' }}>
                    <p><strong>ID:</strong> {user._id}</p>
                    <p><strong>Email:</strong> {user.email}</p>
                    <p><strong>Address:</strong> {user.address}</p>
                    <p><strong>Phone:</strong> {user.phone}</p>
                    <p><strong>Role:</strong> {user.role}</p>
                    {user.nidNumber && <p><strong>NID Number:</strong> {user.nidNumber}</p>}
                    <p><strong>Created At:</strong> {new Date(user.createdAt).toLocaleString()}</p>
                </div>
                <div style={{ display: 'flex', gap: '1rem' }}>
                    <Link to={`/users/edit/${user._id}`} className="btn btn-primary">Edit User</Link>
                    <Button variant="secondary" onClick={() => navigate('/users')}>Back to Users</Button>
                </div>
            </Card>
        </div>
    );
};

export default UserDetail;
