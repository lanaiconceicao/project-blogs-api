const jwt = require('../utils/jwt');
const { Users } = require('../models');

const add = async (displayName, email, password, image) => {
  await Users.create({
    displayName,
    email,
    password,
    image,
  });

  const token = jwt.signToken({ displayName });

  return token;
};

const getAll = async () => {
  const getAllUsers = await Users.findAll();
  return getAllUsers;
};

module.exports = {
  add,
  getAll,
};
