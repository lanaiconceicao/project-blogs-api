module.exports = (categoryId, categories) => {
  const categoriesOnDatabase = categories.map(({ id }) => id);

  return categoryId.every((category) => categoriesOnDatabase.includes(category));
};

// checkCategories feito com a ajuda do estudante Gessé Carlos