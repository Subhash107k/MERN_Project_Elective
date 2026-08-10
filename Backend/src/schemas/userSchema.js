import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

export const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'User name is required'],
            trim: true
        },
        email: {
            type: String,
            required: [true, 'Email address is required'],
            unique: true,
            lowercase: true,
            trim: true
        },
        password: {
            type: String,
            required: [true, 'Password is required'],
            minlength: [6, 'Password must be at least 6 characters long'],
            select: false
        },
        address: {
            type: String,
            required: [true, 'Address is required'],
            trim: true
        },
        phone: {
            type: String,
            required: [true, 'Phone number is required'],
            trim: true
        },
        role: {
            type: String,
            enum: ['user', 'admin'],
            default: 'user'
        },
        nidNumber: {
            type: String,
            trim: true,
            default: null
        }
    },
    {
        timestamps: true
    }
);

// Compound index on email and role for optimized search queries
userSchema.index({ email: 1, role: 1 });

// Pre-save middleware hook for password encryption
userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next();
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

// Instance method to compare password
userSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
};

export default userSchema;
