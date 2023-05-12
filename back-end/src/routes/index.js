const express = require('express');
const userRoutes = require('./user.routes');
const customerRoutes = require('./customer.routes');
const productRoutes = require('./products.routes');
const sellerRouter = require('./seller.routes');

const router = express.Router();

router.use('/user', userRoutes);
router.use('/customer/orders', customerRoutes);
router.use('/products', productRoutes);
router.use('/seller/orders', sellerRouter);

module.exports = router;