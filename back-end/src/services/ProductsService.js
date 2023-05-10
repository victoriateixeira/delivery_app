const { Product } = require('../database/models');

const getProducts = async () => {
  const products = await Product.findAll();
  if (!products) return [];
  return products;
};

module.exports = {
  getProducts,
};