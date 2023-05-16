const jwt = require('jsonwebtoken');
const userService = require('../../services/UserService');

const secret = process.env.JWT_SECRET;

const validateToken = async (req, res, next) => {
  const token = req.header('Authorization');
  if (!token) {
    return res.status(401).json({
      message: 'Token not found',
    });
  }

  try {
    const decoded = jwt.verify(token, secret);
    const user = await userService.findUser(decoded.data.email);
    if (!user) {
      return res.status(401).json({
        message: 'Expired or invalid token',
      });
    }
  } catch (err) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }

  next();
};

module.exports = {
  validateToken,
};
