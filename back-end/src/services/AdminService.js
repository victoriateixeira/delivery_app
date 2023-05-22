const md5 = require('md5');
const { User } = require('../database/models');

const createUserAdmin = async (user) => {
  const newUser = user;
  const verifyEmail = await User.findOne({ where: { email: user.email } });
  const verifyName = await User.findOne({ where: { name: user.name } });
  if (verifyEmail || verifyName) throw new Error('Already registered');
  newUser.password = md5(user.password);
  const result = await User.create(newUser);
  const filtResult = {
    id: result.id,
    name: result.name,
    email: result.email,
    role: result.role,
  };
  return filtResult;
};

const deleteUser = async (id) => {
  const user = await User.findOne({ where: { id } });
  if (!user) throw new Error('User not found');
  await User.destroy({ where: { id } });
  const newUserList = await User.findAll();
  return newUserList;
};

module.exports = { createUserAdmin, deleteUser };