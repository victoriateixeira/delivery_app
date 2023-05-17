const jwt = require('jsonwebtoken');
const fs = require('fs');
const userService = require('../../services/UserService');

const secret = fs.readFileSync('jwt.evaluation.key');

const validateToken = async (req, res, next) => {
  const token = req.header('Authorization');
  if (!token) {
    return res.status(401).json({
      message: 'Token not found',
    });
  }
  try {
    const decoded = jwt.verify(token, secret);
    const user = await userService.findByEmail(decoded.email);
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

module.exports = validateToken;
