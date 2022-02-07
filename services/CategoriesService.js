const CategoryModel = require('../models/Category');

const add = async (name) => {
  const categories = await CategoryModel.create({
    name,
  });
  return categories.dataValues;
};

module.exports = {
  add,
};