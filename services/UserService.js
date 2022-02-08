const jwt = require('../utils/jwt');
const { Users } = require('../models');

const add = async (displayName, email, password, image) => {
  await Users.create({
    displayName,
    email,
    password,
    image,
  });

  const token = jwt.signToken({ email });

  return token;
};

const getAll = async () => {
  const getAllUsers = await Users.findAll();
  return getAllUsers;
};

const getById = async (id) => {
  const getUserById = await Users.findByPk(id);
  return getUserById;
};

// Criado com a ajuda do estudante Gessé Carlos
// Ao invés de fazer a verificação pelo id, faremos pelo email
// chamamos a função getByEmail dentro do middleware validateJWT
const getByEmail = async (email) => {
  const findOneEmail = await Users.findOne({ where: { email } });

  return findOneEmail.dataValues;
};

module.exports = {
  add,
  getAll,
  getById,
  getByEmail,
};
