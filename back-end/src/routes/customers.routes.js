const express = require('express');
const ordersController = require('../controllers/OrdersController');

const customerRoutes = express.Router();

customerRoutes.get('/:id', ordersController.getOrdersByUserId);
customerRoutes.put('/details/:id', ordersController.updateOrderStatus);
customerRoutes.get('/details/:id', ordersController.getOrderDetails);

module.exports = customerRoutes;
