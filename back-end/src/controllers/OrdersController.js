const ordersService = require('../services/OrdersService');

const getOrdersByUserId = async (req, res) => {
  const { id } = req.params;
  const numberId = Number(id);
  const orders = await ordersService.getOrdersByUserId(numberId);

  return res.status(200).json(orders);
};

module.exports = {
  getOrdersByUserId,
};