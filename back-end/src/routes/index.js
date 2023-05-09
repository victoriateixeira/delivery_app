const express = require('express');
const userRoutes = require('./user.routes');
const ordersRoutes = require('./orders.routes');

const router = express.Router();

router.use('/user', userRoutes);
router.use('/customers/orders', ordersRoutes);

module.exports = router;