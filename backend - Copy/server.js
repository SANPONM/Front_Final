// В server.js
import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.js';
import testDriveRoutes from './routes/testDrive.js';
import salesRoutes from './routes/salesRoutes.js';
import adminRoutes from './routes/admin.js';
import path from 'path';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;
const __dirname = path.dirname(new URL(import.meta.url).pathname);


app.use(bodyParser.json());
app.use('/auth', authRoutes);
app.use('/test-drive', testDriveRoutes);
app.use('/admin', adminRoutes);
app.use('/api', salesRoutes);  // Убедись, что это подключено
app.use(express.json());  // Позволяет Express парсить JSON из тела запроса
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
