import mongoose from 'mongoose';

export const productSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Product name is required'],
            trim: true
        },
        price: {
            type: Number,
            required: [true, 'Product price is required'],
            min: [0, 'Price cannot be negative']
        },
        quantity: {
            type: Number,
            required: [true, 'Product quantity is required'],
            min: [0, 'Quantity cannot be negative'],
            default: 0
        },
        description: {
            type: String,
            trim: true,
            default: ''
        },
        category: {
            type: String,
            trim: true,
            default: 'General'
        },
        imageUrl: {
            type: String,
            trim: true,
            default: ''
        }
    },
    {
        timestamps: true
    }
);

// Index on product name for fast catalog search
productSchema.index({ name: 1 });

export default productSchema;
