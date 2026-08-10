import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getSchoolsApi, deleteSchoolApi } from '../../services/api';
import Card from '../../components/Card';
import Table from '../../components/Table';
import Button from '../../components/Button';
import Loading from '../../components/Loading';
import ErrorMessage from '../../components/ErrorMessage';
import SuccessMessage from '../../components/SuccessMessage';

const SchoolList = () => {
    const [schools, setSchools] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const fetchSchools = async () => {
        setLoading(true);
        try {
            const res = await getSchoolsApi();
            setSchools(res.data.data || []);
        } catch (err) {
            setError(err.response?.data?.message || 'Failed to fetch schools');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchSchools();
    }, []);

    const handleDelete = async (id) => {
        if (!window.confirm('Are you sure you want to delete this school record?')) return;
        try {
            await deleteSchoolApi(id);
            setSuccess('School record deleted successfully');
            setSchools(schools.filter((s) => s._id !== id));
        } catch (err) {
            setError(err.response?.data?.message || 'Failed to delete school');
        }
    };

    return (
        <div className="container">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                <h2>🏫 Educational Institutions</h2>
                <Link to="/schools/create" className="btn btn-primary">
                    + Add New School
                </Link>
            </div>

            <ErrorMessage message={error} />
            <SuccessMessage message={success} />

            {loading ? (
                <Loading />
            ) : schools.length === 0 ? (
                <Card>
                    <p style={{ textAlign: 'center', color: 'var(--text-muted)' }}>No school records found. Click above to add a school.</p>
                </Card>
            ) : (
                <Table headers={['School Name', 'Location', 'Principal', 'Total Students', 'Email', 'Phone', 'Actions']}>
                    {schools.map((school) => (
                        <tr key={school._id}>
                            <td><strong>{school.name}</strong></td>
                            <td>{school.location}</td>
                            <td>{school.principalName}</td>
                            <td>{school.totalStudents}</td>
                            <td>{school.email}</td>
                            <td>{school.phone}</td>
                            <td style={{ display: 'flex', gap: '0.5rem' }}>
                                <Link to={`/schools/edit/${school._id}`} className="btn btn-secondary btn-sm">Edit</Link>
                                <Button variant="danger" size="sm" onClick={() => handleDelete(school._id)}>Delete</Button>
                            </td>
                        </tr>
                    ))}
                </Table>
            )}
        </div>
    );
};

export default SchoolList;
