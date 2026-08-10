import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getProductByIdApi, updateProductApi } from '../../services/api';
import Card from '../../components/Card';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Loading from '../../components/Loading';
import ErrorMessage from '../../components/ErrorMessage';

const EditProduct = () => {
    const { id } = useParams();
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [quantity, setQuantity] = useState('');
    const [description, setDescription] = useState('');
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [error, setError] = useState('');

    const navigate = useNavigate();

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const res = await getProductByIdApi(id);
                const p = res.data.data;
                setName(p.name || '');
                setPrice(p.price || 0);
                setQuantity(p.quantity || 0);
                setDescription(p.description || '');
            } catch (err) {
                setError(err.response?.data?.message || 'Failed to fetch product');
            } finally {
                setLoading(false);
            }
        };
        fetchProduct();
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setSaving(true);
        try {
            await updateProductApi(id, {
                name,
                price: Number(price),
                quantity: Number(quantity),
                description
            });
            navigate('/products');
        } catch (err) {
            setError(err.response?.data?.message || 'Failed to update product');
        } finally {
            setSaving(false);
        }
    };

    if (loading) return <Loading />;

    return (
        <div className="container" style={{ maxWidth: '560px' }}>
            <Card title="✏️ Edit Product Details">
                <ErrorMessage message={error} />
                <form onSubmit={handleSubmit}>
                    <Input label="Product Name" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
                    <Input label="Price ($)" id="price" type="number" value={price} onChange={(e) => setPrice(e.target.value)} required />
                    <Input label="Quantity" id="quantity" type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} required />
                    <Input label="Description" id="description" isTextArea value={description} onChange={(e) => setDescription(e.target.value)} />

                    <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
                        <Button type="submit" variant="primary" disabled={saving}>
                            {saving ? 'Updating...' : 'Update Product'}
                        </Button>
                        <Button variant="secondary" onClick={() => navigate('/products')}>Cancel</Button>
                    </div>
                </form>
            </Card>
        </div>
    );
};

export default EditProduct;
