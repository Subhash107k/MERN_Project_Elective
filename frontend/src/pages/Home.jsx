import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Card from '../components/Card';
import { getUsersApi, getProductsApi, getSchoolsApi } from '../services/api';

const Home = () => {
    const [counts, setCounts] = useState({ users: 0, products: 0, schools: 0 });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCounts = async () => {
            try {
                const [uRes, pRes, sRes] = await Promise.all([
                    getUsersApi(),
                    getProductsApi(),
                    getSchoolsApi()
                ]);
                setCounts({
                    users: uRes.data.data ? uRes.data.data.length : 0,
                    products: pRes.data.data ? pRes.data.data.length : 0,
                    schools: sRes.data.data ? sRes.data.data.length : 0
                });
            } catch (err) {
                console.error('Error fetching dashboard counts', err);
            } finally {
                setLoading(false);
            }
        };
        fetchCounts();
    }, []);

    return (
        <div className="container">
            <h1 style={{ marginBottom: '1.5rem' }}>🎓 15-Day / 45-Hour MERN Course Dashboard</h1>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
                <Card title="👥 Users">
                    <p style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--primary-color)' }}>
                        {loading ? '...' : counts.users}
                    </p>
                    <p style={{ color: 'var(--text-muted)', marginBottom: '1rem' }}>Registered accounts & profiles</p>
                    <Link to="/users" className="btn btn-primary btn-sm">Manage Users</Link>
                </Card>

                <Card title="📦 Products">
                    <p style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--secondary-color)' }}>
                        {loading ? '...' : counts.products}
                    </p>
                    <p style={{ color: 'var(--text-muted)', marginBottom: '1rem' }}>Inventory items & listings</p>
                    <Link to="/products" className="btn btn-primary btn-sm">Manage Products</Link>
                </Card>

                <Card title="🏫 Schools">
                    <p style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--success-color)' }}>
                        {loading ? '...' : counts.schools}
                    </p>
                    <p style={{ color: 'var(--text-muted)', marginBottom: '1rem' }}>Educational institution profiles</p>
                    <Link to="/schools" className="btn btn-primary btn-sm">Manage Schools</Link>
                </Card>
            </div>

            <Card title="📌 Educational Progression & Features">
                <ul style={{ paddingLeft: '1.25rem', lineHeight: '2' }}>
                    <li>✅ <strong>Day 1-3:</strong> Node.js, Express framework, and REST routing protocols</li>
                    <li>✅ <strong>Day 4-6:</strong> MongoDB Atlas & Mongoose ODM models with validation rules</li>
                    <li>✅ <strong>Day 7-9:</strong> React 18 SPA components, hooks (`useState`, `useEffect`), and controlled form validation</li>
                    <li>✅ <strong>Day 10-11:</strong> Axios API service layer and database state rendering</li>
                    <li>✅ <strong>Day 12-13:</strong> `bcryptjs` password hashing and JWT authentication tokens</li>
                    <li>✅ <strong>Day 14-15:</strong> Form validation, automated testing, and production deployment configuration</li>
                </ul>
            </Card>
        </div>
    );
};

export default Home;
