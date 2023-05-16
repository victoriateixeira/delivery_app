const express = require('express');
const checkoutController = require('../controllers/CheckoutController');
const validateJWT = require('../controllers/middlewares/validateJWT');

const checkoutRoutes = express.Router();

checkoutRoutes.get('/', checkoutController.getSellers);
checkoutRoutes.post('/', validateJWT, checkoutController.postSale);

module.exports = checkoutRoutes;