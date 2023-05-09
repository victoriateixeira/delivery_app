const express = require('express');
const ordersController = require('../controllers/OrdersController');

const orderRoutes = express.Router();

orderRoutes.get('/:id', ordersController.getOrdersByUserId);
orderRoutes.get('/details/:id', ordersController.getOrderDetails);

module.exports = orderRoutes;