// В файле routes/salesRoutes.js
import express from 'express';
import { buyCar, getSales } from '../controllers/salesController.js';
import { authenticate, authorizeAdmin } from '../middleware/auth.js';

const router = express.Router();

// Роут для записи продажи (только аутентифицированный пользователь)
router.post('/buy', authenticate, buyCar);

// Роут для получения всех продаж (только для администраторов)
router.get('/sales', authenticate, authorizeAdmin, getSales);

export default router;
