import School from '../models/School.js';
import { asyncHandler } from '../utils/asyncHandler.js';
import { sendSuccess } from '../utils/response.js';

export const getSchools = asyncHandler(async (req, res) => {
    const schools = await School.find();
    sendSuccess(res, 200, 'Schools retrieved successfully', schools);
});

export const getSchoolById = asyncHandler(async (req, res) => {
    const school = await School.findById(req.params.id);
    if (!school) {
        res.status(404);
        throw new Error('School not found');
    }
    sendSuccess(res, 200, 'School retrieved successfully', school);
});

export const createSchool = asyncHandler(async (req, res) => {
    const { name, location, principalName, totalStudents, email, phone } = req.body;
    const school = await School.create({ name, location, principalName, totalStudents, email, phone });
    sendSuccess(res, 201, 'School created successfully', school);
});

export const updateSchool = asyncHandler(async (req, res) => {
    const school = await School.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
    });
    if (!school) {
        res.status(404);
        throw new Error('School not found');
    }
    sendSuccess(res, 200, 'School updated successfully', school);
});

export const deleteSchool = asyncHandler(async (req, res) => {
    const school = await School.findByIdAndDelete(req.params.id);
    if (!school) {
        res.status(404);
        throw new Error('School not found');
    }
    sendSuccess(res, 200, 'School deleted successfully', { id: req.params.id });
});
