const express = require('express');
const { loginRoute } = require('../routes/user.Routes');

const app = express();

app.get('/coffee', (_req, res) => res.status(418).end());

app.use(express.json());

app.use('/login', loginRoute);

module.exports = app;
