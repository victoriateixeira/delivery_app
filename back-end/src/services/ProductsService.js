const { Product } = require('../database/models');

const getAllProducts = async () => {
  const products = await Product.findAll();
  return products;
};
const getProductById = async (id) => {
  const product = await Product.findAll(
    { where: { id } },
  );
  if (product.length === 0) { 
    const error = new Error('Product Not Found');
    error.code = 404;
    throw error; 
  }
  return product;
};

module.exports = { getAllProducts, getProductById };