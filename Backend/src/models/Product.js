import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
    {
        name: { type: String, required: [true, 'Product name is required'], trim: true },
        price: { type: Number, required: [true, 'Price is required'], min: 0 },
        quantity: { type: Number, required: [true, 'Quantity is required'], min: 0, default: 0 },
        description: { type: String, trim: true, default: '' }
    },
    { timestamps: true }
);

const Product = mongoose.model('Product', productSchema);
export default Product;
