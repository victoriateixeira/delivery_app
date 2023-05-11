const express = require('express');
const cors = require('cors');
const errorMiddleware = require('../controllers/middlewares/errorMiddleware');
const routes = require('../routes');

const app = express();
app.use(express.json());
app.use(cors());
app.use(routes);
app.use(errorMiddleware);

app.get('/coffee', (_req, res) => res.status(418).end());

module.exports = app;
