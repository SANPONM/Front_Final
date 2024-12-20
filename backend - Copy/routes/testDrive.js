// routes/testDrive.js
import express from 'express';
import { authenticate } from '../middleware/auth.js';
import { addTestDrive, getTestDrives, updateTestDriveStatus } from '../controllers/testDriveController.js';

const router = express.Router();

// Добавить заявку на тест-драйв
router.post('/', authenticate, addTestDrive);

// Получить все заявки на тест-драйв (только для администраторов)
router.get('/', authenticate, getTestDrives);

// Обновить статус заявки на тест-драйв (только для администраторов)
router.put('/:id', authenticate, updateTestDriveStatus);

export default router;
