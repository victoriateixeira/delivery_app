const Product = require('../database/models/Product');

const getAllProducts = async () => {
  const products = await Product.findAll();
  return products;
};

module.exports = { getAllProducts };