const express = require('express');
const { ProductsController } = require('../controllers');

const productRouter = express.Router();

productRouter.get('/', ProductsController.getAllProducts);
productRouter.get('/:id', ProductsController.getProductById);

module.exports = productRouter;