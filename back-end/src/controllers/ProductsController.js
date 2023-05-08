const productsService = require('../services/ProductsService');

const getProducts = async (_req, res) => {
  const products = await productsService.getProducts();

  return res.status(200).json(products);
};

module.exports = {
  getProducts,
};