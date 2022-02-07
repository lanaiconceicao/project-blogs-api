const { Users } = require('../../models');

const validateEmail = (req, res, next) => {
  const { email } = req.body;

  if (email === '') {
    return res.status(400).json({ message: '"email" is not allowed to be empty' });
  }

  if (!email) return res.status(400).json({ message: '"email" is required' });

  next();
};

const validatePassword = (req, res, next) => {
  const { password } = req.body;

  if (password === '') {
    return res.status(400).json({ message: '"password" is not allowed to be empty' });
  }

  if (!password) return res.status(400).json({ message: '"password" is required' });

  next();
};

const validateLogin = async (req, res, next) => {
  const { email, password } = req.body;

  const findOneUser = await Users.findOne({ where: { email } });

  if (!findOneUser) return res.status(400).json({ message: 'Invalid fields' });

  if (password !== findOneUser.password) {
    return res.status(400).json({ message: 'Invalid fields' });
  }

  next();
};

module.exports = {
  validateEmail,
  validatePassword,
  validateLogin };
