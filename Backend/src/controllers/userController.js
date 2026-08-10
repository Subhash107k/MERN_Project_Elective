import User from '../models/User.js';
import { asyncHandler } from '../utils/asyncHandler.js';
import { sendSuccess } from '../utils/response.js';

export const getUsers = asyncHandler(async (req, res) => {
    const users = await User.find().select('-password');
    sendSuccess(res, 200, 'Users retrieved successfully', users);
});

export const getUserById = asyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id).select('-password');
    if (!user) {
        res.status(404);
        throw new Error('User not found');
    }
    sendSuccess(res, 200, 'User retrieved successfully', user);
});

export const createUser = asyncHandler(async (req, res) => {
    const { name, email, password, address, phone, nidNumber } = req.body;

    const userExists = await User.findOne({ email });
    if (userExists) {
        res.status(400);
        throw new Error('User with this email already exists');
    }

    const user = await User.create({ name, email, password, address, phone, nidNumber });

    sendSuccess(res, 201, 'User created successfully', {
        _id: user._id,
        name: user.name,
        email: user.email,
        address: user.address,
        phone: user.phone,
        role: user.role
    });
});

export const updateUser = asyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id);
    if (!user) {
        res.status(404);
        throw new Error('User not found');
    }

    if (req.body.name) user.name = req.body.name;
    if (req.body.email) user.email = req.body.email;
    if (req.body.password) user.password = req.body.password;
    if (req.body.address) user.address = req.body.address;
    if (req.body.phone) user.phone = req.body.phone;
    if (req.body.nidNumber) user.nidNumber = req.body.nidNumber;

    const updatedUser = await user.save();
    sendSuccess(res, 200, 'User updated successfully', {
        _id: updatedUser._id,
        name: updatedUser.name,
        email: updatedUser.email,
        address: updatedUser.address,
        phone: updatedUser.phone,
        role: updatedUser.role
    });
});

export const deleteUser = asyncHandler(async (req, res) => {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) {
        res.status(404);
        throw new Error('User not found');
    }
    sendSuccess(res, 200, 'User deleted successfully', { id: req.params.id });
});
