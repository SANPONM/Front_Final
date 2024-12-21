import express from 'express';
import dotenv from 'dotenv';
import cors from "cors";
import authRoutes from './routes/auth.js';
import testDriveRoutes from './routes/testDrive.js';
import salesRoutes from './routes/salesRoutes.js';
import adminRoutes from './routes/admin.js';
import path from 'path';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;
const __dirname = path.dirname(new URL(import.meta.url).pathname);

// Настройка CORS с разрешением только для фронтенда
app.use(cors({
  origin: 'http://localhost:5173', // Разрешаем доступ только с вашего фронтенда
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

app.use(express.json()); // Используем только express.json

app.use('/auth', authRoutes);
app.use('/test-drive', testDriveRoutes);
app.use('/admin', adminRoutes);
app.use('/api', salesRoutes);  // Убедитесь, что это подключено
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Логирование всех запросов
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`, req.body); // Логируем тело запроса
  next();
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});