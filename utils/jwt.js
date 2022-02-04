const jwt = require('jsonwebtoken');

const { JWT_SECRET } = process.env;

const signToken = (payload, duration = '1d') => jwt.sign(
  payload, JWT_SECRET, {
    algorithm: 'HS256',
    expiresIn: duration,
  },
);

const verifyToken = (token) => jwt.verify(
  token, JWT_SECRET, { algorithms: ['HS256'] },
);

module.exports = { signToken, verifyToken };