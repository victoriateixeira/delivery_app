const express = require('express');
const ordersController = require('../controllers/OrdersController');

const sellerRoutes = express.Router();

sellerRoutes.get('/:id', ordersController.getOrdersBySellerId);

module.exports = sellerRoutes;