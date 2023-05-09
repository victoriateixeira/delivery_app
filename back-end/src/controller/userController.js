const userService = require('../service/userService');

const findUser = async (req, res) => {
  const { email } = req.body;
  const user = await userService.findUser(email);
  if (user === null) return res.status(401).json('Invalid email or password');
  
  res.status(200).json(user);
};

module.exports = {
 findUser,
};