//controllers/authController
import bcrypt from 'bcryptjs';  
import jwt from 'jsonwebtoken';
import db from '../db.js';
import { findUserByEmail, createUser } from '../models/user.js';

// Регистрация пользователя
export const register = async (req, res) => {
  const { name, email, password, role = 'user' } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    console.log('Checking if user exists...');
    const user = await findUserByEmail(email);
    if (user) {
      console.log('User already exists');
      return res.status(400).json({ error: 'User already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    await createUser(name, email, hashedPassword, role);
    console.log('User successfully registered');
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Error during registration:', error); 
    res.status(500).json({ error: 'Failed to register user' });
  }
};

// Логин пользователя
export const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: 'Email and password are required' });
  }

  try {
    const [user] = await db.query('SELECT * FROM users WHERE email = ?', [email]);

    if (user.length === 0) {
      return res.status(400).json({ error: 'Invalid email or password' });
    }

    const isMatch = await bcrypt.compare(password, user[0].password);
    if (!isMatch) {
      return res.status(400).json({ error: 'Invalid email or password' });
    }

    const token = jwt.sign({ userId: user[0].id, role: user[0].role }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.status(200).json({ message: 'Login successful', token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to login' });
  }
};



// Восстановление пароля (отправка кода)
export const forgotPassword = async (req, res) => {
  const { email } = req.body;

  try {
    const user = await findUserByEmail(email);

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    const resetCode = Math.floor(100000 + Math.random() * 900000); // 6-значный код

    await updateResetCode(email, resetCode);
    await sendResetEmail(email, resetCode);

    return res.status(200).json({ message: 'Password reset email sent successfully' });
  } catch (error) {
    console.error('Error generating reset code:', error);
    return res.status(500).json({ error: 'Failed to send reset code' });
  }
};


// Сброс пароля
export const resetPassword = async (req, res) => {
  const { email, resetCode, newPassword } = req.body;

  try {
    const user = await findUserByEmailAndResetCode(email, resetCode);

    if (!user) {
      return res.status(400).json({ error: 'Invalid reset code or email' });
    }

    const hashedPassword = await bcrypt.hash(newPassword, 10);
    await updatePassword(email, hashedPassword);

    return res.status(200).json({ message: 'Password reset successfully' });
  } catch (error) {
    console.error('Error resetting password:', error);
    return res.status(500).json({ error: 'Failed to reset password' });
  }
};
