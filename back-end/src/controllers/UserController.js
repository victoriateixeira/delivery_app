const userService = require('../services/UserService');

const findAll = async (_req, res) => {
const users = await userService.findAll();
return res.status(200).json(users);
};

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
  const user = req.body;
  try {
    const foundUser = await userService.findUser(user);
    const { type, message } = foundUser;
    if (!type) return res.status(200).json({ message });
    return res.status(type).json({ message });
  } catch (err) {
    return res.status(409).json({ message: err.message });
  }
};

module.exports = {
 findUser,
 createUser,
 findAll,
};