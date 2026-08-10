import mongoose from 'mongoose';

const schoolSchema = new mongoose.Schema(
    {
        name: { type: String, required: [true, 'School name is required'], trim: true },
        location: { type: String, required: [true, 'Location is required'], trim: true },
        principalName: { type: String, required: [true, 'Principal name is required'], trim: true },
        totalStudents: { type: Number, required: [true, 'Total students is required'], min: 0 },
        email: { type: String, required: [true, 'School email is required'], lowercase: true, trim: true },
        phone: { type: String, required: [true, 'Phone number is required'], trim: true }
    },
    { timestamps: true }
);

const School = mongoose.model('School', schoolSchema);
export default School;
