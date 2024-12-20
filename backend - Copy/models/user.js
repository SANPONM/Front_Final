import db from '../db.js';

// Найти пользователя по email
// Пример запроса для поиска пользователя по email
export const findUserByEmail = async (email) => {
  const [rows] = await db.query('SELECT * FROM users WHERE email = ?', [email]);
  return rows[0]; // Возвращаем первого пользователя, если найден
};


// Обновить код сброса пароля
export const updateResetCode = async (email, resetCode) => {
  await db.query('UPDATE users SET reset_code = ? WHERE email = ?', [resetCode, email]);
};

// Найти пользователя по email и коду сброса
export const findUserByEmailAndResetCode = async (email, resetCode) => {
  const [rows] = await db.query('SELECT * FROM users WHERE email = ? AND reset_code = ?', [email, resetCode]);
  return rows[0]; // Возвращаем пользователя, если он найден
};

// Обновить пароль пользователя
export const updatePassword = async (email, newPassword) => {
  await db.query('UPDATE users SET password = ?, reset_code = NULL WHERE email = ?', [newPassword, email]);
};

// Создать нового пользователя
export const createUser = async (name, email, password, role) => {
  await db.query('INSERT INTO users (name, email, password, role) VALUES (?, ?, ?, ?)', [name, email, password, role]);
};
