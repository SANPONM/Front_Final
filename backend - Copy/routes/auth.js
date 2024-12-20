//routes/auth.js
import express from 'express';
import { register, login, forgotPassword, resetPassword } from '../controllers/authController.js';

const router = express.Router();

router.post('/register', register);        // Роут для регистрации
router.post('/login', login);              // Роут для логина
router.post('/forgot-password', forgotPassword); // Роут для восстановления пароля
router.post('/reset-password', resetPassword);   // Роут для сброса пароля

export default router;
