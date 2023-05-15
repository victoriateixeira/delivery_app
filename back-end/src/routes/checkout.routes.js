const express = require('express');
const checkoutController = require('../controllers/CheckoutController');

const checkoutRoutes = express.Router();

checkoutRoutes.get('/', checkoutController.getSellers);

module.exports = checkoutRoutes;