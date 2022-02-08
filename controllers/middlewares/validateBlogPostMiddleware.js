const { Categories } = require('../../models');
const checkCategories = require('../../utils/checkCategories');

const validateTitleAndContent = async (req, res, next) => {
  const { title, content } = req.body;

  if (!title) {
    return res.status(400).json({ message: '"title" is required' });
  }

  if (!content) {
    return res.status(400).json({ message: '"content" is required' });
  }

  next();
};

const validateCategory = async (req, res, next) => {
  const { categoryIds } = req.body;

  if (!categoryIds) {
    return res.status(400).json({ message: '"categoryIds" is required' });
  }

  // verifyCategories feito com a ajuda do estudante Gessé Carlos

  const categories = await Categories.findAll();
  const verifyCategories = checkCategories(categoryIds, categories);

  if (!verifyCategories) {
    return res.status(400).json({ message: '"categoryIds" not found' });
  }

  next();
};

module.exports = {
  validateTitleAndContent,
  validateCategory,
};