const express = require('express');
const ordersController = require('../controllers/OrdersController');

const ordersRoutes = express.Router();

ordersRoutes.get('/customer/:id', ordersController.getOrdersByUserId);
ordersRoutes.get('/seller/:id', ordersController.getOrdersBySellerId);
ordersRoutes.put('/details/:id', ordersController.updateOrderStatus);
ordersRoutes.get('/details/:id', ordersController.getOrderDetails);

module.exports = ordersRoutes;