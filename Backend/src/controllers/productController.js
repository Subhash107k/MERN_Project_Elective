import Product from '../models/Product.js';
import { asyncHandler } from '../utils/asyncHandler.js';
import { sendSuccess } from '../utils/response.js';

export const getProducts = asyncHandler(async (req, res) => {
    const products = await Product.find();
    sendSuccess(res, 200, 'Products retrieved successfully', products);
});

export const getProductById = asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (!product) {
        res.status(404);
        throw new Error('Product not found');
    }
    sendSuccess(res, 200, 'Product retrieved successfully', product);
});

export const createProduct = asyncHandler(async (req, res) => {
    const { name, price, quantity, description } = req.body;
    const product = await Product.create({ name, price, quantity, description });
    sendSuccess(res, 201, 'Product created successfully', product);
});

export const updateProduct = asyncHandler(async (req, res) => {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
    });
    if (!product) {
        res.status(404);
        throw new Error('Product not found');
    }
    sendSuccess(res, 200, 'Product updated successfully', product);
});

export const deleteProduct = asyncHandler(async (req, res) => {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) {
        res.status(404);
        throw new Error('Product not found');
    }
    sendSuccess(res, 200, 'Product deleted successfully', { id: req.params.id });
});
