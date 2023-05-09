const md5 = require('md5');
const { User } = require('../database/models');

async function findAll() {
  const result = await User.findAll();
  return result;
}

async function createUser(user) {
  const newUser = user;
  newUser.password = md5(user.password);
  const result = await User.create(newUser);
  return result;
}

const findUser = async (email) => {
  const user = await User.findOne({ where: { email } });
  return user;
};

module.exports = {
  findAll,
  createUser,
  findUser,
};