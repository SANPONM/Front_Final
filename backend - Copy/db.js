import mysql from 'mysql2/promise';

// Создание пула соединений с MySQL
const pool = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || 'Eraka2020_',
  database: process.env.DB_NAME || 'hyundai_db',
});

// Функция для создания таблиц
const createTables = async () => {
  let connection;
  try {
    // Получаем подключение из пула
    connection = await pool.getConnection();

    // Создание таблицы пользователей
    const createUsersTableQuery = `
      CREATE TABLE IF NOT EXISTS users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL UNIQUE,
        password VARCHAR(255) NOT NULL,
        role VARCHAR(50) NOT NULL,
        reset_code VARCHAR(6) DEFAULT NULL
      );
    `;
    await connection.query(createUsersTableQuery);
    console.log("Users table is ready.");

    // Создание таблицы машин
    const createCarsTableQuery = `
      CREATE TABLE IF NOT EXISTS cars (
        id INT AUTO_INCREMENT PRIMARY KEY,
        model VARCHAR(255) NOT NULL,
        category ENUM('Sedan', 'SUV', 'Crossover', 'Hatchback', 'Coupe', 'Convertible', 'Wagon') NOT NULL,
        engine_volume DECIMAL(4, 1) NOT NULL,
        engine_type ENUM('Petrol', 'Diesel', 'Hybrid', 'Electric') NOT NULL,
        engine_name VARCHAR(255) DEFAULT NULL,
        weight INT DEFAULT NULL,
        length DECIMAL(5, 2) DEFAULT NULL,
        height DECIMAL(5, 2) DEFAULT NULL,
        drive_type ENUM('FWD', 'RWD', 'AWD', '4WD') NOT NULL,
        rating DECIMAL(2, 1) DEFAULT NULL,
        quantity INT NOT NULL DEFAULT 0,
        price DECIMAL(10, 2) NOT NULL,
        year INT NOT NULL,
        description TEXT,
        Image_url VARCHAR(255) DEFAULT NULL
      );
    `;
    await connection.query(createCarsTableQuery);
    console.log("Cars table is ready.");

    // Создание таблицы тест-драйвов
    const createTestDrivesTableQuery = `
      CREATE TABLE IF NOT EXISTS test_drives (
        id INT AUTO_INCREMENT PRIMARY KEY,
        car_id INT NOT NULL,
        date DATE NOT NULL,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        status ENUM('pending', 'approved', 'rejected') DEFAULT 'pending',
        FOREIGN KEY (car_id) REFERENCES cars(id)
      );
    `;
    await connection.query(createTestDrivesTableQuery);
    console.log("TestDrives table is ready.");

    // Создание таблицы продаж
    const createSalesTableQuery = `
      CREATE TABLE IF NOT EXISTS sales (
        id INT AUTO_INCREMENT PRIMARY KEY,
        car_id INT NOT NULL,
        user_id INT NOT NULL,
        price DECIMAL(10, 2),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (car_id) REFERENCES cars(id),
        FOREIGN KEY (user_id) REFERENCES users(id)
      );
    `;
    await connection.query(createSalesTableQuery);
    console.log("Sales table is ready.");

  } catch (error) {
    console.error('Error creating tables: ', error);
  } finally {
    // Освобождение соединения
    if (connection) connection.release();
  }
};

// Создание таблиц при запуске
createTables();

export default pool;
