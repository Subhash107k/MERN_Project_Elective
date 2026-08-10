import { Router } from 'express';
import { registerUser, loginUser, getMe } from '../controllers/authController.js';
import { protect } from '../middleware/authMiddleware.js';
import { validateBody } from '../middleware/validationMiddleware.js';

const router = Router();

router.post('/register', validateBody(['name', 'email', 'password', 'address', 'phone']), registerUser);
router.post('/login', validateBody(['email', 'password']), loginUser);
router.get('/me', protect, getMe);

export default router;
