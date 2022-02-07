const rescue = require('express-rescue');

const CategoriesService = require('../services/CategoriesService');

const add = rescue(async (req, res) => {
  const { name } = req.body;

  const categories = await CategoriesService.add(name);

  res.status(201).json(categories);
});

module.exports = {
  add,
};
