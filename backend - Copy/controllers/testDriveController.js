import db from '../db.js';

// Добавить заявку на тест-драйв
// Добавить заявку на тест-драйв
export const addTestDrive = async (req, res) => {
  const { name, email, day, car_id } = req.body;

  console.log('Received test drive request:', req.body);

  if (!name || !email || !day || !car_id) {
    return res.status(400).json({ error: 'Name, email, day, and car_id are required' });
  }

  try {
    await db.query(
      'INSERT INTO test_drives (name, email, date, car_id) VALUES (?, ?, ?, ?)',
      [name, email, day, car_id]
    );
    res.status(201).json({ message: 'Test drive request created successfully' });
  } catch (error) {
    console.error('Error adding test drive request:', error);
    res.status(500).json({ error: 'Failed to create test drive request' });
  }
};



// Получить все заявки на тест-драйв (только для администраторов)
export const getTestDrives = async (req, res) => {
  try {
    const [testDrives] = await db.query('SELECT * FROM test_drives');
    res.status(200).json(testDrives);
  } catch (error) {
    console.error('Error fetching test drives:', error);
    res.status(500).json({ error: 'Failed to fetch test drives' });
  }
};

// Обновить статус заявки
export const updateTestDriveStatus = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;  // статус может быть 'approved' или 'rejected'

  try {
    const [result] = await db.query('UPDATE test_drives SET status = ? WHERE id = ?', [status, id]);

    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'Test drive not found' });
    }

    res.status(200).json({ message: 'Test drive status updated successfully' });
  } catch (error) {
    console.error('Error updating test drive status:', error);
    res.status(500).json({ error: 'Failed to update test drive status' });
  }
};
