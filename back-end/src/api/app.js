const express = require('express');
const cors = require('cors');
const { productRouter } = require('../routes');
const errorMiddleware = require('../controllers/middlewares/errorMiddleware');

const app = express();
app.use(express.json());
app.use(cors());
app.use('/customer/products', productRouter);
app.use(errorMiddleware);
app.get('/coffee', (_req, res) => res.status(418).end());

module.exports = app;
