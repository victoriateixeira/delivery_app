const express = require('express');
const ordersController = require('../controllers/OrdersController');

const orderRoutes = express.Router();

orderRoutes.get('/:id', ordersController.getOrdersByUserId);

module.exports =  orderRoutes;