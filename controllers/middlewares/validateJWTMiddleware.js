const jwt = require('../../utils/jwt');
const User = require('../../services/User');

const validateJWTMiddleware = async (req, res, next) => {
  const token = req.headers.authorization;
  console.log(token, 'authorization aqui');

  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }

  try {
    const verifiedToken = jwt.verifyToken(token);
    console.log(verifiedToken);
    req.user = verifiedToken;

    const user = await User.getByEmail(verifiedToken.email);
    req.user.id = user.id;

    next();
  } catch (err) {
    console.error(err);
    console.log('catch aqui Lanai');
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};

module.exports = { validateJWTMiddleware };

// const jwt = require('../../utils/jwt');
// const jwt = require('jsonwebtoken');
// const User = require('../../services/User');

// const jwtConfig = { algorithms: ['HS256'], expiresIn: '1h' };

// const { JWT_SECRET } = process.env;

// const validateJWTMiddleware = async (req, res, next) => {
//   const token = req.headers.authorization;
//   console.log(token, 'authorization aqui');

//   if (!token) {
//     return res.status(401).json({ message: 'Token not found' });
//   }

//   try {
//     const { email } = jwt.verify(token, JWT_SECRET, jwtConfig);

//     const user = await User.getByEmail(email);
//     req.user = user;

//     return next();
//   } catch (err) {
//     console.error(err);
//     console.log('catch aqui Lanai');
//     return res.status(401).json({ message: 'Expired or invalid token' });
//   }
// };

// module.exports = { validateJWTMiddleware };
