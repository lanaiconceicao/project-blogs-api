const { Categories } = require('../models');

const add = async (name) => {
  const categories = await Categories.create({
    name,
  });
  return categories.dataValues;
};

module.exports = {
  add,
};