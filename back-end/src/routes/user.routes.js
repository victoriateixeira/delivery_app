const express = require('express');
const userController = require('../controller/userController');

const router = express.Router();

router.post('/login', userController.findUser);

module.exports = router;
