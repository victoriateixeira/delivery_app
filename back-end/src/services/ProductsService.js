const { Product } = require('../database/models');

const getProducts = async (userId) => {
  const products = await Product.findAll();
  if(!products) return [];
  return products;
}

module.exports = {
  getProducts,
}