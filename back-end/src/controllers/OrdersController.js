const ordersService = require('../services/OrdersService');

const getOrdersByUserId = async (req, res) => {
  const { id } = req.params;
  const numberId = Number(id);
  const orders = await ordersService.getOrdersByUserId(numberId);

  return res.status(200).json(orders);
};

const getOrderDetails = async (req, res) => {
  const { id } = req.params;
  const numberId = Number(id);
  const details = await ordersService.getOrderDetails(numberId);
  const { type, message } = details;
  if (!type) return res.status(200).json(message);
  return res.status(type).json(message);
};

module.exports = {
  getOrdersByUserId,
  getOrderDetails,
};