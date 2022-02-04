const rescue = require('express-rescue');

const User = require('../services/User');

const add = rescue(async (req, res) => {
  const { displayName, email, password, image } = req.body;

  const user = await User.add(displayName, email, password, image);

  res.status(201).json(user);
});

const getAll = rescue(async (_req, res) => {
  const getAllUsers = await User.getAll();
  res.status(200).json(getAllUsers);
});

const getById = rescue(async (req, res) => {
  const { id } = req.params;
  const getUserById = await User.getById(id);
  
  if (!getUserById) return res.status(404).json({ message: 'User does not exist' });
  
  return res.status(200).json(getUserById);
});

module.exports = {
  add,
  getAll,
  getById,
};
