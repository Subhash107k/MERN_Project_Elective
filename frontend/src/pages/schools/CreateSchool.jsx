import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createSchoolApi } from '../../services/api';
import Card from '../../components/Card';
import Input from '../../components/Input';
import Button from '../../components/Button';
import ErrorMessage from '../../components/ErrorMessage';

const CreateSchool = () => {
    const [name, setName] = useState('');
    const [location, setLocation] = useState('');
    const [principalName, setPrincipalName] = useState('');
    const [totalStudents, setTotalStudents] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);
        try {
            await createSchoolApi({
                name,
                location,
                principalName,
                totalStudents: Number(totalStudents),
                email,
                phone
            });
            navigate('/schools');
        } catch (err) {
            setError(err.response?.data?.message || 'Failed to create school record');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container" style={{ maxWidth: '560px' }}>
            <Card title="➕ Register School Institution">
                <ErrorMessage message={error} />
                <form onSubmit={handleSubmit}>
                    <Input label="School Name" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
                    <Input label="Location" id="location" value={location} onChange={(e) => setLocation(e.target.value)} required />
                    <Input label="Principal Name" id="principalName" value={principalName} onChange={(e) => setPrincipalName(e.target.value)} required />
                    <Input label="Total Students" id="totalStudents" type="number" value={totalStudents} onChange={(e) => setTotalStudents(e.target.value)} required />
                    <Input label="School Email" id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    <Input label="Contact Phone" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} required />

                    <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
                        <Button type="submit" variant="primary" disabled={loading}>
                            {loading ? 'Saving...' : 'Create School'}
                        </Button>
                        <Button variant="secondary" onClick={() => navigate('/schools')}>Cancel</Button>
                    </div>
                </form>
            </Card>
        </div>
    );
};

export default CreateSchool;
