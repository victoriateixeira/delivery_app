const errorMiddleware = (error, _req, res, _next) => {
console.log(error, 'MIDDLE');
  // res.status(error.code || 500);
   return res.status(error.code || 500).json({ message: error.message || 'Internal Server Error' });
};
module.exports = errorMiddleware;