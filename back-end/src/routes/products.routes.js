const express = require('express');
const productsController = require('../controllers/ProductsController');

const productRoutes = express.Router();

productRoutes.get('/', productsController.getProducts);

module.exports = productRoutes;
