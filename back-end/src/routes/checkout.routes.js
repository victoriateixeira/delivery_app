const express = require('express');
const checkoutController = require('../controllers/CheckoutController');
const validateJWT = require('../controllers/middlewares/validateJWT');

const checkoutRoutes = express.Router();

checkoutRoutes.post('/', validateJWT, checkoutController.postSale);
checkoutRoutes.get('/', checkoutController.getSellers);

module.exports = checkoutRoutes;