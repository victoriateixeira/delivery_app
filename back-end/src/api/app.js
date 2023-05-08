const express = require('express');
const { productRouter } = require('../routes');

const app = express();
app.use(express.json());
app.use('/products', productRouter);
app.get('/coffee', (_req, res) => res.status(418).end());

module.exports = app;
