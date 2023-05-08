const Product = require('../database/models/Product');

const getAllProducts = async () => {
  const products = await Product.findAll();
  return products;
};
const getProductById = async (id) => {
  const product = await Product.findById(id);
  return product;
};

module.exports = { getAllProducts, getProductById };