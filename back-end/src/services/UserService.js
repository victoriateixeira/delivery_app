const md5 = require('md5');
const { User } = require('../database/models');

const findAll = async () => {
  const result = await User.findAll();
  return result;
};

const findUser = async (email) => {
  const user = await User.findOne({ where: { email } });
  if (user === null) throw new Error('User not found');
};

const createUser = async (user) => {
  const newUser = user;
  const verifyAccount = await User.findOne({ where: { email: user.email } });
  if (verifyAccount) throw new Error('Already registered');
  newUser.password = md5(user.password);
  const result = await User.create(newUser);
  return result;
};

module.exports = {
  findAll,
  findUser,
  createUser,
};