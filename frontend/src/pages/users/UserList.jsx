import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getUsersApi, deleteUserApi } from '../../services/api';
import Card from '../../components/Card';
import Table from '../../components/Table';
import Button from '../../components/Button';
import Loading from '../../components/Loading';
import ErrorMessage from '../../components/ErrorMessage';
import SuccessMessage from '../../components/SuccessMessage';

const UserList = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const fetchUsers = async () => {
        setLoading(true);
        try {
            const res = await getUsersApi();
            setUsers(res.data.data || []);
        } catch (err) {
            setError(err.response?.data?.message || 'Failed to fetch users');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    const handleDelete = async (id) => {
        if (!window.confirm('Are you sure you want to delete this user?')) return;
        try {
            await deleteUserApi(id);
            setSuccess('User deleted successfully');
            setUsers(users.filter((u) => u._id !== id));
        } catch (err) {
            setError(err.response?.data?.message || 'Failed to delete user');
        }
    };

    return (
        <div className="container">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                <h2>👥 User Directory</h2>
                <Link to="/users/create" className="btn btn-primary">
                    + Add New User
                </Link>
            </div>

            <ErrorMessage message={error} />
            <SuccessMessage message={success} />

            {loading ? (
                <Loading />
            ) : users.length === 0 ? (
                <Card>
                    <p style={{ textAlign: 'center', color: 'var(--text-muted)' }}>No user records found. Click above to add a new user.</p>
                </Card>
            ) : (
                <Table headers={['Name', 'Email', 'Address', 'Phone', 'Role', 'Actions']}>
                    {users.map((user) => (
                        <tr key={user._id}>
                            <td><strong>{user.name}</strong></td>
                            <td>{user.email}</td>
                            <td>{user.address}</td>
                            <td>{user.phone}</td>
                            <td><span style={{ padding: '0.2rem 0.5rem', borderRadius: '4px', backgroundColor: user.role === 'admin' ? '#dbeafe' : '#f1f5f9', color: user.role === 'admin' ? '#1e40af' : '#475569', fontSize: '0.75rem', fontWeight: 600 }}>{user.role}</span></td>
                            <td style={{ display: 'flex', gap: '0.5rem' }}>
                                <Link to={`/users/${user._id}`} className="btn btn-secondary btn-sm">View</Link>
                                <Link to={`/users/edit/${user._id}`} className="btn btn-secondary btn-sm">Edit</Link>
                                <Button variant="danger" size="sm" onClick={() => handleDelete(user._id)}>Delete</Button>
                            </td>
                        </tr>
                    ))}
                </Table>
            )}
        </div>
    );
};

export default UserList;
