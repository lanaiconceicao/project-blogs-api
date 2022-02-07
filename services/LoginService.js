const jwt = require('../utils/jwt');

const loginService = (email) => {
  const token = jwt.signToken({ email });
  return token;
};

module.exports = loginService;
