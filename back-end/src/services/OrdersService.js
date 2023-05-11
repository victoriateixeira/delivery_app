const { Sale, Product, User } = require('../database/models');

const getOrdersByUserId = async (userId) => {
  const orders = await Sale.findAll({
    where: { userId },
  });
  if (!orders) return [];
  return orders;
};

const orderObject = (order) => {
  const { id, totalPrice, saleDate, status, products, seller } = order;
  const obj = {
    id,
    price: totalPrice,
    date: saleDate,
    status,
    seller: seller.name,
    products: products.map((product) => {
      const objProduct = {
        id,
        name: product.name,
        price: product.price,
        quantity: product.SalesProducts.quantity,
      };
      return objProduct;
    }),
  };
  return obj;
};

const getOrderDetails = async (saleId) => {
  const order = await Sale.findOne(
    {
    where: { id: saleId },
    include: [
      { model: Product,
        as: 'products',
        attributes: ['name', 'price'],
        through: { attributes: ['quantity'] } },
      { model: User, as: 'seller', attributes: ['name'] },
    ],
    },
  );

  if (!order) return { type: 404, message: 'Pedido não encontrado' };
  return { type: null, message: orderObject(order) };
};

const updateOrderStatus = async (saleId, newStatus) => {
  await Sale.update(
    { status: newStatus },
    { where: { id: saleId } },
  );
  const { message } = await getOrderDetails(saleId);
  return message;
};

module.exports = {
  getOrdersByUserId,
  getOrderDetails,
  updateOrderStatus,
};
