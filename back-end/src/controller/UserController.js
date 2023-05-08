const userService = require('../service/UserService');

async function createUser(req, res) {
  const user = req.body;
  const result = await userService.createUser(user);
  res.status(201).json(result);
}

module.exports = {
  createUser,
};