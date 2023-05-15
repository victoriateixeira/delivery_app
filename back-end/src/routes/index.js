const express = require('express');
const userRoutes = require('./user.routes');
const ordersRoutes = require('./orders.routes');
const productRoutes = require('./products.routes');

const router = express.Router();

router.use('/user', userRoutes);
router.use('/customer/orders', ordersRoutes);
router.use('/products', productRoutes);

module.exports = router;