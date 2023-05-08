const userService = require('../services/userService');

const findUser = async (req) => {
  const { email } = req.body;
  const { status, message } = await userService.findUser(email);
  console.log(status, message);
  return { status, message };
};

module.exports = {
 findUser,
};