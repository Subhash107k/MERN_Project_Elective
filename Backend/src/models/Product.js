import mongoose from 'mongoose';
import productSchema from '../schemas/productSchema.js';

const Product = mongoose.models.Product || mongoose.model('Product', productSchema);

export default Product;
