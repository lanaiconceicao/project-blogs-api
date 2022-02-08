const { BlogPosts } = require('../models');

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

module.exports = {
  add,
};
