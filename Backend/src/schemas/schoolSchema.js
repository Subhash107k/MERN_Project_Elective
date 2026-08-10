import mongoose from 'mongoose';

export const schoolSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'School name is required'],
            trim: true
        },
        location: {
            type: String,
            required: [true, 'School location is required'],
            trim: true
        },
        principalName: {
            type: String,
            required: [true, 'Principal name is required'],
            trim: true
        },
        totalStudents: {
            type: Number,
            required: [true, 'Total students count is required'],
            min: [0, 'Student count cannot be negative']
        },
        email: {
            type: String,
            required: [true, 'Contact email is required'],
            trim: true,
            lowercase: true
        },
        phone: {
            type: String,
            required: [true, 'Contact phone number is required'],
            trim: true
        }
    },
    {
        timestamps: true
    }
);

// Index on school name and location
schoolSchema.index({ name: 1, location: 1 });

export default schoolSchema;
