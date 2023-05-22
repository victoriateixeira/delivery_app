const express = require('express');
const userRoutes = require('./user.routes');
const ordersRoutes = require('./orders.routes');
const productRoutes = require('./products.routes');
const adminRoutes = require('./admin.routes');
const checkoutRoutes = require('./checkout.routes');

const router = express.Router();

router.use('/user', userRoutes);
router.use('/admin', adminRoutes);
router.use('/products', productRoutes);
router.use('/customer/checkout', checkoutRoutes);
router.use('/orders', ordersRoutes);
router.use('/customer/orders', ordersRoutes);
router.use('/customer/products', productRoutes);
module.exports = router;