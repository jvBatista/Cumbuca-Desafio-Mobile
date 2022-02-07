import { Router } from 'express';
// Rotas
import productRoutes from './productRoutes';

const router = Router();

router.use('/product', productRoutes);

export default router;
