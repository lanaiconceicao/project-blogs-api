const rescue = require('express-rescue');
const loginService = require('../services/LoginService');

const loginController = rescue(async (req, res) => {
  const { email } = req.body;

  const token = await loginService(email);

  return res.status(200).json({ token });
});

module.exports = loginController;