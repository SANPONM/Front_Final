import db from '../db.js';

export const buyCar = async (req, res) => {
  const { car_id } = req.body;

  if (!car_id || !req.user || !req.user.userId) {
    return res.status(400).json({ error: 'car_id is required and user must be logged in' });
  }

  const user_id = req.user.userId;

  const connection = await db.getConnection();
  try {
    await connection.beginTransaction();

    const [car] = await connection.query('SELECT id, price, is_sold FROM cars WHERE id = ?', [car_id]);
    if (car.length === 0) {
      return res.status(404).json({ error: 'Car not found' });
    }

    if (car[0].is_sold) {
      return res.status(400).json({ error: 'Car is already sold' });
    }

    await connection.query(
      'INSERT INTO sales (car_id, user_id, price) VALUES (?, ?, ?)',
      [car_id, user_id, car[0].price]
    );

    await connection.query('UPDATE cars SET is_sold = TRUE WHERE id = ?', [car_id]);

    await connection.commit();
    res.status(201).json({ message: 'Car purchased successfully', car: car[0] });
  } catch (error) {
    await connection.rollback();
    console.error('Error processing purchase:', error);
    res.status(500).json({ error: 'Failed to process purchase' });
  } finally {
    connection.release();
  }
};
  

  export const getSales = async (req, res) => {
    try {
      const [sales] = await db.query(`
        SELECT sales.id, cars.model, cars.year, sales.price, users.name AS buyer_name, sales.sale_date
        FROM sales
        JOIN cars ON sales.car_id = cars.id
        JOIN users ON sales.user_id = users.id
      `);
      res.status(200).json(sales);
    } catch (error) {
      console.error('Error fetching sales:', error);
      res.status(500).json({ error: 'Failed to fetch sales' });
    }
  };
  
  
  