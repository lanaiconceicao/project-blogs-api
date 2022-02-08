const jwt = require('../../utils/jwt');
const User = require('../../services/UserService');

// Feito com a ajuda do estudante Gessé Carlos
const validateJWTMiddleware = async (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }

  try {
    const verifiedToken = jwt.verifyToken(token);
    // cria dentro de req a chave user e guarda a função que verifica
    // o token dentro dela
    req.user = verifiedToken;

    // verifica o usuário através do email
    const user = await User.getByEmail(verifiedToken.email);
    // cria dentro de user a chave id
    req.user.id = user.id;

    next();
  } catch (err) {
    console.error(err);
    console.log('caiu no catch');
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};

module.exports = { validateJWTMiddleware };
