// const AppError = require('../../utils/AppError');

// const errorMiddleware = (err, _req, res, _next) => {
//   const { code, message } = err;

//   // se o erro for uma instância do app error:
//   if (err instanceof AppError) {
//     return res.status(code).json({ message });
//   }

//   return res.status(500).json({ message: 'Internal server error' });
// };

// module.exports = errorMiddleware;
