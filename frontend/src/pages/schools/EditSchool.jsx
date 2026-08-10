import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getSchoolByIdApi, updateSchoolApi } from '../../services/api';
import Card from '../../components/Card';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Loading from '../../components/Loading';
import ErrorMessage from '../../components/ErrorMessage';

const EditSchool = () => {
    const { id } = useParams();
    const [name, setName] = useState('');
    const [location, setLocation] = useState('');
    const [principalName, setPrincipalName] = useState('');
    const [totalStudents, setTotalStudents] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [error, setError] = useState('');

    const navigate = useNavigate();

    useEffect(() => {
        const fetchSchool = async () => {
            try {
                const res = await getSchoolByIdApi(id);
                const s = res.data.data;
                setName(s.name || '');
                setLocation(s.location || '');
                setPrincipalName(s.principalName || '');
                setTotalStudents(s.totalStudents || 0);
                setEmail(s.email || '');
                setPhone(s.phone || '');
            } catch (err) {
                setError(err.response?.data?.message || 'Failed to fetch school');
            } finally {
                setLoading(false);
            }
        };
        fetchSchool();
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setSaving(true);
        try {
            await updateSchoolApi(id, {
                name,
                location,
                principalName,
                totalStudents: Number(totalStudents),
                email,
                phone
            });
            navigate('/schools');
        } catch (err) {
            setError(err.response?.data?.message || 'Failed to update school');
        } finally {
            setSaving(false);
        }
    };

    if (loading) return <Loading />;

    return (
        <div className="container" style={{ maxWidth: '560px' }}>
            <Card title="✏️ Edit School Details">
                <ErrorMessage message={error} />
                <form onSubmit={handleSubmit}>
                    <Input label="School Name" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
                    <Input label="Location" id="location" value={location} onChange={(e) => setLocation(e.target.value)} required />
                    <Input label="Principal Name" id="principalName" value={principalName} onChange={(e) => setPrincipalName(e.target.value)} required />
                    <Input label="Total Students" id="totalStudents" type="number" value={totalStudents} onChange={(e) => setTotalStudents(e.target.value)} required />
                    <Input label="School Email" id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    <Input label="Contact Phone" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} required />

                    <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
                        <Button type="submit" variant="primary" disabled={saving}>
                            {saving ? 'Updating...' : 'Update School'}
                        </Button>
                        <Button variant="secondary" onClick={() => navigate('/schools')}>Cancel</Button>
                    </div>
                </form>
            </Card>
        </div>
    );
};

export default EditSchool;
