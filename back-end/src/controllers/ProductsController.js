const { ProductsService } = require('../services');

const getAllProducts = async (_req, res) => {
const products = await ProductsService.getAllProducts();
return res.status(200).json(products);
};

const getProductById = async (req, res) => {
  const { id } = req.params;
  const product = await ProductsService.getProductById(Number(id));
  return res.status(200).json(product);
};
module.exports = {
  getAllProducts,
  getProductById,
};