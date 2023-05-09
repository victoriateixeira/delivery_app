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

const findUser = async (req, res) => {
  const { email } = req.body;
  const user = await userService.findUser(email);
  
  const { type, message } = user;
  if (!type) return res.status(200).json(message);

  return res.status(type).json(message);
};

module.exports = {
 findUser,
 createUser,
};