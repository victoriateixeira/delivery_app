const { User } = require('../database/models');

const findUser = async (email) => {
  const user = await User.findOne({ where: { email } });
  return user;
};

module.exports = {
  findUser,
 };