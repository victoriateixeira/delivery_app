const express = require('express');
const userRoutes = require('./user.routes');
const ordersRoutes = require('./orders.routes');
const productRoutes = require('./products.routes');
const checkoutRoutes = require('./checkout.routes');

const router = express.Router();

router.use('/user', userRoutes);
router.use('/customers/orders', ordersRoutes);
router.use('/products', productRoutes);
router.use('/customer/checkout', checkoutRoutes);

module.exports = router;