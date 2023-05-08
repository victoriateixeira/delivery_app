const { User } = require('../database/models');

const findUser = async (email) => {
  const user = await User.findOne({ where: { email } });
  console.log(user);
  if (user === null) {
    return { status: 401, message: { message: 'Invalid email or password' } };
  }
  return { status: 200, message: 'Valid email' };
};

module.exports = {
  findUser,
 };