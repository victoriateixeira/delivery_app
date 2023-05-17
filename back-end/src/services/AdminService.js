const md5 = require('md5');
const { User } = require('../database/models');

const createUserAdmin = async (user) => {
  const newUser = user;
  const verifyEmail = await User.findOne({ where: { email: user.email } });
  const verifyName = await User.findOne({ where: { name: user.name } });
  if (verifyEmail || verifyName) throw new Error('Already registered');
  newUser.password = md5(user.password);
  const result = await User.create(newUser);
  return result;
};

const deleteUser = async (id) => {
  const user = await User.findOne({ where: { id } });
  if (!user) throw new Error('User not found');
  await User.destroy({ where: { id } });
  return User.findAll();
};

module.exports = { createUserAdmin, deleteUser };