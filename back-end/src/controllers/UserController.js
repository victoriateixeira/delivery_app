const userService = require('../services/UserService');

async function createUser(req, res) {
  const user = req.body;
  const result = await userService.createUser(user);
  res.status(201).json(result);
}

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