import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getProductsApi, deleteProductApi } from '../../services/api';
import Card from '../../components/Card';
import Table from '../../components/Table';
import Button from '../../components/Button';
import Loading from '../../components/Loading';
import ErrorMessage from '../../components/ErrorMessage';
import SuccessMessage from '../../components/SuccessMessage';

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const fetchProducts = async () => {
        setLoading(true);
        try {
            const res = await getProductsApi();
            setProducts(res.data.data || []);
        } catch (err) {
            setError(err.response?.data?.message || 'Failed to fetch products');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    const handleDelete = async (id) => {
        if (!window.confirm('Are you sure you want to delete this product?')) return;
        try {
            await deleteProductApi(id);
            setSuccess('Product deleted successfully');
            setProducts(products.filter((p) => p._id !== id));
        } catch (err) {
            setError(err.response?.data?.message || 'Failed to delete product');
        }
    };

    return (
        <div className="container">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                <h2>📦 Product Catalog</h2>
                <Link to="/products/create" className="btn btn-primary">
                    + Add New Product
                </Link>
            </div>

            <ErrorMessage message={error} />
            <SuccessMessage message={success} />

            {loading ? (
                <Loading />
            ) : products.length === 0 ? (
                <Card>
                    <p style={{ textAlign: 'center', color: 'var(--text-muted)' }}>No products in catalog. Click above to add a product.</p>
                </Card>
            ) : (
                <Table headers={['Product Name', 'Price ($)', 'Quantity', 'Description', 'Actions']}>
                    {products.map((product) => (
                        <tr key={product._id}>
                            <td><strong>{product.name}</strong></td>
                            <td>${product.price}</td>
                            <td>{product.quantity}</td>
                            <td>{product.description || '-'}</td>
                            <td style={{ display: 'flex', gap: '0.5rem' }}>
                                <Link to={`/products/edit/${product._id}`} className="btn btn-secondary btn-sm">Edit</Link>
                                <Button variant="danger" size="sm" onClick={() => handleDelete(product._id)}>Delete</Button>
                            </td>
                        </tr>
                    ))}
                </Table>
            )}
        </div>
    );
};

export default ProductList;
