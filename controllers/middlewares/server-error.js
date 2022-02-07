// Middleware de erro feito com a ajuda do repositório da aula
// https://github.dev/tryber/sd-014-c-live-lectures/tree/lecture/24.3

module.exports = (err, req, res, _next) => {
  console.error(err);
  return res.status(500).json({
    code: 'internalServerError',
    message: 'Internal server error',
  });
};
