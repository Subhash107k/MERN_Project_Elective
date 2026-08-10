import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createProductApi } from '../../services/api';
import Card from '../../components/Card';
import Input from '../../components/Input';
import Button from '../../components/Button';
import ErrorMessage from '../../components/ErrorMessage';

const CreateProduct = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [quantity, setQuantity] = useState('');
    const [description, setDescription] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);
        try {
            await createProductApi({
                name,
                price: Number(price),
                quantity: Number(quantity),
                description
            });
            navigate('/products');
        } catch (err) {
            setError(err.response?.data?.message || 'Failed to create product');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container" style={{ maxWidth: '560px' }}>
            <Card title="➕ Create Product Listing">
                <ErrorMessage message={error} />
                <form onSubmit={handleSubmit}>
                    <Input label="Product Name" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
                    <Input label="Price ($)" id="price" type="number" value={price} onChange={(e) => setPrice(e.target.value)} required />
                    <Input label="Quantity" id="quantity" type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} required />
                    <Input label="Description" id="description" isTextArea value={description} onChange={(e) => setDescription(e.target.value)} />

                    <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
                        <Button type="submit" variant="primary" disabled={loading}>
                            {loading ? 'Creating...' : 'Create Product'}
                        </Button>
                        <Button variant="secondary" onClick={() => navigate('/products')}>Cancel</Button>
                    </div>
                </form>
            </Card>
        </div>
    );
};

export default CreateProduct;
