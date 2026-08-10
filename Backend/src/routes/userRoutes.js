import { Router } from 'express';
import { getUsers, getUserById, createUser, updateUser, deleteUser } from '../controllers/userController.js';
import { validateBody } from '../middleware/validationMiddleware.js';

const router = Router();

router.route('/')
    .get(getUsers)
    .post(validateBody(['name', 'email', 'password', 'address', 'phone']), createUser);

router.route('/:id')
    .get(getUserById)
    .patch(updateUser)
    .delete(deleteUser);

export default router;
