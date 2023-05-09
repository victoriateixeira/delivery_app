const userService = require('../services/UserService');

const createUser = async (req, res) => {
  const user = req.body;
  try {
    const result = await userService.createUser(user);
    return res.status(201).json(result);
  } catch (err) {
    return res.status(409).json({ message: err.message });
  }
};

module.exports = {
  createUser,
};