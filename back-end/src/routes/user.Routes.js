const express = require('express');
const userController = require('../controllers/userController');

const loginRoute = express.Router();

loginRoute.post('/', userController.findUser);

module.exports = {
  loginRoute,
};
