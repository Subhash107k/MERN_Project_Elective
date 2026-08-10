import { Router } from 'express';
import { getProducts, getProductById, createProduct, updateProduct, deleteProduct } from '../controllers/productController.js';
import { validateBody } from '../middleware/validationMiddleware.js';

const router = Router();

router.route('/')
    .get(getProducts)
    .post(validateBody(['name', 'price', 'quantity']), createProduct);

router.route('/:id')
    .get(getProductById)
    .patch(updateProduct)
    .delete(deleteProduct);

export default router;
