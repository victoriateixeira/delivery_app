const express = require('express');
const { ProductsController } = require('../controllers');

const productRoutes = express.Router();

productRoutes.get('/', ProductsController.getAllProducts);
productRoutes.get('/:id', ProductsController.getProductById);

module.exports = productRoutes;