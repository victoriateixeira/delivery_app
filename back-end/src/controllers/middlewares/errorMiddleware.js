const errorMiddleware = (error, _req, res, _next) => 

   res.status(error.code || 500).json({ message: error.message || 'Internal Server Error' });
module.exports = errorMiddleware;