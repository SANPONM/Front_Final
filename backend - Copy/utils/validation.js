export const checkCarData = (req, res, next) => {
  const { model, price, year, description } = req.body;

  // Если хотя бы одно поле передано, проверяем наличие модели, цены и года
  if ((model || price || year) && (!model || !price || !year)) {
    return res.status(400).json({
      error: 'Model, price, and year are required if any of them are provided',
    });
  }

  // Дополнительные проверки, например, что цена и год - числа
  if (price && isNaN(price)) {
    return res.status(400).json({ error: 'Price must be a valid number' });
  }
  if (year && isNaN(year)) {
    return res.status(400).json({ error: 'Year must be a valid number' });
  }

  next(); // Если все в порядке, продолжаем
};
