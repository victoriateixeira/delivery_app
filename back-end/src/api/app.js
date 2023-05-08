const express = require('express');
const cors = require('cors');

const orderRoutes = require('../routes/orders.routes');
const productRoutes = require('../routes/products.routes');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/customers/orders', orderRoutes);
app.use('/products', productRoutes)
app.get('/coffee', (_req, res) => res.status(418).end());

module.exports = app;
