const rescue = require('express-rescue');

const BlogPostService = require('../services/BlogPostService');

const add = rescue(async (req, res) => {
  const { title, content } = req.body;

  const posts = await BlogPostService.add(title, content, req.user);
  res.status(201).json(posts);
});

module.exports = {
  add,
};
