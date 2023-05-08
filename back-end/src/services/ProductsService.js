const Product = require('../database/models/Product');

const getAllProducts = async () => {
  const products = await Product.findAll();
  return products;
};
const getProductById = async (id) => {
  const product = await Product.findById(id);
  if (!product) { throw new Error({ status: 404, message: 'Product Not Found' }); }
  return product;
};

module.exports = { getAllProducts, getProductById };