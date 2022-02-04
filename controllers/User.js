const rescue = require('express-rescue');

const User = require('../services/User');

const add = rescue(async (req, res) => {
  const { displayName, email, password, image } = req.body;

  const user = await User.add(displayName, email, password, image);

  res.status(201).json(user);
});

module.exports = {
  add,
};
