const ordersService = require('../services/OrdersService');

const getOrdersByUserId = async (req, res) => {
  const { id } = req.params;
  const numberId = Number(id);
  const orders = await ordersService.getOrdersByUserId(numberId);

  return res.status(200).json(orders);
};

const getOrdersBySellerId = async (req, res) => {
  const { id } = req.params;
  const numberId = Number(id);
  const orders = await ordersService.getOrdersBySellerId(numberId);

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

const updateOrderStatus = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  const update = await ordersService.updateOrderStatus(id, status);
  return res.status(200).json(update);
};

module.exports = {
  getOrdersByUserId,
  getOrderDetails,
  updateOrderStatus,
  getOrdersBySellerId,
};