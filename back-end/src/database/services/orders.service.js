const { Sale } = require('../models/Sale');

const getOrdersByUserId = async (userId) => {
  const orders = await Sale.findAll({
    where: { userId }
  });

  return orders;
}

module.exports = {
  getOrdersByUserId,
}