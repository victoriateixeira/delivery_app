const express = require('express');
const orderRoutes = require('../routes/orders.routes');

const app = express();
app.use(express.json());

app.use('/customers/orders', orderRoutes);

app.get('/coffee', (_req, res) => res.status(418).end());

module.exports = app;
