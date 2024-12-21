import express from 'express';
import { authenticate, authorizeAdmin } from '../middleware/auth.js';
import { getAllCars, getCarById, addCar, updateCar, deleteCar, getCarsByCategory } from '../controllers/adminController.js';  // Импортируем getCarById
import { upload } from '../controllers/adminController.js'; // Импортируем upload для multer


const router = express.Router();

// Валидация данных для добавления/обновления машины
import { checkCarData } from '../utils/validation.js'; // Пример утилиты для валидации данных

// Маршруты для управления машинами
router.post('/cars', authenticate, authorizeAdmin, upload, addCar);
router.get('/cars', authenticate, authorizeAdmin, getAllCars);  // Получить список машин
router.get('/cars/:id', authenticate, authorizeAdmin, getCarById); // Получить машину по ID
router.get('/cars/category/:category', getCarsByCategory); // Получить машины по категории
router.put('/cars/:id', authenticate, authorizeAdmin, upload, checkCarData, updateCar); // Обновить машину
router.delete('/cars/:id', authenticate, authorizeAdmin, deleteCar); // Удалить машину

export default router;
