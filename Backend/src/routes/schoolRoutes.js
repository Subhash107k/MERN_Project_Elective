import { Router } from 'express';
import { getSchools, getSchoolById, createSchool, updateSchool, deleteSchool } from '../controllers/schoolController.js';
import { validateBody } from '../middleware/validationMiddleware.js';

const router = Router();

router.route('/')
    .get(getSchools)
    .post(validateBody(['name', 'location', 'principalName', 'totalStudents', 'email', 'phone']), createSchool);

router.route('/:id')
    .get(getSchoolById)
    .patch(updateSchool)
    .delete(deleteSchool);

export default router;
