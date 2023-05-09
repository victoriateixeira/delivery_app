const userService = require('../service/UserService');

const createUser = async (req, res) => {
  const user = req.body;
  const result = await userService.createUser(user);
  res.status(201).json(result);
};

module.exports = {
  createUser,
};