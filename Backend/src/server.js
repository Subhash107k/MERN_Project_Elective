import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/database.js';
import errorHandler from './middleware/errorHandler.js';

import authRoutes from './routes/authRoutes.js';
import userRoutes from './routes/userRoutes.js';
import productRoutes from './routes/productRoutes.js';
import schoolRoutes from './routes/schoolRoutes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

connectDB();

app.use(cors({ origin: process.env.CLIENT_URL || '*', credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.status(200).json({
        success: true,
        message: '15-Day MERN Stack Course REST API is running cleanly',
        version: '1.0.0'
    });
});

app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes);
app.use('/api/schools', schoolRoutes);

app.use((req, res, next) => {
    res.status(404);
    next(new Error(`Route Not Found - ${req.originalUrl}`));
});

app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Server running in ${process.env.NODE_ENV || 'development'} mode on http://localhost:${PORT}`);
});

export default app;
