const { Sale } = require('../database/models');

const getOrdersByUserId = async (userId) => {
  const orders = await Sale.findAll({
    where: { userId }
  });
  if(!orders) return [];
  return orders;
}

module.exports = {
  getOrdersByUserId,
}