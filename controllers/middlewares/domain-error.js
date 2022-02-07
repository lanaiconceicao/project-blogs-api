// Middleware de erro feito com a ajuda do repositório da aula
// https://github.dev/tryber/sd-014-c-live-lectures/tree/lecture/24.3

const errorMap = {
  NotFound: 404,
};

module.exports = (err, req, res, next) => {
  if (!err.code || !errorMap[err.code]) return next(err);

  return res.status(errorMap[err.code]).json({
    code: err.code,
    message: err.message,
  });
};
