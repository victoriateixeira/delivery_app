const { User } = require('../database/models');

const getAllSellers = async () => {
  const sellers = await User.findAll({
    where: { role: 'seller' },
    attributes: { exclude: ['password'] },
    
  });
  
  return sellers;
};

module.exports = {
  getAllSellers,
  
};