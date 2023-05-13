const jwt = require('jsonwebtoken');
const fs = require('fs');

const secretKey = fs.readFileSync('jwt.evaluation.key');

function createToken(user) {
  const options = {
    expiresIn: '7d',
    algorithm: 'HS256',
  };
  const token = jwt.sign(user, secretKey, options);
  return token;
}

module.exports = { createToken };