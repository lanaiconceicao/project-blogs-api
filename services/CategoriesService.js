const { Categories } = require('../models');

const add = async (name) => {
  const categories = await Categories.create({
    name,
  });
  return categories.dataValues;
};

const getAll = async () => {
  const categories = await Categories.findAll();
  return categories;
};

module.exports = {
  add,
  getAll,
};