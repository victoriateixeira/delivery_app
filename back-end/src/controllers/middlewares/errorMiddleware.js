const errorMiddleware = (Error, _req, res, _next) => {
  res.status(Error.status || 500);
  res.send({ error: true, message: Error.message || 'Internal Server Error' });
};

module.exports = errorMiddleware;