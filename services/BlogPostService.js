const { BlogPosts, Users, Categories } = require('../models');

const add = async (title, content, userData) => {
  const userId = userData.id;
  console.log(userId, 'userId no BlogpostService');
  const posts = await BlogPosts.create({ title, content, userId });

  return {
    id: posts.id,
    title: posts.title,
    content: posts.content,
    userId,
  };
};

// É no service que cuidamos das regras de negócio e indicamos como vamos retornar para o endpoint
const getAll = async () => {
  const posts = await BlogPosts.findAll({
    attributes: { exclude: ['UserId'] },
    include: [
      { model: Users, as: 'user', attributes: { exclude: ['password'] } },
      { model: Categories, as: 'categories', through: { attributes: [] } },
    ],
  });

  return posts;
};

module.exports = {
  add,
  getAll,
};
