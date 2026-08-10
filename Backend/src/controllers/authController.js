import jwt from 'jsonwebtoken';
import User from '../models/User.js';
import { asyncHandler } from '../utils/asyncHandler.js';
import { sendSuccess } from '../utils/response.js';

const generateToken = (id) => {
    return jwt.sign(
        { id },
        process.env.JWT_SECRET || 'super_secret_jwt_key_change_in_production',
        { expiresIn: process.env.JWT_EXPIRE || '7d' }
    );
};

export const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password, address, phone, nidNumber } = req.body;

    const userExists = await User.findOne({ email });
    if (userExists) {
        res.status(400);
        throw new Error('User with this email already exists');
    }

    if (nidNumber) {
        const existingNid = await User.findOne({ nidNumber });
        if (existingNid) {
            existingNid.name = name || existingNid.name;
            existingNid.email = email || existingNid.email;
            if (password) existingNid.password = password;
            existingNid.address = address || existingNid.address;
            existingNid.phone = phone || existingNid.phone;
            await existingNid.save();

            const token = generateToken(existingNid._id);
            return sendSuccess(res, 200, 'User details updated via NID match', {
                _id: existingNid._id,
                name: existingNid.name,
                email: existingNid.email,
                role: existingNid.role,
                token
            });
        }
    }

    const user = await User.create({ name, email, password, address, phone, nidNumber });

    if (user) {
        const token = generateToken(user._id);
        sendSuccess(res, 201, 'User registered successfully', {
            _id: user._id,
            name: user.name,
            email: user.email,
            address: user.address,
            phone: user.phone,
            role: user.role,
            token
        });
    } else {
        res.status(400);
        throw new Error('Invalid user data');
    }
});

export const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        res.status(400);
        throw new Error('Please provide email and password');
    }

    const user = await User.findOne({ email }).select('+password');

    if (user && (await user.matchPassword(password))) {
        const token = generateToken(user._id);
        sendSuccess(res, 200, 'Login successful', {
            _id: user._id,
            name: user.name,
            email: user.email,
            address: user.address,
            phone: user.phone,
            role: user.role,
            token
        });
    } else {
        res.status(401);
        throw new Error('Invalid email or password');
    }
});

export const getMe = asyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id);
    sendSuccess(res, 200, 'Current user profile retrieved', user);
});
