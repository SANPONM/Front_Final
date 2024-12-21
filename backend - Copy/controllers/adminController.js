import multer from 'multer';
import path from 'path';
import pool from '../db.js';  // Путь к файлу с подключением


// Настройка хранилища для multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Папка для загрузки
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
  }
});

// Фильтрация по типам файлов
const fileFilter = (req, file, cb) => {
  const filetypes = /jpeg|jpg|png|gif/;
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = filetypes.test(file.mimetype);

  if (mimetype && extname) {
    return cb(null, true);
  }
  cb(new Error('Only image files are allowed!'), false);
};

// Настроим multer для загрузки одного файла
const upload = multer({
  storage: storage,
  fileFilter: fileFilter
}).single('image'); // single указывает, что мы ожидаем одно изображение с полем 'image'

export { upload };


// Добавить машину с изображением
export const addCar = async (req, res) => {
  const {
    model,
    category,
    engine_volume,
    engine_type,
    engine_name,
    weight,
    length,
    height,
    drive_type,
    rating,
    quantity,
    price,
    year,
    description
  } = req.body;

  const imageUrl = req.file ? `/uploads/${req.file.filename}` : null;

  try {
    const connection = await pool.getConnection(); // Получаем соединение из пула

    const query = `
      INSERT INTO cars (model, category, engine_volume, engine_type, engine_name, weight, length, height, drive_type, rating, quantity, price, year, description, image_url)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;
    
    const values = [
      model, 
      category, 
      engine_volume, 
      engine_type, 
      engine_name, 
      weight, 
      length, 
      height, 
      drive_type, 
      rating, 
      quantity, 
      price, 
      year, 
      description, 
      imageUrl
    ];

    await connection.query(query, values);
    connection.release(); // Освобождаем соединение
    res.status(200).json({ message: "Car added successfully" });
  } catch (error) {
    console.error("Error adding car:", error);
    res.status(500).json({ error: "Failed to add car" });
  }
};

// Получить все машины с фото
export const getAllCars = async (req, res) => {
  try {
    console.log('Fetching all cars...');
    // Используйте pool вместо db, если вы хотите использовать пул соединений
    const [cars] = await pool.query('SELECT * FROM cars');
    console.log('Fetched cars:', cars);


    if (cars.length === 0) {
      return res.status(404).json({ error: 'No cars found' });
    }

    res.status(200).json(cars);
  } catch (error) {
    console.error('Error fetching cars:', error);  // Логируем ошибку
    res.status(500).json({ error: 'Failed to fetch cars', details: error.message });  // Отправляем подробное сообщение об ошибке
  }
};
 


export const getCarById = async (req, res) => {
  const { id } = req.params;

  try {
    const [car] = await pool.query('SELECT * FROM cars WHERE id = ?', [id]);

    if (!car.length) {
      return res.status(404).json({ error: 'Car not found' });
    }

    res.status(200).json(car[0]);
  } catch (error) {
    console.error('Error fetching car by id:', error);
    res.status(500).json({ error: 'Failed to fetch car' });
  }
};
// Обновить информацию о машине
export const updateCar = async (req, res) => {
  const { id } = req.params;
  const {
    model, category, engine_volume, engine_type, engine_name,
    weight, length, height, drive_type, rating, quantity, price, year, description, image_url,
  } = req.body;

  console.log('Received body:', req.body);  // Логируем тело запроса

  try {
    // Проверяем, существует ли машина с таким id
    const [existingCar] = await pool.query('SELECT * FROM cars WHERE id = ?', [id]);
    if (!existingCar.length) {
      return res.status(404).json({ error: 'Car not found' });
    }

    // Строим массив полей для обновления
    const fieldsToUpdate = [];
    const valuesToUpdate = [];

    // Добавляем в массив только те поля, которые были переданы
    if (model) {
      fieldsToUpdate.push('model');
      valuesToUpdate.push(model);
    }
    if (category) {
      fieldsToUpdate.push('category');
      valuesToUpdate.push(category);
    }
    if (engine_volume) {
      fieldsToUpdate.push('engine_volume');
      valuesToUpdate.push(engine_volume);
    }
    if (engine_type) {
      fieldsToUpdate.push('engine_type');
      valuesToUpdate.push(engine_type);
    }
    if (engine_name) {
      fieldsToUpdate.push('engine_name');
      valuesToUpdate.push(engine_name);
    }
    if (weight) {
      fieldsToUpdate.push('weight');
      valuesToUpdate.push(weight);
    }
    if (length) {
      fieldsToUpdate.push('length');
      valuesToUpdate.push(length);
    }
    if (height) {
      fieldsToUpdate.push('height');
      valuesToUpdate.push(height);
    }
    if (drive_type) {
      fieldsToUpdate.push('drive_type');
      valuesToUpdate.push(drive_type);
    }
    if (rating) {
      fieldsToUpdate.push('rating');
      valuesToUpdate.push(rating);
    }
    if (quantity) {
      fieldsToUpdate.push('quantity');
      valuesToUpdate.push(quantity);
    }
    if (price) {
      fieldsToUpdate.push('price');
      valuesToUpdate.push(price);
    }
    if (year) {
      fieldsToUpdate.push('year');
      valuesToUpdate.push(year);
    }
    if (description) {
      fieldsToUpdate.push('description');
      valuesToUpdate.push(description);
    }
    if (image_url) {
      fieldsToUpdate.push('image_url');
      valuesToUpdate.push(image_url);
    }

    // Если нет данных для обновления
    if (fieldsToUpdate.length === 0) {
      return res.status(400).json({ error: 'No fields to update' });
    }

    // Формируем строку SET для SQL запроса
    const setClause = fieldsToUpdate.map(field => `${field} = ?`).join(", ");
    const updateQuery = `UPDATE cars SET ${setClause} WHERE id = ?`;

    console.log('Update SQL:', updateQuery);  // Логируем сформированный SQL запрос
    console.log('Values:', [...valuesToUpdate, id]);  // Логируем значения

    // Выполняем запрос на обновление
    await pool.query(updateQuery, [...valuesToUpdate, id]);

    res.status(200).json({ message: 'Car updated successfully' });
  } catch (error) {
    console.error('Error updating car:', error);
    res.status(500).json({ error: 'Failed to update car' });
  }
};


// Удалить машину
export const deleteCar = async (req, res) => {
  const { id } = req.params;

  try {
    const [result] = await pool.query('DELETE FROM cars WHERE id = ?', [id]);
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'Car not found' });
    }
    res.status(200).json({ message: 'Car deleted successfully' });
  } catch (error) {
    console.error('Error deleting car:', error);
    res.status(500).json({ error: 'Failed to delete car' });
  }
};
// Получить машины по категории
export const getCarsByCategory = async (req, res) => {
  const { category } = req.params;

  if (!category) {
    return res.status(400).json({ error: 'Category is required' });
  }

  try {
    const [cars] = await pool.query('SELECT * FROM cars WHERE category = ?', [category]);

    if (cars.length === 0) {
      return res.status(404).json({ error: `No cars found in category: ${category}` });
    }

    res.status(200).json(cars);
  } catch (error) {
    console.error('Error fetching cars by category:', error);
    res.status(500).json({ error: 'Failed to fetch cars by category' });
  }
};
