const express = require('express');
const userRoutes = require('./user.routes');
const ordersRoutes = require('./orders.routes');
const productRoutes = require('./products.routes');
const adminRouter = require('./admin.routes');

const router = express.Router();

router.use('/user', userRoutes);
router.use('/admin', adminRouter);
router.use('/customers/orders', ordersRoutes);
router.use('/customer/orders', ordersRoutes);
router.use('/customer/products', productRoutes);

module.exports = router;