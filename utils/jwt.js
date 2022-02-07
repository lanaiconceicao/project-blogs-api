const jwt = require('jsonwebtoken');

const { JWT_SECRET } = process.env;

const signToken = (payload) => jwt.sign(
  payload, JWT_SECRET, {
    algorithm: 'HS256',
    expiresIn: '1h',
  },
);

const verifyToken = (token) => jwt.verify(
  token, JWT_SECRET, { algorithms: ['HS256'] },
);

module.exports = { signToken, verifyToken };