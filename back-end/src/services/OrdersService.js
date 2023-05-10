const { Sale, SalesProducts, Product, User } = require('../database/models');

const getOrdersByUserId = async (userId) => {
  const orders = await Sale.findAll({
    where: { userId },
  });
  if (!orders) return [];
  return orders;
};

const getOrderDetails = async (saleId) => {
  const order = await Sale.findOne(
    {
    where: { id: saleId },
    include: [
      { model: SalesProducts, include: [{ model: Product, as: 'products' }] },
      { model: User, as: 'seller' },
    ],
    },
  );

  if (!order) return { type: 404, message: 'Pedido não encontrado' };
  return { type: null, message: order };
};

module.exports = {
  getOrdersByUserId,
  getOrderDetails,
};
